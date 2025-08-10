export default function Navbar() {
    return(
        <nav id="navbar" className="bg-white shadow sticky top-0 h-auto w-auto inset-x-0 z-50 backdrop-blur">
            <div id="navbar-container" className="mx-auto px-4 sm:px-6 lg:px-8">
                <div id="navbar-content" className="flex justify-around items-center h-16">
                    <div id="navbar-links" className="md:flex space-x-8 justify-between">
                        <a id="nav-home" href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
                        <a id="nav-about" href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
                        <a id="nav-portfolio" href="#portfolio" className="text-gray-700 hover:text-blue-600 transition">Portfolio</a>
                        <a id="nav-portfolio" href="#footer" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}