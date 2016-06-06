import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import PaperAvatarContent from './PaperAvatarContent';

const muiTheme = getMuiTheme({});

class Container extends Component {

  constructor() {
    super();
    this.style = {
      height: 100,
      width: '100%',
      textAlign: 'center',
      display: 'inline-block',
    };

    const dev_txt = "As a developer, every byte of code that I touch, results in a beautiful, comprehensive, library or framework.";
    const design_txt = "As a UX engineer, every UX concept is taken into consideration to create a simple workflow supported by intentional color, imagery, and modern design patterns.";
    const sport_txt = "Sports have been a huge part of my life and can translate team dynamics, communication, and trust into my professional career.";
    const adventure_txt = "When I'm not working or playing sports, I spend my time finding new life fulfilling adventures. Whether it's climbing to the top of a mountain, or finding a new country to explore, I'm always up for adventure.";
    const beer_txt = "No matter what flavor, or style of beer, I'm very passionate about being educated on the ins and outs of what goes into this malty beverage. I also enjoy homebrewing and coming up with custom beer recipes.";
    const chef_txt = "Food is my biggest passion outside of my professional career. I consider myself an adventerous, amateur chef. Similar to Front End Development and Design, aesthetics and presentation techniques are crucial to considering yourself an ameteur chef.";

    this.sections = [
      { id: 0, title: "developer", body: dev_txt, showBtnGroup: true },
      { id: 1, title: "designer", body: design_txt, showBtnGroup: true },
      { id: 2, title: "sports enthusiast", body: sport_txt, showBtnGroup: false },
      { id: 3, title: "adventurer", body: adventure_txt, showBtnGroup: false },
      { id: 4, title: "beer lover", body: beer_txt, showBtnGroup: false },
      { id: 5, title: "amateur chef", body: chef_txt, showBtnGroup: false }
    ];
  }

  _getSections() {
    return this.sections.map((s) => {
      return (
        <PaperAvatarContent
          title={s.title}
          body={s.body}
          showBtnGroup={s.showBtnGroup}
          key={s.id}
        />
      );
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <section className="about">
          <Paper className="about__container" zDepth={1}>
            {this._getSections()}
          </Paper>
        </section>
      </MuiThemeProvider>
    );
  }
}

export default Container;
