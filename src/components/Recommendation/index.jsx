import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import arrowSvg from './arrow.svg';
import styles from './styles.module.scss';

class Recommendation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isopen: '0',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isopen } = this.state;
    if (isopen === '0') {
      this.setState({
        isopen: '1',
      });
    } else {
      this.setState({
        isopen: '0',
      });
    }
  }

  render() {
    const { content, icon, header } = this.props;
    const { isopen } = this.state;
    return (
      <div className={styles.slickContainer}>
        <div className={styles.slick} isopen={isopen}>
          <span className={styles.icon}>
            <ReactSVG src={icon} element="span" />
          </span>
          <h1 className={styles.header}>{header}</h1>
          <span className={styles.arrow} onClick={this.handleClick}>
            <ReactSVG src={arrowSvg} element="span" />
          </span>
        </div>
        <div className={styles.content} isopen={isopen}>
          {content}
        </div>
      </div>
    );
  }
}

export default Recommendation;
