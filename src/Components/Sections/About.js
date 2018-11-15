import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ScrollableAnchor from 'react-scrollable-anchor';

import { aboutInfo1, aboutInfo2, aboutInfo3, aboutInfo4 } from './ChildComponents/AboutContent';

function About() {

    return (
        <div className={css(styles.aboutMain)}>
            <ScrollableAnchor id={'aboutSection'}>
                <h1 className={css(styles.bigFont)}>About</h1>
            </ScrollableAnchor>

            <p>{aboutInfo1()}</p>
            <p>{aboutInfo2()}</p>
            <p>{aboutInfo3()}</p>
            <p>{aboutInfo4()}</p>


        </div>
    )
}

export default About;

const styles = StyleSheet.create({
    aboutMain: {
        width: '100%',
        height: '200vh',
        border: '2px dashed blue',
        color: 'black',
        textShadow: '1px 1px 2px grey',
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
});