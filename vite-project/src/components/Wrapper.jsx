import {useEffect} from 'react';
import bulmaUI from '../utils/bulma-ui.js';
import Card from './Card';
import BulmaLogo from '../assets/bulma-logo.png';
import png1280x960 from "../assets/png1280x960.png";
import png96x96 from "../assets/png96x96.png";

function Wrapper(){

    useEffect(
        () => {
            // This code will be executed when the DOM content has loaded
            bulmaUI();
        }, 
        []
    );

    return (
        <div className="container">
            <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src={BulmaLogo} alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
                    </a>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    
                    <div className="navbar-start">
                        <a className="navbar-item" href="#">Home</a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link" href="#">About Us</a>
                            <div className="navbar-dropdown is-boxed">
                                <a className="navbar-item" href="#">Example</a>
                                <a className="navbar-item" href="#">Example</a>
                                <a className="navbar-item" href="#">Example</a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="button is-primary" href="#">
                                        <span className="icon">
                                            <i className="far fa-envelope-open"></i>
                                        </span>
                                        <span>Contact</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="hero is-medium is-primary is-bold">
                <div className="hero-body">
                <div className="container">
                    <h1 className="title">Hero Section</h1>
                    <h2 className="subtitle">Basic Layout Skeleton using Bulma CSS Framework</h2>
                </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                <h1 className="title">Section Example</h1>
                <h2 className="subtitle">A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading</h2>
                </div>
            </section>
            
            <section className="section">
                <div className="container">
                    <h1 className="title">Card Section</h1>
                    <h2 className="subtitle">A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading</h2>
                    
                        <div className="" style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr)",
                            gridGap: "15px"
                        }}>
                            <Card 
                                imgRatio="is-4by3"
                                imgSrc={png1280x960}
                                imgAlt="An image"
                                mediaAlign="media-left"
                                mediaSize="is-48x48"
                                mediaSrc={png96x96}
                                mediaAlt="An image"
                                title="John Smith"
                                subtitle="@johnsmith"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
                                atLinks={[{"title": "@bulmaio", "href":"#"},{"title":"@bulmacss", "href":"#"}]}
                                tags={[{"title": "#css", "href":"#"},{"title":"#html", "href":"#"}]}
                                postDate={""}
                                
                            />
                            <Card 
                                imgRatio="is-4by3"
                                imgSrc={png1280x960}
                                imgAlt="An image"
                                mediaAlign="media-left"
                                mediaSize="is-48x48"
                                mediaSrc={png96x96}
                                mediaAlt="An image"
                                title="John Smith"
                                subtitle="@johnsmith"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
                                atLinks={[{"title": "@bulmaio", "href":"#"},{"title":"@bulmacss", "href":"#"}]}
                                tags={[{"title": "#css", "href":"#"},{"title":"#html", "href":"#"}]}
                                postDate={""}
                                />
                        
                            <Card 
                                imgRatio="is-4by3"
                                imgSrc={png1280x960}
                                imgAlt="An image"
                                mediaAlign="media-left"
                                mediaSize="is-48x48"
                                mediaSrc={png96x96}
                                mediaAlt="An image"
                                title="John Smith"
                                subtitle="@johnsmith"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
                                atLinks={[{"title": "@bulmaio", "href":"#"},{"title":"@bulmacss", "href":"#"}]}
                                tags={[{"title": "#css", "href":"#"},{"title":"#html", "href":"#"}]}
                                postDate={""}
                            />
                            <Card 
                                imgRatio="is-4by3"
                                imgSrc={png1280x960}
                                imgAlt="An image"
                                mediaAlign="media-left"
                                mediaSize="is-48x48"
                                mediaSrc={png96x96}
                                mediaAlt="An image"
                                title="John Smith"
                                subtitle="@johnsmith"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
                                atLinks={[{"title": "@bulmaio", "href":"#"},{"title":"@bulmacss", "href":"#"}]}
                                tags={[{"title": "#css", "href":"#"},{"title":"#html", "href":"#"}]}
                                postDate={""}
                            />
                        </div>
                    
                </div>
            </section>

            <section className="level is-mobile">
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Tweets</p>
                        <p className="title">3,456</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Following</p>
                        <p className="title">123</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Followers</p>
                        <p className="title">456K</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Likes</p>
                        <p className="title">789</p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <strong>Footer Example</strong> Content goes here...
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Wrapper;