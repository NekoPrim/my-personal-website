import './Contact.css';

// this component contains my github and linkedin
const Contact = () => {

    // render to DOM
    return(
        <div>
            <h1
                className="contactHeader"
            >
                Feel free to check me out here too!
            </h1>

            <div
                className="contactArea"
            >
            {/* github */}
            <a target="_blank" href="https://github.com/NekoPrim">
                <img 
                    className="GH icon"
                    src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png" 
                />
            </a>

            {/* linkedin */}
            <a target="_blank" href="https://www.linkedin.com/in/desiree-quade-b614b6225/">
                <img 
                    className="LI icon"
                    src="https://cdn-icons-png.flaticon.com/512/61/61109.png" 
                />
            </a>

            <img 
                className="contactGif"
                src="https://media2.giphy.com/media/Vpsx4eaSiFkE9iwc15/giphy.gif?cid=790b7611f7eff847e838ebb13ad7283fe3bc5cb1b2a9ed74&rid=giphy.gif&ct=g" 
            />
            </div>
        </div>
    );
}

export default Contact;