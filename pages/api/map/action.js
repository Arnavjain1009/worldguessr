import mapConst from "@/components/maps/mapConst";
import parseMapData from "@/components/utils/parseMapData";
import generateSlug from "@/components/utils/slugGenerator";
import Map from "@/models/Map";
import User from "@/models/User";

import countries from '@/public/countries.json';
import officialCountryMaps from '@/public/officialCountryMaps.json';

// Function to convert latitude and longitude to Cartesian coordinates
function latLngToCartesian(lat, lng) {
  const R = 6371; // Earth radius in km
  const phi = (lat * Math.PI) / 180;
  const theta = (lng * Math.PI) / 180;
  const x = R * Math.cos(phi) * Math.cos(theta);
  const y = R * Math.cos(phi) * Math.sin(theta);
  const z = R * Math.sin(phi);
  return { x, y, z };
}

// Function to calculate the distance between two Cartesian coordinates
function calculateDistance(cart1, cart2) {
  const dx = cart1.x - cart2.x;
  const dy = cart1.y - cart2.y;
  const dz = cart1.z - cart2.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

export default async function handler(req, res) {

  // only allow post
  if(req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  let { action, secret, name, data, description_short, description_long, mapId } = req.body;

  if(!action || !secret) {
    return res.status(400).json({ message: 'Missing action or secret' });
  }

  // get user from secret
  const user = await User.findOne({ secret: secret });
  if(!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // creating map
  if(action === 'create') {
    if(!name || !data || !description_short || !description_long) {
      return res.status(400).json({ message: 'Missing name, data, description_short, or description_long' });
    }

    name = name.trim();
    description_short = description_short.trim();
    description_long = description_long.trim();

    // validate name
    if(typeof name !== 'string' || name.length < mapConst.MIN_NAME_LENGTH  || name.length > mapConst.MAX_NAME_LENGTH) {
      return res.status(400).json({ message: `Name must be between ${mapConst.MIN_NAME_LENGTH} and ${mapConst.MAX_NAME_LENGTH} characters` });
    }

    // validate short description
    if(typeof description_short !== 'string' || description_short.length < mapConst.MIN_SHORT_DESCRIPTION_LENGTH || description_short.length > mapConst.MAX_SHORT_DESCRIPTION_LENGTH) {
      return res.status(400).json({ message: `Short description must be between ${mapConst.MIN_SHORT_DESCRIPTION_LENGTH} and ${mapConst.MAX_SHORT_DESCRIPTION_LENGTH} characters` });
    }

    // validate long description
    if(typeof description_long !== 'string' || description_long.length < mapConst.MIN_LONG_DESCRIPTION_LENGTH || description_long.length > mapConst.MAX_LONG_DESCRIPTION_LENGTH) {
      return res.status(400).json({ message: `Long description must be between ${mapConst.MIN_LONG_DESCRIPTION_LENGTH} and ${mapConst.MAX_LONG_DESCRIPTION_LENGTH} characters` });
    }

    // make sure short and long descriptions are different
    if(description_short === description_long) {
      return res.status(400).json({ message: 'Short and long descriptions must be different' });
    }

    const slug = generateSlug(name);
    if(slug === 'all' || countries.includes(slug.toUpperCase()) || Object.values(officialCountryMaps).find(map => map.slug === slug)) {
      return res.status(400).json({ message: 'Please choose a different name' });
    }

    // validate data
    const locationsData = parseMapData(data);
    if(!locationsData || locationsData.length < mapConst.MIN_LOCATIONS) {
      return res.status(400).json({ message: 'Need at least ' + mapConst.MIN_LOCATIONS + ' valid locations (got ' + (locationsData?.length ?? 0)+ ')' });
    }
    if(locationsData.length > mapConst.MAX_LOCATIONS) {
      return res.status(400).json({ message: `To make a map with more than ${mapConst.MAX_LOCATIONS} locations, please contact us at gautam@worldguessr.com` });
    }

    // Convert all locations to Cartesian coordinates
    const cartesianLocations = locationsData.map(loc => latLngToCartesian(loc.lat, loc.lng));

    // Sort by x-coordinate (you can choose any dimension)
    cartesianLocations.sort((a, b) => a.x - b.x);

    // Find the maximum distance between the first and last sorted locations
    const maxDist = calculateDistance(cartesianLocations[0], cartesianLocations[cartesianLocations.length - 1]);

    // create map
    const map = await Map.create({
      slug,
      name,
      created_by: user._id,
      data: locationsData,
      description_short,
      description_long,
      maxDist
    });

    return res.status(200).json({ message: 'Map created', map });
  }

  // delete map
  if(action === 'delete') {
    if(!mapId) {
      return res.status(400).json({ message: 'Missing mapId' });
    }

    // find the map
    const map = await Map.findById(mapId);
    if(!map) {
      return res.status(404).json({ message: 'Map not found' });
    }

    // check if the user is the owner
    if(map.created_by.toString() !== user._id.toString()) {
      return res.status(403).json({ message: 'You are not authorized to delete this map' });
    }

    // delete the map
    await map.remove();
    return res.status(200).json({ message: 'Map deleted' });
  }

  return res.status(400).json({ message: 'Invalid action' });
}

export const config = {
  api: {
      bodyParser: {
          sizeLimit: '4mb' // Set desired value here
      }
  }
}