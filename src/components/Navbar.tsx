export default function Navbar() {
    return(
        <nav id="navbar" className="bg-white shadow sticky top-0 z-50">
            <div id="navbar-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div id="navbar-content" className="flex justify-between items-center h-16">
                    <div id="navbar-logo" className="text-2xl font-bold text-blue-600">Aleksander Alderete</div>
                    <div id="navbar-links" className="hidden md:flex space-x-8">
                        <a id="nav-home" href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
                        <a id="nav-about" href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
                        <a id="nav-portfolio" href="#portfolio" className="text-gray-700 hover:text-blue-600 transition">Portfolio</a>
                        <a id="nav-contact" href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}