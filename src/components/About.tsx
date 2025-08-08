import maui from "../assets/images/maui.jpg"

export default function About() {
    return(
        <div id="about-container" className="h-175 bg-white">
            <div id="about-content" className="flex gap-15 my-15 mx-50">
                <div id="images-container">
                    <img src={maui} alt="maui" className="w-450 h-150 border-white border-6"/>
                </div>
                <div id="writing-container">
                    <div id="heading-container" className="text-secondary-color flex flex-col gap-4 mb-6">
                        <h1 id="about-me" className="text-5xl font-bold whitespace-nowrap text-secondary-color">Hello,</h1>
                        <p id="paragraph" className="text-2xl">My name's Aleksander Alderete. I'm a passionate developer with a drive
                            to solve difficult problems with creative solutions. As a new graduate of computer science
                            with practice in various tools and paradigms, I'm constantly seeking new opportunities to
                            grow and collaborate. Always eager to push myself, I'm excited to test new boundaries and
                            use my skills for innovative companies and projects.
                        </p>
                        <div id="exp-edu-container" className="text-2xl flex">
                            <div id="exp-container" className="flex flex-col flex-1">
                                <h2 id="work-header" className="text-3xl font-bold">Work Experience</h2>
                                <div id="exp1" className="my-2">
                                    <h3 id="minutes-sec">Minutes Secretary</h3>
                                    <p id="dates-worked-1">2021-Present</p>
                                </div>
                                <div id="exp2">
                                    <h3 id="sub">Substitute Teacher</h3>
                                    <p id="dates-worked-1">2018-2022</p>
                                </div>
                            </div>
                            <div id="edu-container" className="flex flex-col flex-1">
                                <h2 id="edu-header" className="text-3xl font-bold">Education</h2>
                                <div id="edu1" className="my-2">
                                    <h3 id="csulb">CSU Long Beach</h3>
                                    <p id="comp-sci">Computer Science</p>
                                    <p id="dates-attended-1">2023-2025</p>
                                </div>
                                <div id="edu2">
                                    <h3 id="ucr">UC Riverside</h3>
                                    <p id="bus-econ">Business Economics</p>
                                    <p id="dates-attended-2">2014-2017</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}