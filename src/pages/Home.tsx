/* eslint-disable react-refresh/only-export-components */
import pcImage from '../assets/logos/pc.png';
import reactLogo from '../assets/logos/reactlogo.png';
import laravelLogo from '../assets/logos/laravellogo.png';
import sassLogo from '../assets/logos/sasslogo.png';
import nestLogo from '../assets/logos/nestlogo.png';
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
                        <motion.h1 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, delay: 0.3 }}>Marco <span>René</span> Esquivel <span>Juárez</span></motion.h1> 
                        <motion.p initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.6 }}>
                            <span><motion.a className='linkAnimated' href='#frontend' style={{display: 'inline-block'}} whileHover={{ scale: 1.1, y:-5}}>Frontend</motion.a></span> and <span><motion.a href='#frontend' className='linkAnimated' style={{display: 'inline-block'}} whileHover={{ scale: 1.1, y:-5}}>Backend</motion.a></span> developer specialized in creating and consuming Restful APIs with knowledge in technologies such as:
                        </motion.p>
                        <motion.p initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.8 }}>
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
                        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, delay: 0.3 }}  className='logos'>
                            <motion.img 
                            whileHover={{
                                scale: 1.3,
                                transition: { duration: 0.5, type: 'spring', stiffness: 300 }
                            }
                            } className='pc' src={pcImage} alt="pc"/>
                            <motion.img 
                            whileHover={{
                                scale: 1.2, rotate: [0, -15, 15, -15, 15, 0],
                            }} className='reactLogo' src={reactLogo} alt="react"/>
                            <motion.img 
                            whileHover={{
                                scale: 1.2, rotate: [0, -15, 15, -15, 15, 0],
                            }} className='nestLogo' src={nestLogo} alt="nest"/>
                            <motion.img 
                            whileHover={{
                                scale: 1.2, rotate: [0, -15, 15, -15, 15, 0],
                            }} className='laravelLogo' src={laravelLogo} alt="laravel"/>
                            <motion.img 
                            whileHover={{
                                scale: 1.2, rotate: [0, -15, 15, -15, 15, 0],
                            }} className='sassLogo' src={sassLogo} alt="sass"/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
})