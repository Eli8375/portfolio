import { ChevronDownIcon } from "@heroicons/react/16/solid"

export default function Hero() {
    return(
        <section id="hero" className="relative overflow-hidden min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center px-6">
            {/* Aurora layer */}
            <div className="absolute inset-0 -z-10 aurora" aria-hidden />

            {/* dot grid*/}
            <div
                className="absolute inset-0 -z-10 opacity-25 text-blue-600"
                style={{
                backgroundImage:
                    "radial-gradient(currentColor 0.8px, transparent 0.8px)",
                backgroundSize: "18px 18px",
                }}
                aria-hidden
            />
            <div className="absolute inset-0 -z-10" aria-hidden />

            <div id="hero-heading-container" className="max-w-6xl mx-auto">
                <div id="hero-heading-description" className="flex flex-col">
                    <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary-color mb-4">
                        Aleksander Alderete
                    </h1>
                    <p id="hero-description" className="text-lg sm:text-xl text-gray-700 mb-6">
                        Aspiring Tech
                    </p>
                </div>
                <div
                    id="explore-experience"
                    className="flex flex-col items-center text-4xl sm:text-5xl md:text-6xl">
                    <p id="explore-experience-text" className="flex flex-col items-center text-lg text-secondary-color border-2 border-blue-600 rounded-4xl p-4">
                        Explore My Experience
                    </p>
                    <ChevronDownIcon className="size-10 text-secondary-color animate-bounce mt-5" />
                </div>
            </div>
        </section>
    )
}