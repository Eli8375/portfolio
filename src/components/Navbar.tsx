export default function Navbar() {
    return(
        <nav className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
                        <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
                        <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition">Portfolio</a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}