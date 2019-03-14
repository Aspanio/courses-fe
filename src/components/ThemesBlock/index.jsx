/* eslint-disable no-const-assign */
import React, { Component } from 'react';
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import ThemeBlock from '../ThemeBlock';
import styles from './styles.module.scss';

class ThemesBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //   static propTypes = {
  //     prop: PropTypes
  //   }

  render() {
    const payload = [
      {
        themeName: 'Важные темы прошедшего возраста',
        text: `loremdfksdghladkjgdekjsahg
          ksdhgalkjhsdalfkjdhflaskdhglkadsghaksdgaksdlghsda;kjghdas;kljghdsa;kjg
          ashdg;kjasdhg;aksdjghdaslkjghds;lkjasd;ghdsg;hasdrkoasdhfkdjsahfsda;k`,
        milestone: 'до 3 лет 4 месяца',
        date: '25.06.2017',
      },
      {
        themeName: 'Важные темы прошедшего возраста',
        text: `loremdfksdghladkjgdekjsahg
          ksdhgalkjhsdalfkjdhflaskdhglkadsghaksdgaksdlghsda;kjghdas;kljghdsa;kjg
          ashdg;kjasdhg;aksdjghdaslkjghds;lkjasd;ghdsg;hasdrkoasdhfkdjsahfsda;k`,
        milestone: 'до 3 лет 4 месяца',
        date: '25.06.2017',
      },
    ];
    let index = 0;
    let number;
    const test = payload.map((data) => {
      index += 1;
      if (index < 10) {
        number = '0' + index;
      } else {
        number = '' + index;
      }
      return <ThemeBlock themeName={data.themeName} text={data.text} milestone={data.milestone} date={data.date} number={number} />;
    });

    return (
      <div className={styles.themesContainer}>
        {test}
      </div>
    );
  }
}

export default ThemesBlock;
// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(index)
