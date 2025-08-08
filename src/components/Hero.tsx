export default function Hero() {
    return(
        <section id="hero-section" className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 px-4 text-center">
            <div className="max-w-screen-xl mx-auto px-4 text-center">
                <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
                    Hi, I'm <span className="text-blue-600">Aleksander Alderete</span>
                </h1>
                <p id="hero-description" className="text-lg sm:text-xl text-gray-700 mb-6">
                    I'm an aspiring developer focused on building fast, responsive, and modern applications
                </p>
            </div>
        </section>
    )
}