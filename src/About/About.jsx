import './About.css';

// This component is a summary about me
const About = () => {
    return(
        <div>
            <h1
                className="aboutHeader"
            >
                Desiree Quade
            </h1>

            {/* contains paragraph and picture of me */}
            <div
                className="aboutArea"
            >
                <p
                    className="aboutPara"
                >
                    From being a direct support professional with people with
                    disabilities to the world of tech, I have a deep passion to 
                    be able to help people. I believe that the world of tech is 
                    stronger with more accesibility and diversity. I love coding
                    code for all humans. When I'm not programming, I'm trying to 
                    learn new things and hanging out with my dog, Neko.
                </p>
                <img 
                    className="aboutPic"
                    src="images/desireePic.jpeg" 
                />
            </div>
        </div>
    );
}

export default About;