import './Contact.css';

// this component contains my github and linkedin
const Contact = () => {
    return(
        <div>
            <h1
                className="contactHeader"
            >
                Feel free to check me out here too!
            </h1>
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
        </div>
    );
}

export default Contact;