import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { BIAText1, BIAText2, BIAText3, BIATechHead, BIATechUsed, BIAVidHead, BIAContributionHead, BIAContributeBullet1, BIAContributeBullet2, BIAContributeBullet3, BIAContributeBullet4, BIAContributeBullet5, BIALiveSiteLink } from './BIAText';

function BIAClone() {
    return (
        <div className={css(styles.main)}>
            <div className={css(styles.container)} >
                <h1 className={css(styles.headerWords, styles.underline)}>Build In Amsterdam Clone</h1>
                <a className={css(styles.linkLine)} href={BIALiveSiteLink()} target='_blank'><p className={css(styles.linkStyle)}>Live Site Link</p></a>

                <p className={css(styles.paragraphs)}>{BIAText1()}</p>
                <p className={css(styles.paragraphs)}>{BIAText2()}</p>
                <p className={css(styles.paragraphs)}>{BIAText3()}</p>

                <p className={css(styles.technologiesHeader)}>{BIATechHead()}</p>
                <p className={css(styles.technologiesList)}>{BIATechUsed()}</p>

                <h4 className={css(styles.vidTextTop)}>{BIAVidHead()}</h4>
                <div className={css(styles.vidContainer)}>
                    <iframe
                        className={css(styles.videoDimensions)}
                        src="https://www.youtube.com/embed/niJ5m1T6hrQ"
                        id="videoStyle"
                        title='BIA'
                        frameBorder="0"
                        allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
                <p className={css(styles.listHeader)}>{BIAContributionHead()}</p>
                <ul className={css(styles.listContainer)} >
                    <li className={css(styles.listItem)}>{BIAContributeBullet1()}</li>
                    <li className={css(styles.listItem)}>{BIAContributeBullet2()}</li>
                    <li className={css(styles.listItem)}>{BIAContributeBullet3()}</li>
                    <li className={css(styles.listItem)}>{BIAContributeBullet4()}</li>
                    <li className={css(styles.listItem)}>{BIAContributeBullet5()}</li>
                </ul>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        // height: '100vh',
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
    listHeader: {
        marginTop: '20px',
        marginLeft: '45px',
        marginRight: '45px',
        fontSize: '20px',
        '@media(max-width: 840px)': {
            fontSize: '16px',
        },
        '@media(max-width: 740px)': {
            fontSize: '12px',
        },
    },
    listContainer: {
        marginLeft: '45px',
        marginRight: '45px',
    },
    listItem: {
        fontSize: '20px',
        // marginBottom: '20px',
        '@media(max-width: 840px)': {
            fontSize: '16px',
        },
        '@media(max-width: 740px)': {
            fontSize: '12px',
        },
    },
});

export default BIAClone;