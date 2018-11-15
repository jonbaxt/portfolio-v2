import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import BackgroundSlideshow from 'react-background-slideshow';
import ScrollableAnchor from 'react-scrollable-anchor';

import image1 from '../../Resources/Mountains.jpg';
import image2 from '../../Resources/about.jpg';
// import image3 from '../../Resources/Resized.PNG';
import image4 from '../../Resources/fishing.jpg';
import image5 from '../../Resources/Unsplash.jpg'

export default function Introduction() {

    return (
        <div className={css(styles.outer)}>
                <ScrollableAnchor id={'introSection'}>
                    <p className={css(styles.hiddenForTag)}>Hidden</p>
                </ScrollableAnchor>
            <div className={css(styles.main)}>

        
                <BackgroundSlideshow images={[image1, image5, image2, image4]} />
                Top Section
            <h1 className={css(styles.bigFont)}>Jonathan Baxter</h1>

                <h1 className={css(styles.lessBig, styles.gapBetween)}>Web Developer</h1>


            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100vh',
        // background: 'green',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigFont: {
        zIndex: '10',
        fontSize: '100px',
        '@media(max-width: 850px)': {
            fontSize: '80px',
        },
        '@media(max-width: 690px)': {
            fontSize: '60px',
        },
        '@media(max-width: 520px)': {
            fontSize: '40px',
        },
        '@media(max-width: 340px)': {
            fontSize: '25px',
        },
    },
    lessBig: {
        zIndex: '10',
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
    gapBetween: {
        marginTop: '70px',
    },
    outer: {

    },
    hiddenForTag: {
        zIndex: '-10',
    }
});