
import animatedTransition from '../animation/animatedTransition';
import { ParticlesContainer } from '../components/Common/ParticlesContainer';
export const About = animatedTransition(() => {
    return(
        <>
            <ParticlesContainer />
            <div id="about" className="container">
                <h1>About</h1>
            </div>
        </>
    );
})