import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return(
        <footer id="footer-container" className="w-full bg-gray-800 text-white py-6">
            <div id="footer-content" className="px-4 flex sm:flex-row justify-between items-center text-sm">
                <div id="contact-container" className='flex flex-col'>
                    <p id="footer-name">Aleksander Alderete {new Date().getFullYear()}</p>
                    <div id='email'>
                        <a href="mailto:alekajobs@gmail.com" className='hover:text-gray-400 underline'>alekajobs@gmail.com</a>
                    </div>
                    <div id='social-media-container' className='flex space-x-6 mt-4 text-xl'>
                        <div id='github'>
                            <a href="https://github.com/Eli8375" className='hover:text-gray-400'><FaGithub /></a>
                        </div>
                        <div id='linkedin'>
                            <a href="https://www.linkedin.com/in/aleksander-a-ba244730b/" className='hover:text-gray-400'><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
                <div id="footer-link-container" className="flex space-x-4">
                    <a href="#home" className="hover:underline">Home</a>
                    <a href="#about" className="hover:underline">About</a>
                    <a href="#portfolio" className="hover:underline">Portfolio</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                </div>
            </div>
        </footer>
    )
}