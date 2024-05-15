"use client";

import React, { useRef, useEffect } from "react";
import { IoSchool, IoLocationSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { motion, useAnimation, useInView } from "framer-motion";
import { IconType } from "react-icons";

type WorkCardProps = {
	timeFrame: string;
	title: string;
	location: string;
	address: string;
	type: "student" | "work" | "consult";
	animate: "left" | "right";
	children: React.ReactNode;
};

const iconConfig: Record<
	string,
	{
		Icon: IconType;
		shadowColour: string;
		decorationColour: string;
		iconSize: number;
	}
> = {
	student: {
		Icon: IoSchool,
		shadowColour: "shadow-green-500",
		decorationColour: "decoration-green-500",
		iconSize: 50,
	},
	work: {
		Icon: FaBriefcase,
		shadowColour: "shadow-blue-500",
		decorationColour: "decoration-blue-500",
		iconSize: 45,
	},
	consult: {
		Icon: BsFillPersonFill,
		shadowColour: "shadow-yellow-500",
		decorationColour: "decoration-yellow-500",
		iconSize: 45,
	},
};

const cardVariants = {
	left: {
		visible: {
			opacity: 1,
			x: 0,
			transition: { type: "spring", ease: "easeOut", duration: 1 },
		},
		hidden: { opacity: 0, x: "80" },
	},
	right: {
		visible: {
			opacity: 1,
			x: 0,
			transition: { type: "spring", ease: "easeOut", duration: 1 },
		},
		hidden: { opacity: 0, x: "-80" },
	},
};

export default function WorkCard({
	timeFrame,
	title,
	location,
	address,
	type,
	animate,
	children,
}: WorkCardProps) {
	const { Icon, shadowColour, decorationColour, iconSize } =
		iconConfig[type] || iconConfig["student"];

	const controls = useAnimation();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [controls, isInView]);

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={cardVariants[animate]}
			whileHover={{ scale: 0.97 }}
			className="transition ease-out bg-card p-7 max-w-lg rounded-2xl flex flex-col gap-2 hover:bg-cardAccent hover:transition-all hover:duration-250 hover:ease-out"
		>
			<div className="flex flex-row items-center gap-3">
				<Icon
					size={iconSize}
					className={`text-gray-300 drop-shadow-[0px_0px_15px_var(--tw-shadow-color)] ${shadowColour}`}
				/>
				<div className="w-full">
					<div className="flex flex-row justify-between">
						<p className="text-gray-300 text-lg">{title}</p>
						<div className="flex flex-row items-center text-sm">
							<IoLocationSharp
								size={20}
								className="text-gray-400 inline-block"
							/>
							<a
								href={address}
								target="_blank"
								rel="noopener noreferrer"
								className={`text-gray-400 inline-block ml-1 underline underline-offset-2 hover:animate-pulse ${decorationColour}`}
							>
								{location}
							</a>
						</div>
					</div>
					<p className="text-gray-400 text-sm">{timeFrame}</p>
				</div>
			</div>
			<p className="text-gray-400">{children}</p>
		</motion.div>
	);
}
