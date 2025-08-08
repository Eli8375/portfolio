import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return(
        <footer id="footer-container" className="h-100 bg-blue-600 text-white py-6 flex justify-center">
            <div id="footer-content" className="px-4 flex flex-col justify-between text-sm items-center m-5">
                <h1 id='lets-connect' className='header-primary-size mb-10'>LET'S CONNECT!</h1>
                <div id='email'>
                    <a href="mailto:alekajobs@gmail.com" className='hover:text-gray-400 underline text-lg'>alekajobs@gmail.com</a>
                </div>
                <div id="phone-number" className='text-lg'>1-310-600-1918</div>
                <div id='social-media-container' className='flex space-x-6 mt-4 text-5xl'>
                    <div id='github'>
                        <a href="https://github.com/Eli8375" className='hover:text-gray-400'><FaGithub /></a>
                    </div>
                    <div id='linkedin'>
                        <a href="https://www.linkedin.com/in/aleksander-a-ba244730b/" className='hover:text-gray-400'><FaLinkedin /></a>
                    </div>
                </div>
                <a id='download-resume' href="/resume.pdf" download className='border-2 p-2 rounded-2xl hover:text-blue-600 hover:bg-white'>DOWNLOAD RESUME</a>
            </div>
        </footer>
    )
}