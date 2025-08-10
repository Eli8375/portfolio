import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb"
import { SiTypescript, SiMongodb, SiPostgresql } from "react-icons/si"
import { FaPython, FaReact, FaGithub, FaDocker } from "react-icons/fa"
import { BiLogoFirebase } from "react-icons/bi"

export default function Skills() {
    return(
        <div id="skills-container" className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl h-auto bg-blue-600 flex flex-col justify-between">
            <h1 id="platforms-tools" className="my-10 flex flex-col flex-wrap text-primary-color text-shadow-lg items-center">PLATFORMS & TOOLS</h1>
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
        </div>
    )
}