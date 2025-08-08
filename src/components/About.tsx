import maui from "../assets/images/maui.jpg"

export default function About() {
    return(
        <div id="about-container" className="h-200 bg-white">
            <div id="about-content" className="flex">
                <div id="images-container">
                    <img src={maui} alt="maui" className="w-160 h-130 rounded-2xl border-white border-6"/>
                </div>
                <div id="writing-container">
                    <div id="heading-container" className="flex items-center gap-4 mb-6">
                        <h1 id="about-me" className="text-2xl font-bold whitespace-nowrap text-secondary-color">About Me</h1>
                        <div id="line" className="flex-grow h-px bg-blue-600"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}