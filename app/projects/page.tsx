"use client"

import { motion } from 'framer-motion';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Project from '@/app/components/Project';
import { NextUIProvider } from '@nextui-org/react';

// Importing all the images
import AK1 from '@/public/AK1.png';
import AK2 from '@/public/AK2.png';
import AK3 from '@/public/AK3.png';
import AK4 from '@/public/AK4.png';
import AK5 from '@/public/AK5.png';
import App1 from '@/public/App1.png';
import App2 from '@/public/App2.png';
import App3 from '@/public/App3.png';
import App4 from '@/public/App4.png';
import App5 from '@/public/App5.png';
import App6 from '@/public/App6.png';
import YTD from '@/public/YTD.png';
import Zork1 from '@/public/Zork1.png';
import Zork2 from '@/public/Zork2.png';

export default function Projects() {
    const projects = [
        {
            title: "Animal Kingdom",
            description: "Embarking on my first Full-Stack venture, I melded frontend finesse with backend proficiency. Laravel empowered my backend as TailwindCSS enhanced aesthetics. This project marked my gateway into confident frontend craftsmanship.",
            longDescription: "Inaugurating my journey into Full-Stack prowess, I orchestrated a symphony of frontend finesse and backend brilliance. Leveraging the dynamic capabilities of Laravel, I seamlessly wove intricate backend components to enhance user experiences. Diving into the artistic realm, I skillfully wielded the transformative might of TailwindCSS, sculpting visual marvels that transcend conventional web aesthetics. \nThe project emerged as a portal to my newfound frontier of confidence in frontend artistry. Evoking synergy between user-centric design and functionality, this endeavor embodies my adaptability in navigating the intricate interplay of technologies. My passion for crafting fluid, engaging web experiences found expression through this digital masterpiece, resonating with modern design paradigms.",
            images: [
                {
                    src: AK1,
                    alt: "Animal Kingdom 1"
                },
                {
                    src: AK2,
                    alt: "Animal Kingdom 2"
                },
                {
                    src: AK3,
                    alt: "Animal Kingdom 3"
                },
                {
                    src: AK4,
                    alt: "Animal Kingdom 4"
                },
                {
                    src: AK5,
                    alt: "Animal Kingdom 5"
                }
            ],
            technologies: [
                {
                    name: "Laravel",
                    colour: "bg-red-700"
                },
                {
                    name: "PHP",
                    colour: "bg-gray-500"
                },
                {
                    name: "MySQL",
                    colour: "bg-green-600"
                },
                {
                    name: "TailwindCSS",
                    colour: "bg-purple-700"
                }
            ],
        },
        {   
            title: "Youtube Downloader",
            description: "Crafted using PyTube, my Python-based YouTube Downloader empowers users to extract videos in peak quality. Audio-only downloads are also facilitated. This tool showcases my coding finesse alongside user-focused utility.",
            longDescription: "Scripting a saga of software sophistication, I conceived a Python-powered YouTube Downloader that marries seamless functionality with user empowerment. Envision a realm where videos of the highest pedigree are at your beck and call. With the PyTube library as my wand, I conjured a solution that empowers users to wield control over their media experiences. \nBeyond the realms of mere video extraction, this tool elevates the experience by offering selective audio-only downloads, a testament to my commitment to crafting solutions with intuitive user interfaces. This endeavor transcends code, encapsulating my devotion to delivering functional elegance.",
            images: [
                {
                    src: YTD,
                    alt: "Youtube Downloader"
                }
            ],
            technologies: [
                {
                    name: "Python",
                    colour: "bg-purple-700"
                },
                {
                    name: "PyTube",
                    colour: "bg-red-900"
                },
            ],
        },
        {
            title: "Zork Game",
            description: "Within a C++ academic module, I devised an immersive visual-based adventure. Enthusiasts navigate a virtual realm, engaging with its intricacies. This project exemplifies my fusion of coding acumen with creative ingenuity.",
            longDescription: "Embarking on a coding odyssey, I harnessed the prowess of C++ and Qt Studio to resurrect the classic allure of adventure gaming in a modern, graphical realm. This homage to the revered Zork transported users to a meticulously woven tapestry of interactive storytelling. My labor was poured into every pixel, immortalizing the nostalgic magic of yesteryears within the framework of contemporary GUI aesthetics. \nEvery facet of this endeavor echoes my ability to transform code into tangible narratives. Merging the captivating essence of exploration with the allure of interactive technology, this project signifies my knack for enveloping users in captivating digital experiences.",
            images: [
                {
                    src: Zork1,
                    alt: "Zork Game 1"
                },
                {
                    src: Zork2,
                    alt: "Zork Game 2"
                }
            ],
            technologies: [
                {
                    name: "C++",
                    colour: "bg-slate-700"
                },
                {
                    name: "QT Studio",
                    colour: "bg-green-700"
                }
            ],
        },
        {
            title: "Wildlife Explore",
            description: "Collaboratively, we birthed a machine learning-driven mobile app. Orchestrating frontend finesse through Figma and Android Studio was my forte. This achievement echoes my ability to meld innovation seamlessly with tech.",
            longDescription: "As the conductor of a collaborative symphony, I orchestrated the birth of a machine learning-infused mobile app that exemplifies the essence of synergy. Python stood as my muse, breathing life into backend services that unravel the intricacies of machine learning. This symphony of algorithms seamlessly harmonized with Android Studio, where visual tapestries of creativity and functionality merged. \nFrontend finesse, sculpted through Figma's canvas, transformed mere concepts into immersive realities. Each touch, swipe, and interaction is a testament to my dedication to crafting experiences that bridge innovation and utility. In the domain where lines of code converge with the complexities of machine learning and the allure of intuitive interfaces, this endeavor encapsulates my ability to craft holistic digital marvels.",
            images: [
                {
                    src: App1,
                    alt: "Wildlife Explore 1"
                },
                {
                    src: App2,
                    alt: "Wildlife Explore 2"
                },
                {
                    src: App3,
                    alt: "Wildlife Explore 3"
                },
                {
                    src: App4,
                    alt: "Wildlife Explore 4"
                },
                {
                    src: App5,
                    alt: "Wildlife Explore 5"
                },
                {
                    src: App6,
                    alt: "Wildlife Explore 6"
                }
            ],
            technologies: [
                {
                    name: "Android Studio",
                    colour: "bg-green-600"
                },
                {
                    name: "Python",
                    colour: "bg-purple-700"
                },
                {
                    name: "Figma",
                    colour: "bg-yellow-600"
                },
                {
                    name: "Java",
                    colour: "bg-orange-700"
                }
            ],
        }
    ];

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 25, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <NextUIProvider>
            <main className="min-h-screen flex flex-col">
                <Navbar />
                <div className='flex-grow flex items-center justify-center'>
                    <motion.div className='px-5 py-10 grid grid-cols-1 md:grid-cols-2 gap-5' variants={container} initial="hidden" animate="visible">
                        {projects.map((project, index) => (
                            <motion.div key={index} variants={item}>
                                <Project key={index} title={project.title} description={project.description} longDescription={project.longDescription} images={project.images} technologies={project.technologies}></Project>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <Footer />
            </main>
        </NextUIProvider>
    )
}
