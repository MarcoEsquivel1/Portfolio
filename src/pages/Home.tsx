import pcImage from '../assets//pc.png';
import { ButtonsContainer } from '../components/Home/ButtonsContainer';
import { skills } from '../data/skills';
import { motion } from "framer-motion"

export const Home = () => {

    return(
        <div id='home' className="containerHome parallax">
            <div className="content">
                <div className="textHome">
                    <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                        <h1>Marco <span>René</span> Esquivel <span>Juárez</span></h1>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }}>
                        <p><span><motion.a className='linkAnimated' href='#frontend' style={{display: 'inline-block'}} whileHover={{ scale: 1.1, y:-5}}>Frontend</motion.a></span> and <span><motion.a href='#frontend' className='linkAnimated' style={{display: 'inline-block'}} whileHover={{ scale: 1.1, y:-5}}>Backend</motion.a></span> developer specialized in creating and consuming Restful APIs with knowledge in technologies such as:</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.6 }}>
                        <p>{
                            skills.map((skill, index) => {
                                return <><motion.span style={{display: 'inline-block'}} key={index} className="skill" whileHover={{ scale: 1.1, rotate: [0, -15, 15, -15, 15, 0], transition: { duration: 0.5 }}} >{skill.name}</motion.span> / </>
                            })    
                        }</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.9 }}>
                        <ButtonsContainer />
                    </motion.div>
                </div>
                <div className="imageHome">
                    <img src={pcImage} alt="pc"/>
                </div>
            </div>
        </div>
    )
}