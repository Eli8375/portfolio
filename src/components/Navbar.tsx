export default function Navbar() {
    return(
        <nav id="navbar" className="bg-white shadow sticky top-0">
            <div id="navbar-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div id="navbar-content" className="flex justify-around items-center h-16">
                    <div id="navbar-links" className="hidden md:flex space-x-8 justify-betweenk">
                        <a id="nav-home" href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
                        <a id="nav-about" href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
                        <a id="nav-portfolio" href="#portfolio" className="text-gray-700 hover:text-blue-600 transition">Portfolio</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}