/* eslint-disable react-refresh/only-export-components */
import pcImage from '../assets//pc.png';
import { ButtonsContainer } from '../components/Home/ButtonsContainer';
import { skills } from '../data/skills';
import { motion } from "framer-motion"
import animatedTransition from '../animation/animatedTransition';
import { ParticlesContainer } from '../components/Common/ParticlesContainer';

export const Home = animatedTransition(() => {
    return(
        <>
        <ParticlesContainer />
            <div id='home' className="containerHome parallax">
                <div className="content">
                    <div className="textHome">
                        <motion.h1 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>Marco <span>René</span> Esquivel <span>Juárez</span></motion.h1> 
                        <motion.p initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }}>
                            <span><motion.a className='linkAnimated' href='#frontend' style={{display: 'inline-block'}} whileHover={{ scale: 1.1, y:-5}}>Frontend</motion.a></span> and <span><motion.a href='#frontend' className='linkAnimated' style={{display: 'inline-block'}} whileHover={{ scale: 1.1, y:-5}}>Backend</motion.a></span> developer specialized in creating and consuming Restful APIs with knowledge in technologies such as:
                        </motion.p>
                        <motion.p initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.6 }}>
                            {
                                skills.map((skill, index) => {
                                    return <><motion.span style={{display: 'inline-block'}} key={index} className="skill" whileHover={{ scale: 1.1, rotate: [0, -15, 15, -15, 15, 0], transition: { duration: 0.5 }}} >{skill.name}</motion.span> / </>
                                })    
                            }
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.9 }}>
                            <ButtonsContainer />
                        </motion.div>
                    </div>
                    <div className="imageHome">
                        <img src={pcImage} alt="pc"/>
                    </div>
                </div>
            </div>
        </>
    )
})