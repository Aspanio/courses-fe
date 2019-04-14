import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import arrowSvg from './arrow.svg';
import styles from './styles.module.scss';

class Recommendation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: '0',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isOpen } = this.state;
    if (isOpen === '0') {
      this.setState({
        isOpen: '1',
      });
    } else {
      this.setState({
        isOpen: '0',
      });
    }
  }

  render() {
    const { comments, header, newQuestion } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={styles.slickContainer}>
        <div className={styles.slick} isOpen={isOpen}>
          <h1 className={styles.header}>{header}</h1>

          <div className={styles.icons}>
            {newQuestion ? '<h1>Новый вопрос</h1>' : null}
            <span>
              <ReactSVG src={arrowSvg} element="span" />
            </span>
            <span className={styles.arrow} onClick={this.handleClick}>
              <ReactSVG src={arrowSvg} element="span" />
            </span>
          </div>
        </div>
        <div className={styles.content} isOpen={isOpen}>
          {comments}
        </div>
      </div>
    );
  }
}

export default Recommendation;
