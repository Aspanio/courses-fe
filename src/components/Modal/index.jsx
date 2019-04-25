import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import styles from './styles.module.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          {renderHTML(this.props.children)}
          <div>
            <button type="button" onClick={this.props.onClose}>Закрыть</button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
