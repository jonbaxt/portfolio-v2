import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
// import { goToTop, goToAnchor } from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import './App.css';

import Introduction from './Components/Sections/Introduction';
import About from './Components/Sections/About';
import Skills from './Components/Sections/Skills';

class App extends Component {
  render() {
    configureAnchors({ offset: -60, scrollDuration: 200 });
    return (
      <div className={css(styles.universalStyling)}>
        <div className={css(styles.navMain)}>
          <a className={css(styles.linkStyled)} href='#introSection'>Jonathan Baxter</a>
          <div>
            <a className={css(styles.linkStyled)} href='#aboutSection'>About</a>

            <a className={css(styles.linkStyled)} href='#skillsSection'>Skills</a>

            <a className={css(styles.linkStyled)} href='#projectsSection'>Projects</a>

            <a className={css(styles.linkStyled)} href='#contactSection'>Contact</a>
          </div>
        </div>
        <Introduction />
        <About />
        <Skills />
      </div>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  universalStyling: {
    fontFamily: 'Allerta Stencil, sans-serif',
    color: 'white',
    textShadow: '1px 1px 2px black',
  },
  navMain: {
    zIndex: '11',
    position: 'fixed',
    width: '100%',
    height: '40px',
    background: 'rgb(178,34,34)',
    boxShadow: '1px 1px 2px gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // justifyContent: 'center',
  },
  linkStyled: {
    textDecorationLine: 'none',
    // textDecorationUnderline: 'none',
    color: 'white',   
    marginLeft: '10px',
    marginRight: '10px',
  }
});