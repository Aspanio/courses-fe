import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { href, text } = this.props;
    return (
      <a href={href} className={styles.button}>{text}</a>
    );
  }
}

export default Button;

Button.defaultProps = {
  href: '#1',
  text: '',
};

Button.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
};
