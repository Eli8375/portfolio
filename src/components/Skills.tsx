import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb"
import { SiTypescript, SiMongodb, SiPostgresql } from "react-icons/si"
import { FaPython, FaReact, FaGithub, FaDocker } from "react-icons/fa"
import { BiLogoFirebase } from "react-icons/bi"

export default function Skills() {
    return(
        <div id="skills-container" className="h-100 bg-blue-600 flex flex-col justify-between">
            <h1 id="platforms-tools" className="flex flex-col text-8xl text-primary-color text-shadow-lg items-center mt-8">PLATFORMS & TOOLS</h1>
            <div id="skills-content" className="flex flex-col text-8xl text-primary-color">
                <div id="dev-icons" className="flex justify-around mb-15">
                    <div id="dev-icons-left" className="flex space-x-10">
                        <TbBrandCpp />
                        <SiTypescript />
                        <FaPython />
                        <FaReact />
                        <TbBrandCSharp />
                    </div>
                    <div id="dev-icons-right" className="flex space-x-10">
                        <FaDocker />
                        <FaGithub />
                        <SiPostgresql />
                        <BiLogoFirebase />
                        <SiMongodb />
                    </div>
                </div>
            </div>
        </div>
    )
}