import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import iconSvg from './icon.svg';
import styles from './styles.module.scss';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isClicked } = this.state;

    this.setState({
      isClicked: !isClicked,
    });
  }

  render() {
    const { isClicked } = this.state;

    return (
      <div className={isClicked ? styles.checkboxClicked : styles.checkbox} onClick={this.handleClick}>
        <div className={styles.iconPos}>
          <ReactSVG src={iconSvg} />
        </div>
      </div>
    );
  }
}

export default Checkbox;
