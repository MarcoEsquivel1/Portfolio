
import animatedTransition from '../animation/animatedTransition';
import { ParticlesContainer } from '../components/Common/ParticlesContainer';
import foto from '../assets//foto.png';
import { motion, useAnimate } from 'framer-motion';
import { useState } from 'react';

export const About = animatedTransition(() => {
    
    const animate = useAnimate();
    const [deg, setDeg] = useState('0deg');

    const getRandomRotation = () => {
        const randomDegree = Math.floor(Math.random() * 41) - 20; // Generate a random degree between -20 and 20
        setDeg(`${randomDegree}deg`);
    };

    return(
        <>
            <ParticlesContainer />
            <div id="about" className="containerAbout">
                <div className="content">
                    <div className="imageAbout">
                        <div className="circle">
                            <motion.img
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                whileHover={{ scale: 1.2, rotate: deg, transition: { duration: 0.2 } }}
                                onMouseOver={getRandomRotation} // Update rotation on hover
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, delay: 0.5, type: 'spring', stiffness: 300 }}
                                src={foto}
                                alt="foto"
                            />   
                        </div>
                    </div>
                    <div className="textAbout">
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.5, type: 'spring', stiffness: 160 }}
                        >Software <span>Developer</span>.</motion.h1>  
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.8 }}
                        >Graduated in Software Development Engineering from the <span>Universidad Catolica de El Salvador</span></motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, delay: 1.1 }}
                        >Proficient in creating and consuming APIs, as well as developing web applications using various programming languages.</motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, delay: 1.4 }}
                        >Passionate about learning and dedicated to the continual pursuit of personal and professional growth.</motion.p>
                    </div>
                </div>
            </div>
        </>
    );
})