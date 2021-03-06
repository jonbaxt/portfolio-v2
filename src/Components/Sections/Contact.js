import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import BackgroundSlideshow from 'react-background-slideshow';
import ScrollableAnchor from 'react-scrollable-anchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css'


import tech1 from '../../Resources/ContactPics/tech1.jpg';
import tech2 from '../../Resources/ContactPics/tech2.jpg';
import tech3 from '../../Resources/ContactPics/tech3.jpg';
import tech4 from '../../Resources/ContactPics/tech4.jpg';
import tech5 from '../../Resources/ContactPics/tech5.jpg';
import tech6 from '../../Resources/ContactPics/tech6.jpg';

function Contact() {

    return (
        <div className={css(styles.main)}>
            <span id='Slides'>
                <BackgroundSlideshow
                    images={[tech1, tech2, tech3, tech4, tech5, tech6]} />
            </span>
            <div className={css(styles.middleBox, styles.bringToFront)}>
                <ScrollableAnchor id={'contactSection'}>
                    <h1 className={css(styles.bigFont)}>Contact</h1>
                </ScrollableAnchor>

                <p className={css(styles.textFormat)}>I'd love to hear from you! Feel free to contact me if you're interested in utilizing my skills.</p>


                <p className={css(styles.textFormat)}>jonbaxt@gmail.com</p>
                <div className={css(styles.linksBox)} >
                    <a href='https://www.linkedin.com/in/jonbaxt/' rel="noopener noreferrer" target='_blank' >
                        <FontAwesomeIcon className={css(styles.linkSizing)} icon={faLinkedin} />
                    </a>
                    <a href='https://github.com/jonbaxt' rel="noopener noreferrer" target='_blank' >
                        <FontAwesomeIcon className={css(styles.linkSizing)} icon={faGithub} />
                    </a>
                </div>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100vh',
        background: 'transparent',
        // background: 'pink',
        // borderTop: '3px dotted green',
        // borderBottom: '3px dotted green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '-10',
    },
    bringToFront: {
        zIndex: '100',
    },
    middleBox: {
        background: 'lightblue',
        boxShadow: '2px 2px 4px black',
        width: '90%',
        height: '400px',
    },
    bigFont: {
        // zIndex: '10',
        textAlign: 'center',
        fontSize: '80px',
        '@media(max-width: 850px)': {
            fontSize: '60px',
        },
        '@media(max-width: 690px)': {
            fontSize: '40px',
        },
        '@media(max-width: 520px)': {
            fontSize: '25px',
        },
        '@media(max-width: 340px)': {
            fontSize: '20px',
        },
    },
    textFormat: {
        textAlign: 'center',
        marginTop: '40px',
        fontSize: '20px',
        '@media(max-width: 770px)': {
            fontSize: '15px',
        },
        '@media(max-width: 610px)': {
            fontSize: '12px',
        },
    },
    linksBox: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: '60px',
    },
    linkSizing: {
        marginLeft: '60px',
        marginRight: '60px',
        cursor: 'pointer',
        color: 'white',
        // textShadow: '2px 2px 4px black',
        // boxShadow: '2px 2px 4px black',
        fontSize: '60px',
        ':hover': {
            color: 'darkgray',
        },
    },
});

export default Contact;