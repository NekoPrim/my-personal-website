import './Portfolio.css';

// this component has my portfolio
const Portfolio = () => {

    // render to DOM
    return(
        <div>

            <div>
                <h1 className="portfolioHeader">
                    Unicorn Rancher
                </h1>

                <div>
                    <a target="_blank" href="https://powerful-retreat-91853.herokuapp.com/#/home">
                        <img 
                            className="H"
                            src="https://cdn.iconscout.com/icon/free/png-256/heroku-1-282458.png" 
                        />
                    </a>
                </div>

                <a target="_blank" href="https://github.com/NekoPrim/Unicorn-Rancher-Solo-Project">
                    <img 
                        className="portfolioPic"
                        src="images/Unicorn-Rancher.png" 
                    />
                </a>

                <p className="portfolioPara">
                    Do you wish that life was more simple? Do you feel like you should be rewarded answering easy questions? Wouldn't life be a little better with some sparkle? Unicorn Rancher is simple, fun, and adds some sparkle to your life! All you have to do is answer some simple unicorn questions to recieve an amazing badge. Be the best Unicorn Rancher by collecting all the badges!
                </p>
            </div>
            
            <div>
                <h1 className="portfolioHeader">
                    Movie Saga
                </h1>

                <a target="_blank" href="https://github.com/NekoPrim/weekend-movie-sagas">
                    <img 
                        className="portfolioPic"
                        src="images/movies1.png" 
                    />
                </a>

                <p className="portfolioPara">
                    Do you like movies and do you like clicking on things? Get ready for the best of both worlds! Here is a great API where you can click on movies and see their descriptions! Also you can see what genre they belong to too! It's so great you could explode with happiness, but we don't recommend that! Instead, just keep clicking!!!!
                </p>
            </div>

            <div>
                <h1 className="portfolioHeader">
                    Gallery
                </h1>

                <a target="_blank" href="https://github.com/NekoPrim/weekend-react-gallery">
                    <img 
                        className="portfolioPic"
                        src="images/API-image-top.png"
                    />
                </a>

                <p className="portfolioPara">
                    Street art is everywhere and can be super inspiring. In this API, you can browse through some street art images. Add more images with descriptions to build an even larger library to browse. Clicking on a picture will switch to details about that image. Also don't forget to show our urban artist some love by clicking on the like button! There is an option to delete if you really want.

                    Here we want to celebrate and admire street art around the world!
                </p>
            </div>
        </div>
    );
}

export default Portfolio;