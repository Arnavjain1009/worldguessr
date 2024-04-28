import { FaInfo, FaDiscord, FaGithub } from 'react-icons/fa';

export default function BottomLeft({ setInfoModal}) {
  return (
    <div className='bottomLeft hideOnMobile'>
      <button className="navButton" onClick={() => {
        setInfoModal(true);
      }}><FaInfo size={25}/></button>
      <button className="navButton" onClick={() => {
        window.open('https://discord.gg/ubdJHjKtrC', '_blank');
      }}><FaDiscord size={25}  /></button>
      <button className="navButton" onClick={() => {
        window.open('https://github.com/codergautam/worldguessr', '_blank');
      }}><FaGithub size={25} /></button>
    </div>
  )
}