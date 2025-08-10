import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb"
import { SiTypescript, SiMongodb, SiPostgresql } from "react-icons/si"
import { FaPython, FaReact, FaGithub, FaDocker } from "react-icons/fa"
import { BiLogoFirebase } from "react-icons/bi"

export default function Skills() {
    return(
        <section id="skills-container" className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl h-auto bg-blue-600 flex flex-col justify-between p-20 mx-30 rounded-3xl">
            <h1 id="platforms-tools" className="my-10 flex flex-col flex-wrap text-primary-color text-shadow-lg items-center pb-10">PLATFORMS & TOOLS</h1>
                <div id="dev-icons" className="flex flex-wrap justify-around mb-15 text-white gap-10 sm:gap-10 md:gap-10 lg:gap-10">
                    <div id="dev-icons-left" className="flex gap-14">
                        <TbBrandCpp />
                        <SiTypescript />
                        <FaPython />
                        <FaReact />
                        <TbBrandCSharp />
                    </div>
                    <div id="dev-icons-right" className="flex gap-14">
                        <FaDocker />
                        <FaGithub />
                        <BiLogoFirebase />
                        <SiPostgresql />
                        <SiMongodb />
                    </div>
                </div>
        </section>
    )
}