"use client"

import { NextUIProvider } from "@nextui-org/react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Roboto } from "next/font/google";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import { Divider } from "@nextui-org/react";
import profile from "@/public/profile.png";
import Image from "next/image";
import WorkCard from "@/app/components/WorkCard";

const roboto = Roboto({
    subsets: ['latin'],
    weight: "500",
});

export default function Home() {

    return (
        <NextUIProvider>
            <div className="bg-background min-h-screen min-w-fit">
                <div className="flex flex-col">
                    <Navbar />
                    <div className="flex flex-col">
                        <section className="flex flex-col items-center justify-center min-h-[625px] md:px-16 lg:px-20 max-w-[1024px] mx-auto">
                            <div style={roboto.style} className="flex items-center flex-col md:flex-row md:gap-2 tracking-tighter text-8xl bg-gradient-to-r from-primary via-orange-400 to-primary text-transparent bg-clip-text animate-gradient bg-300%">
                                <h2 className="py-2">
                                    Sergiu
                                </h2>
                                <h2>
                                    Mereacre.
                                </h2>
                            </div>
                            <div className="pt-2 pb-12">
                                <p className="text-gray-500 text-center text-2xl px-7">
                                    A software engineer transforming <span className="underline underline-offset-4 decoration-primary decoration-dashed">innovative</span> ideas into reality.
                                </p>
                            </div>
                            {/** This section is for buttons */}
                            <div>
                                <motion.ul className="text-5xl flex justify-center gap-10 text-gray-600">
                                    <motion.li whileHover={{ scale: 1.15 }}>
                                        <a
                                            className="hover:text-gray-900 hover:transition-all hover:duration-300"
                                            href="https://github.com/sergiumereacre"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <AiFillGithub />
                                        </a>
                                    </motion.li>
                                    <motion.li whileHover={{ scale: 1.15 }}>
                                        <a
                                            className="hover:text-blue-700 hover:transition-all hover:duration-300"
                                            href="https://www.linkedin.com/in/sergiumereacre"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <AiFillLinkedin />
                                        </a>
                                    </motion.li>
                                    <motion.li whileHover={{ scale: 1.15 }}>
                                        <a
                                            className="hover:text-red-700 hover:transition-all hover:duration-300"
                                            href="mailto:sergiumer@gmail.com"
                                        >
                                            <IoMail />
                                        </a>
                                    </motion.li>
                                </motion.ul>
                            </div>
                        </section>
                        <Divider />
                        <section className="flex flex-col justify-center px-5 py-10 md:py-20 max-w-[1024px] mx-auto">
                            <div style={roboto.style} className="tracking-tighter text-4xl bg-gradient-to-r from-primary via-orange-400 to-primary text-transparent bg-clip-text animate-gradient bg-300%">
                                <h2 className="text-center">
                                    About me.
                                </h2>
                            </div>
                            <div className="pt-5 flex flex-col md:flex-row items-center gap-5 md:gap-10">
                                <Image src={profile} alt="Sergiu Mereacre" className=" h-72 w-max rounded-[50px]" />
                                <p className="text-gray-400 text-lg text-center md:text-left">
                                    I&apos;m a software engineer based in Ireland, dedicated to solving real-world problems
                                    through product development. Computers have always been my passion, driving me to explore
                                    new opportunities and technologies. From a young age, I&apos;ve been drawn to designing and
                                    building projects from scratch. This deep interest in technology and software engineering led
                                    me to pursue a degree in Computer Systems at the <a href="https://www.ul.ie/" target="_blank"
                                        rel="noopener noreferrer" className="text-green-400 hover:animate-pulse">University of Limerick</a>.
                                    Now, I am eager to apply my skills and passion to impactful endeavors.
                                </p>
                            </div>
                        </section>
                        <Divider />
                        <section className="flex flex-col justify-center px-5 py-10 md:py-20 max-w-[1024px] mx-auto gap-5 w-full">
                            <div style={roboto.style} className="tracking-tighter text-4xl bg-gradient-to-r from-primary via-orange-400 to-primary text-transparent bg-clip-text animate-gradient bg-300%">
                                <h2 className="text-center">
                                    Career path.
                                </h2>
                            </div>
                            <div className="flex flex-col justify-end gap-10 md:px-10 lg:px-20">
                                <div>
                                    <WorkCard
                                        location="UL"
                                        title="Computer Systems Student"
                                        timeFrame="May 2020 - PRESENT"
                                        type="student"
                                        animate="left"
                                        address="https://www.ul.ie/"
                                    >
                                        Maintaining a QCA of 3.64, I am currently approaching the culmination of
                                        my academic journey at the University of Limerick. During my second year of study,
                                        I was honored to receive the prestigious Huawei Seeds for the Future scholarship, a distinction
                                        that not only affirmed my dedication but also unlocked an exclusive avenue for delving into
                                        cutting-edge technologies and fortifying my expertise in the domain.
                                    </WorkCard>
                                </div>
                                <div className="ml-auto">
                                    <WorkCard
                                        location="Intel"
                                        title="Silicon Verification Engineer Intern"
                                        timeFrame="June 2023 - August 2023"
                                        type="work"
                                        animate="right"
                                        address="https://www.intel.ie/content/www/ie/en/company-overview/intel-shannon.html"
                                    >
                                        During my summer internship at Intel Shannon, I was immersed in integrating intricate
                                        systems into the existing environment. Leveraging my Linux skills, I navigated challenges
                                        and resolved issues as needed. This hands-on experience allowed me to enhance my proficiency
                                        while contributing to the refinement of complex setups.
                                    </WorkCard>
                                </div>
                                <div>
                                    <WorkCard
                                        title="Software/Hardware Engineer Intern"
                                        location="Intel" timeFrame="May 2022 - January 2023"
                                        type="work"
                                        animate="left"
                                        address="https://www.intel.ie/content/www/ie/en/company-overview/intel-shannon.html"
                                    >
                                        During my co-operative education at Intel Shannon, I had the opportunity
                                        to refine my skills in Python scripting and programming, while
                                        gaining valuable hands-on experience in UVM and SystemVerilog.
                                        This experience not only enhanced my proficiency in software
                                        and hardware design but also deepened my understanding of
                                        these fields.
                                    </WorkCard>
                                </div>
                                <div className="ml-auto">
                                    <WorkCard
                                        location="Echo I.T."
                                        title="Consultant Internship"
                                        timeFrame="August 2017 - January 2018"
                                        type="consult"
                                        animate="right"
                                        address="https://www.echoit.ie/"
                                    >
                                        As part of a team of engineers and technicians, I collaborated
                                        on providing technical assistance and support to customers.
                                        Through this experience, I gained valuable insights into the
                                        operations of a small business and deepened my understanding
                                        of its inner workings.
                                    </WorkCard>
                                </div>
                            </div>
                        </section>
                    </div>
                    <Footer />
                </div>
            </div>
        </NextUIProvider >
    );
}