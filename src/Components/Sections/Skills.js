import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ScrollableAnchor from 'react-scrollable-anchor';

import html5 from '../../Resources/SkillsLogos/HTML5.png';
import css3 from '../../Resources/SkillsLogos/CSS3.png';
import es6 from '../../Resources/SkillsLogos/es6.png';
import bootstrap from '../../Resources/SkillsLogos/Bootstrap.png';
import chartjs from '../../Resources/SkillsLogos/Chartjs.png';
// import javaAlt from '../../Resources/SkillsLogos/JavaScriptAltLogo.png';
import js from '../../Resources/SkillsLogos/JSLogo.png';
import massive from '../../Resources/SkillsLogos/Massive.jpg';
import NodeJS from '../../Resources/SkillsLogos/NodejsLogo.png';
import Parralax from '../../Resources/SkillsLogos/parralax.png';
import passport from '../../Resources/SkillsLogos/passportJS.png';
import postgres from '../../Resources/SkillsLogos/postgresql-logo.png';
import ReactLogo from '../../Resources/SkillsLogos/ReactJS.png';
import ReduxLogo from '../../Resources/SkillsLogos/Redux.png';
import sass from '../../Resources/SkillsLogos/sass.png';
import slick from '../../Resources/SkillsLogos/slick.gif';
import vue from '../../Resources/SkillsLogos/VuejsLogo.png';


function Skills() {

    return (
        <div className={css(styles.main)}>
            <ScrollableAnchor id={'skillsSection'}>
                <h1 className={css(styles.bigFont, styles.under)}>Skills</h1>
            </ScrollableAnchor>
            <div className={css(styles.rowed)} >

                <div className={css(styles.logoCont)}><img className={css(styles.smallerRes)} src={html5} alt='' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.smallerRes)} src={css3} alt='' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={es6} alt='' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={js} alt='' /></div>
                {/* <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={javaAlt} alt='' /></div> */}
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={NodeJS} alt='' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={ReactLogo} alt='' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={vue} alt='' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={sass} alt='' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={ReduxLogo} alt='' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={Parralax} alt='' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.smallestRes)} src={chartjs} alt='' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={passport} alt='' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={postgres} alt='' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={slick} alt='' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={massive} alt='' /></div>
                <div className={css(styles.logoCont)}><img className={css(styles.imgRes)} src={bootstrap} alt='' /></div>

            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        // height: '200vh',
        // border: '2px dotted yellow',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
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
        },textShadow: '1px 1px 2px grey',
        // borderTop: '3px dotted blue',
        // borderBottom: '3px dotted blue',
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
    under: {
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginTop: '20px',
    },
    imgRes: {
        width: '80%',
    },
    smallerRes: {
        width: '60%',
    },
    smallestRes: {
        width: '55%',
    },
    logoCont: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
        width: '200px',
        height: '200px',
        background: 'lightblue',
        boxShadow: '2px 2px 4px black',
    },
    rowed: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
});

export default Skills;