import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import PaperAvatarContent from './PaperAvatarContent';

const muiTheme = getMuiTheme({});

class About extends Component {

  constructor() {
    super();
    this.style = {
      height: 100,
      width: '100%',
      textAlign: 'center',
      display: 'inline-block',
    };
  }
  _getSections() {
    const sections = [
      { id: 0, title: "developer", imgurl:"/app/Images/jill.png", body:"" },
      { id: 1, title: "designer", imgurl:"/app/Images/jill.png", body:""},
      { id: 2, title: "sports enthusiast", imgurl:"/app/Images/jill.png", body:""},
      { id: 3, title: "adventurer", imgurl:"/app/Images/jill.png", body:""},
      { id: 4, title: "beer lover", imgurl:"/app/Images/jill.png", body:""},
      { id: 5, title: "amateur chef", imgurl:"/app/Images/jill.png", body:""}
    ];

    return sections.map((s) => {
      return (
        <PaperAvatarContent
          title={s.title}
          imgurl={s.imgurl}
          body={s.body}
          key={s.id}
        />
      );
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <section className="about">
          {this._getSections()}
        </section>
      </MuiThemeProvider>
    );
  }
}

export default About;
