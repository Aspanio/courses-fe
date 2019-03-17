import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import PropTypes from 'prop-types';
import arrowSvg from './arrow.svg';
import styles from './styles.module.scss';

export default class BlockSlick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      upOrDown: 'rotate(0deg);',
    };
    this.openClose = this.openClose.bind(this);
  }

  openClose() {
    const { open } = this.state;
    const invertOpen = !open;
    if (open) {
      this.setState({
        upOrDown: 'rotate(180deg);',
      });
    } else {
      this.setState({
        upOrDown: 'rotate(0deg);',
      });
    }
    this.setState({
      open: invertOpen,
    });
  }

  render() {
    const { header, element } = this.props;
    const { open, upOrDown } = this.state;
    return (
      <div className={styles.slickContainer}>
        <div className={styles.blockSlick}>
          <div className={styles.lineBefore} />
          <h1>{header}</h1>
          <div className={styles.line} />
          <ReactSVG
            src={arrowSvg}
            element="span"
            onClick={this.openClose}
            svgStyle={{
              transform: upOrDown,
              cursor: 'pointer',
              padding: '8px',
            }}
          />
        </div>
        <div style={open ? { display: 'block' } : { display: 'none' }}>
          {element}
        </div>
      </div>
    );
  }
}

BlockSlick.propTypes = {
  element: PropTypes.objectOf.isRequired,
  header: PropTypes.string.isRequired,
};
