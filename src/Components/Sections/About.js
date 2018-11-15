import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ScrollableAnchor from 'react-scrollable-anchor';

import PortPic from '../../Resources/Resized.PNG';
import BYUID from '../../Resources/Logos/BYUIdaho.png';
import UtahSeal from '../../Resources/Logos/UtahSeal.png';
import Uvu from '../../Resources/Logos/UVU.png';
import devMtn from '../../Resources/Logos/devLogo.png';

import { aboutInfo1, aboutInfo2, aboutInfo3, aboutInfo4 } from './ChildComponents/AboutContent';

function About() {

    return (
        <div className={css(styles.aboutMain)}>
            <ScrollableAnchor id={'aboutSection'}>
                <h1 className={css(styles.bigFont, styles.underline)}>About</h1>
            </ScrollableAnchor>
            <div className={css(styles.flRow, styles.reverseWrapper)} >
                <div className={css(styles.container)}>
                    <p className={css(styles.textBoxText)}>{aboutInfo1()}</p>
                </div>
                <img className={css(styles.image)} src={PortPic} alt='' />
            </div>
            <div className={css(styles.flRow, styles.wrapper)} >
                <img className={css(styles.logoStyle)} src={BYUID} alt='' />
                <img className={css(styles.logoStyle)} src={UtahSeal} alt='' />
                <div className={css(styles.container)}>
                    <p className={css(styles.textBoxText)}>{aboutInfo2()}</p>
                </div>
            </div>

            <div className={css(styles.flRow, styles.reverseWrapper)} >
                <div className={css(styles.container)}>
                    <p className={css(styles.textBoxText)}>{aboutInfo3()}</p>
                </div>
                <img className={css(styles.logoStyleUvu)} src={Uvu} alt='' />
            </div>
            <div className={css(styles.flRow, styles.wrapper)} >
                <img className={css(styles.logoStyleUvu)} src={devMtn} alt='' />
                <div className={css(styles.container)}>
                    <p className={css(styles.textBoxText)}>{aboutInfo4()}</p>
                </div>
            </div>
        </div>
    )
}
export default About;
const styles = StyleSheet.create({
    aboutMain: {
        width: '100%',
        // height: '200vh',
        color: 'black',
        textShadow: '1px 1px 2px grey',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // flexWrap: 'wrap',
        justifyContent: 'center',
    },
    bigFont: {
        // zIndex: '10',
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
    underline: {
        textDecorationLine: 'underline',
    },
    textBoxText: {
        fontSize: '20px',
        '@media(max-width: 770px)': {
            fontSize: '15px',
        },
        '@media(max-width: 610px)': {
            fontSize: '12px',
        },
    },
    container: {
        width: '300px',
        height: '50%',
        padding: '15px',
        margin: '5px',
        background: 'lightblue',
        boxShadow: '2px 2px 4px black',
        '@media(max-width: 770px)': {
            width: '250px',
        },
        '@media(max-width: 610px)': {
            width: '200px',
        },
    },
    image: {
        width: '300px',
        height: '300px',
        boxShadow: '2px 2px 4px black',
        '@media(max-width: 770px)': {
            width: '250px',
            height: '250px',
        },
        '@media(max-width: 610px)': {
            width: '200px',
            height: '200px',
        },
    },
    logoStyle: {
        width: '200px',
        height: '200px',
        boxShadow: '2px 2px 4px black',
        borderRadius: '50%',
        '@media(max-width: 770px)': {
            width: '150px',
            height: '150px',
        },
        '@media(max-width: 610px)': {
            width: '100px',
            height: '100px',
        },
    },
    logoStyleUvu: {
        width: '200px',
        height: '200px',
        boxShadow: '2px 2px 4px black',
        '@media(max-width: 770px)': {
            width: '150px',
            height: '150px',
        },
        '@media(max-width: 610px)': {
            width: '100px',
            height: '100px',
        },
    },
    flRow: {
        width: '100%',
        display: 'flex',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    wrapper: {
        '@media(max-width: 460px)': {
            flexWrap: 'wrap',
        },
    },
    reverseWrapper: {
        '@media(max-width: 460px)': {
            flexWrap: 'wrap-reverse',
        },
    },
});