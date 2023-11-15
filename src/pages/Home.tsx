import pcImage from '../assets//pc.png';
import { ButtonsContainer } from '../components/Home/ButtonsContainer';
import { skills } from '../data/skills';

export const Home = () => {

    return(
        <div id='home' className="containerHome parallax">
            <div className="content">
                <div className="textHome">
                    <h1>Marco <span>René</span> Esquivel <span>Juárez</span></h1>
                    <p><span>Frontend</span> and <span>Backend</span> developer specialized in creating and consuming Restful APIs with knowledge in technologies such as:</p>
                    <p>{
                        skills.map((skill, index) => {
                            return <><span key={index}>{skill.name}</span>  / </>
                        })    
                    }</p>
                    <ButtonsContainer />
                </div>
                <div className="imageHome">
                    <img src={pcImage} alt="pc"/>
                </div>
            </div>
        </div>
    )
}