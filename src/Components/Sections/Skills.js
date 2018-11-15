import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ScrollableAnchor from 'react-scrollable-anchor';

function Skills() {

    return (
        <div className={css(styles.main)}>
        <ScrollableAnchor id={'skillsSection'}>
            <h1>Skills</h1>
        </ScrollableAnchor>

        </div>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '200vh',
        border: '2px dotted yellow',
        color: 'black',
        textShadow: '1px 1px 2px grey',
    }
});

export default Skills;