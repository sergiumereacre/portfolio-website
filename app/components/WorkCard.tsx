import { IoSchool } from "react-icons/io5"
import { FaBriefcase } from "react-icons/fa"
import { BsFillPersonFill } from "react-icons/bs"
import { IoLocationSharp } from "react-icons/io5";
import { motion } from "framer-motion";

type WorkCardProps = {
    timeFrame: string;
    title: string;
    location: string;
    address: string;
    type: "student" | "work" | "consult";
    children: React.ReactNode;
}

export default function WorkCard(props: WorkCardProps) {
    let Icon;
    let shadowColour;
    let decorationColour;
    let iconSize;

    if (props.type === "student") {
        Icon = IoSchool;
        shadowColour = "shadow-green-500";
        decorationColour = "decoration-green-500";
        iconSize = 50;
    } else if (props.type === "work") {
        Icon = FaBriefcase;
        shadowColour = "shadow-blue-500";
        decorationColour = "decoration-blue-500";
        iconSize = 45;
    } else if (props.type === "consult") {
        Icon = BsFillPersonFill;
        shadowColour = "shadow-yellow-500";
        decorationColour = "decoration-yellow-500";
        iconSize = 45;
    }

    return (
        <motion.div whileHover={{ scale: 0.97 }} className="transition ease-out bg-card p-7 max-w-lg rounded-2xl flex flex-col gap-2 hover:bg-cardAccent hover:transition-all hover:duration-250 hover:ease-out">
            <div className="flex flex-row items-center gap-3">
                <Icon size={iconSize} className={`text-gray-300 drop-shadow-[0px_0px_15px_var(--tw-shadow-color)] ${shadowColour}`} />
                <div className="w-full">
                    <div className="flex flex-row justify-between">
                        <p className="text-gray-300 text-lg">{props.title}</p>
                        <div className="flex flex-row items-center text-sm">
                            <IoLocationSharp size={20} className="text-gray-400 inline-block" />
                            <a href={props.address} target="_blank" rel="noopener noreferrer" className={`text-gray-400 inline-block ml-1 underline underline-offset-2 hover:animate-pulse ${decorationColour}`}>{props.location}</a>
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm">{props.timeFrame}</p>
                </div>
            </div>
            <p className="text-gray-400">{props.children}</p>
        </motion.div>
    )
}