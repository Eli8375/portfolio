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
                {src:"/engagement_preferences.png"}
            ],
        },
        {
            phase: "Phase 2",
            title: "High-Fidelity Design & Planning",
            description: "Our team translated the low-fi concepts into polished high-fidelity Figma designs, creating a consistent visual style and interaction patterns. We planned our sprints and assigned tasks using Trello, ensuring clear ownership of features. This stage served as the blueprint for all development work that followed.",
        },
        {
            phase: "Phase 3",
            title: "Development & Demo",
            description: "Using React Native with Expo and Firebase, we brought the app to life with user authentication, posting features, and a digital closet function. The final prototype was demonstrated through an emulator, showcasing the app’s smooth navigation and visually engaging UI. While unpublished, the demo video captured the full experience.",
        },
    ];

    return(
        <section id="project-timeline" className="bg-gray-300 h-auto">
            <div className="px-6 py-15">
                <h2 className="text-3xl font-bold text-secondary-color mb-8 text-center">
                    Senior Project
                </h2>
                <div id="phases-container" className="relative border-1-4 border-blue-600">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="mx-5">
                            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[10px] border-4 border-white"></div>
                            <time className="block text-sm text-gray-500 mb-1">
                                {milestone.phase}
                            </time>
                            <h3 className="text-xl font-semibold text-secondary-color">
                                {milestone.title}
                            </h3>
                            <p className="mt-2 text-gray-700">
                                {milestone.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section> 
    )
}