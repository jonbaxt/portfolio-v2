import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { ParText1, ParText2, ParText3, ParText4, ParText5, ParTechHead, ParTechUsed, ParSiteLink } from './ParentalGamingText';
import ParGamPic1 from '../../../../Resources/ParGamRev/HomeScreen.PNG';
import ParGamPic2 from '../../../../Resources/ParGamRev/Game Review Page.PNG';
import ParGamPic3 from '../../../../Resources/ParGamRev/Posting a new review.PNG';
import ParGamPic4 from '../../../../Resources/ParGamRev/Reviews Section.PNG';

function ParentalGaming() {
    return (
        <div className={css(styles.main)}>
            <div className={css(styles.container)}>
                <h1 className={css(styles.headerWords, styles.underline)}>Parental Gaming Reviews</h1>
                <a className={css(styles.linkLine)} href={ParSiteLink()} target='_blank'><p className={css(styles.linkStyle)}>Live Site Link</p></a>

                <p className={css(styles.paragraphs)}>{ParText1()}</p>
                <p className={css(styles.paragraphs)}>{ParText2()}</p>
                <p className={css(styles.paragraphs)}>{ParText3()}</p>

                <div className={css(styles.picContainer)}>
                    <img className={css(styles.picSizing)} src={ParGamPic1} alt='' />
                </div>

                <p className={css(styles.paragraphs)}>{ParText4()}</p>
                <p className={css(styles.paragraphs)}>{ParText5()}</p>

                <div className={css(styles.picContainer)}>
                    <img className={css(styles.picSizing)} src={ParGamPic2} alt='' />
                    <img className={css(styles.picSizing)} src={ParGamPic3} alt='' />
                    <img className={css(styles.picSizing)} src={ParGamPic4} alt='' />
                </div>

                <p className={css(styles.technologiesHeader)}>{ParTechHead()}</p>
                <p className={css(styles.technologiesList)}>{ParTechUsed()}</p>

            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'black',
        textShadow: '0px 0px 0px black',
    },
    container: {
        background: 'lightblue',
        width: '95%',
        marginTop: '25px',
        paddingTop: '20px',
        paddingBottom: '20px',
        marginBottom: '40px',
        boxShadow: '2px 2px 4px black',
    },
    underline: {
        textDecorationLine: 'underline',
        textAlign: 'center',
    },
    headerWords: {
        fontSize: '40px',
        '@media(max-width: 840px)': {
            fontSize: '35px',
        },
        '@media(max-width: 740px)': {
            fontSize: '30px',
        },
        '@media(max-width: 580px)': {
            fontSize: '25px',
        },
    },
    linkLine: {
        // textDecorationColor: 'white',
    },
    linkStyle: {
        // margin: '0 auto',
        // color: 'white',
        // textDecorationColor: 'white',
        // textDecorationLine: 'white',
        textAlign: 'center',
        marginBottom: '20px',
        '@media(max-width: 840px)': {
            fontSize: '18px',
        },
        '@media(max-width: 740px)': {
            fontSize: '14px',
        },
        '@media(max-width: 580px)': {
            fontSize: '12px',
        },
    },
    paragraphs: {
        textIndent: '50px',
        fontSize: '20px',
        marginLeft: '45px',
        marginRight: '45px',
        '@media(max-width: 840px)': {
            fontSize: '16px',
        },
        '@media(max-width: 740px)': {
            fontSize: '12px',
        },
    },
    technologiesHeader: {
        textAlign: 'center',
        marginTop: '20px',
        textDecorationLine: 'underline',
        fontSize: '25px',
        '@media(max-width: 840px)': {
            fontSize: '22px',
        },
        '@media(max-width: 740px)': {
            fontSize: '18px',
        },
        '@media(max-width: 580px)': {
            fontSize: '14px',
        },
    },
    technologiesList: {
        marginLeft: '45px',
        marginRight: '45px',
        marginBottom: '20px',
        fontSize: '22px',
        textAlign: 'center',
        '@media(max-width: 840px)': {
            fontSize: '18px',
        },
        '@media(max-width: 740px)': {
            fontSize: '16px',
        },
        '@media(max-width: 580px)': {
            fontSize: '12px',
        },
    },
    vidTextTop: {
        textAlign: 'center',
        fontSize: '15px',
        '@media(max-width: 840px)': {
            fontSize: '15px',
        },
        '@media(max-width: 740px)': {
            fontSize: '13px',
        },
        '@media(max-width: 580px)': {
            fontSize: '9px',
        },
    },
    vidContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    videoDimensions: {
        height: 488,
        width: 846,
        margin: '0 auto',
        // height="488"
        // width="846"
        '@media(max-width: 940px)': {
            height: 428,
            width: 746,
        },
        '@media(max-width: 840px)': {
            height: 388,
            width: 646,
        },
        '@media(max-width: 740px)': {
            height: 328,
            width: 546,
        },
        '@media(max-width: 620px)': {
            height: 188,
            width: 346,
        },
        '@media(max-width: 390px)': {
            height: 148,
            width: 246,
        },
    },
    picContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
        marginBottom: '50px',
    },
    picSizing: {
        width: '90%',
    }
});

export default ParentalGaming;