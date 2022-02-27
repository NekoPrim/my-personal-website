import { Link } from 'react-router-dom';

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
            <img 
                className="GH icon"
                src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png" 
            />

            {/* linkedin */}
            <img 
                className="LI icon"
                src="https://cdn-icons-png.flaticon.com/512/61/61109.png" 
            />
        </div>
    );
}

export default Contact;