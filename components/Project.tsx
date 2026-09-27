"use client"

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

export interface IProjectProps {
    backend: string[]
    frontend: string[]
    title: string
    description: string
    image: StaticImageData
}

// The card slides in as one unit, then its parts stagger in behind it.
const cardVariants: Variants = {
    hidden: { opacity: 0, x: -120 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.17, 0.55, 0.55, 1],
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.75, ease: "easeOut" } },
}

const Project = (props: IProjectProps) => {
    const shouldReduceMotion = useReducedMotion();

    // With reduced motion the content appears in place — no slide, no hover shift.
    const hover = shouldReduceMotion
        ? undefined
        : { x: 40, scale: 1.05, transition: { type: "spring" as const, stiffness: 220, damping: 26 } };

    return (
        <motion.div
            variants={shouldReduceMotion ? undefined : cardVariants}
            initial={shouldReduceMotion ? undefined : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.25 }}
            whileHover="hover"
            className="flex flex-wrap lg:flex-nowrap items-start mb-32 p-8 lg:p-0"
        >
            <div className="z-20 w-full lg:w-1/3 text-center lg:text-right">
                {/* Project Title */}
                <motion.div variants={itemVariants} className="text-3xl font-bold uppercase">{props.title}</motion.div>

                {/* Project Description */}
                <motion.div variants={itemVariants} className="p-4 my-4 bg-gray-50 rounded bg-opacity-90 w-full lg:w-[130%] text-medina-red font-semibold text-lg leading-6 text-center lg:text-left">
                    {props.description}
                </motion.div>

                {/* Project Skills */}
                <motion.div variants={itemVariants}>
                    {props.frontend?.length > 0 && <>
                        <div className="font-semibold text-medina-blue">Frontend:</div>
                        <div className='font-light text-gray-400'>{props.frontend.join(", ")}</div>
                    </>
                    }
                    {props.backend?.length > 0 && <>
                        <div className="font-semibold text-medina-blue">Backend:</div>
                        <div className='font-light text-gray-400'>{props.backend.join(", ")}</div>
                    </>
                    }
                </motion.div>
            </div>
            <motion.div variants={imageVariants} className='z-10 w-full lg:w-2/3 lg:ml-8 pt-4 lg:pt-0'>
                {/* Project Image */}
                <motion.div variants={{ hover: hover ?? {} }}>
                    <Image src={props.image} width={1420} height={458} alt={`${props.title} project screenshot`} sizes="(max-width: 1024px) 100vw, 66vw" loading="lazy" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Project;
