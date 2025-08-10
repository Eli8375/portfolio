export default function Portfolio() {
    interface MilestoneImage {
        src: string;
        alt?: string;
        caption?: string;
    }

    interface Milestone {
        phase: string;
        title: string;
        description: string;
        images?: MilestoneImage[];
    }

    const milestones: Milestone[] = [
        {
            phase: "Phase 1",
            title: "Discovery & Design Foundations",
            description: "We began by identifying a gap in the fashion-focused social media market. Through interviews with potential users, we developed user stories and personas that highlighted the need for a more interactive, creator-friendly platform. Low-fidelity wireframes were first sketched on paper, then refined into a digital information architecture to guide early design decisions.",
            images: [
                {src:"low-fi-home.png"},
                {src:"low-fi-explore.png"},
                {src:"low-fi-stats.png"},
            ],
        },
        {
            phase: "Phase 2",
            title: "High-Fidelity Design & Planning",
            description: "Our team translated the low-fi concepts into polished high-fidelity Figma designs, creating a consistent visual style and interaction patterns. We planned our sprints and assigned tasks using Trello, ensuring clear ownership of features. This stage served as the blueprint for all development work that followed.",
            images: [
                {src:"hi-fi-home.png"},
                {src:"hi-fi-closet.png"},
                {src:"hi-fi-stats.png"},
            ]
        },
        {
            phase: "Phase 3",
            title: "Development & Demo",
            description: "Using React Native with Expo and Firebase, we brought the app to life with user authentication, posting features, and a digital closet function. The final prototype was demonstrated through an emulator, showcasing the app’s smooth navigation and visually engaging UI. While unpublished, the demo video captured the full experience.",
            images: [
                {src:"final-home.png"},
                {src:"final-closet.png"},
                {src:"final-stats.png"},
            ]
        },
    ];

    return(
        <section id="portfolio" className="bg-gray-300 h-auto">
            <div className="px-6 py-20 flex flex-col flex-wrap">
                <h2 className="text-5xl font-bold text-secondary-color mb-8 text-center">
                    Capstone Project
                </h2>
                <div id="phases-container" className="flex flex-row flex-wrap lg:flex-nowrap border-1-4 border-blue-600 mx-20">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="mx-5 py-10 flex flex-col">
                            {/* <div className="absolute w-4 h-18 bg-blue-600 rounded-full -left-[10px] border-4 border-white"></div>*/}
                            <time className="block text-5xl text-gray-500 mb-1">{milestone.phase}</time>
                            <h3 className="text-4xl font-semibold text-secondary-color">{milestone.title}</h3>
                            <p className="mt-2 text-gray-700 text-3xl">{milestone.description}</p>
                            {milestone.images && milestone.images.length > 0 && (
                                <div className="flex gap-20 justify-center pt-20 flex-wrap">
                                    {milestone.images.map((img, imageIndex) => (
                                        <figure key={imageIndex} className="border-2">
                                            <img src={img.src} className="max-w-70 w-auto h-auto max-h-140"/>
                                            {img.caption && (
                                                <figcaption className="text-sm text-gray-400">{img.caption}</figcaption>
                                            )}
                                        </figure>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            <a href="https://youtu.be/2GelUVe3n6M" className="text-blue-600 border-2 flex justify-center items-center rounded-3xl text-3xl p-3 hover:bg-blue-600 hover:text-white hover:border-blue-600">Check out our demo!</a>
            </div>
        </section> 
    )
}