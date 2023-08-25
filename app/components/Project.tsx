import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, Chip } from "@nextui-org/react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import { StaticImageData } from "next/image";

type Technology = {
    name: string;
    colour: string;
}

type Image = {
    src: StaticImageData;
    alt: string;
}

type ProjectProps = {
    title: string;
    description: string;
    longDescription: string;
    images: Image[];
    technologies: Technology[];
}

type ModalSize = "2xl" | "sm";

export default function Project({ title, description, longDescription, images, technologies }: ProjectProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const parographs = longDescription.split("\n");
    const landscapePictures = images.every((image) => image.src.height > image.src.width);

    return (
        <>
            <button className="transition ease-out border-card border-3 bg-background p-5 max-w-lg rounded-2xl flex flex-col gap-2 items-center hover:bg-card hover:transition-all hover:duration-250 hover:ease-out" onClick={onOpen}>
                <h1 className="text-gray-200 text-lg">{title}</h1>
                <div className="text-center text-gray-400">
                    <p>
                        {description}
                    </p>
                </div>
                <div className="flex flex-row gap-2">
                    {technologies.map((tech, index) => (
                        <Chip key={index} className={tech.colour}>{tech.name}</Chip>
                    ))}
                </div>
            </button>
            <Modal backdrop="blur" placement="auto" size="4xl" scrollBehavior="inside" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="text-xl">{title}</ModalHeader>
                            <ModalBody className="pb-5">
                                <Carousel className="md:inline carousel-wrapper carousel-height" showThumbs={false} emulateTouch showArrows showStatus infiniteLoop autoPlay stopOnHover swipeable centerMode={landscapePictures ? true : undefined} centerSlidePercentage={landscapePictures ? 40 :undefined}>
                                    {images.map((image, index) => (
                                        <Image key={index} src={image.src} alt={image.alt} />
                                    ))}
                                </Carousel>
                                {parographs.map((par, index) => (
                                    <p className="text-gray-300 text-sm" key={index}>{par}</p>
                                ))}
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
