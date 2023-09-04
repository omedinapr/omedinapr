import Me from '@/assets/images/drawing.svg'
import Image from 'next/image'
import { motion } from "framer-motion";

const MyInfo = () => {
    return (
        <>
            <div className='w-1/3 max-w-[200px] hidden sm:block z-10'>
                <Image src={Me} width={243.85} height={250.4} alt="Drawing of OMedina" />
            </div>
            <div className='w-full p-6 mt-8 sm:w-2/3 sm:pl-12 sm:-ml-8 text-white rounded-xl bg-medina-red'>
                <h2 className='font-bold text-[28px]'>Hello, I&apos;m Oscar Medina</h2>
                <p className='text-lg'>developer by
                    <motion.span
                        className='px-1'
                        animate={{
                            opacity: [0, 1, 1, 1]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "mirror"
                        }}
                    > 🌞 </motion.span>
                    and developer by
                    <motion.span
                        className='px-1'
                        animate={{
                            opacity: [0, 1, 1, 1]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "mirror"
                        }}
                    >🌙</motion.span>, based out of New Jersey. In addition to creating automated solutions through code, I also enjoy live streaming and going out to restaurants.</p>
            </div>
        </>
    );
};

export default MyInfo;