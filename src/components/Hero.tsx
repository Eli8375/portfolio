import { ChevronDownIcon } from "@heroicons/react/16/solid"

export default function Hero() {
    return(
        <section id="hero-section" className="h-260 flex flex-col justify-around px-4">
            <div id="hero-heading-container">
                <div id="hero-heading-description" className="flex flex-col">
                    <h1 id="hero-heading" className="font-oswald text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary-color mb-4">
                        Aleksander Alderete
                    </h1>
                    <p id="hero-description" className="text-lg sm:text-xl text-gray-700 mb-6">
                        Aspiring Tech
                    </p>
                </div>

            </div>
            <div id="explore-experience" className="flex flex-col items-center">
                <p id="explore-experience-text" className="flex flex-col items-center text-lg text-secondary-color border-2 border-blue-600 rounded-4xl p-4">
                    Explore My Experience
                </p> 
                <ChevronDownIcon className="size-10 text-secondary-color" />
            </div>
        </section>
    )
}