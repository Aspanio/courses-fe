import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactSVG from 'react-svg';
import arrowSvg from './arrow.svg';
import heartSvg from './heart.svg';
import nataliaSvg from './natalia.svg';
import commentArrowSvg from './commentArrow.svg';
import styles from './styles.module.scss';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = { isopen: '0' };

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
    const { isopen } = this.state;
    return (
      <div className={styles.slickContainer}>
        <div className={styles.slick} isopen={isopen}>
          <h1 className={styles.header}>Вопрос о воспитании ребенка(ХАРДКОД)</h1>
          <div className={styles.likesParent}>
            <h3 className={styles.likes}>35</h3>
            <span className={styles.heart} onClick={this.handleClick}>
              <ReactSVG src={heartSvg} element="span" />
            </span>
          </div>
          <span className={styles.arrow} onClick={this.handleClick}>
            <ReactSVG src={arrowSvg} element="span" />
          </span>
        </div>
        <div className={styles.content} isopen={isopen}>
          {/* ниже хардкод */}
          <div className={styles.question}>
            <div className={styles.top}>
              <div className={styles.user}>
                <img src={nataliaSvg} alt="Юзер" />
                <div>
                  <h5>Наталия, Киев</h5>
                  <p className={styles.date}>2 дня назад</p>
                </div>
              </div>
              <div className={styles.likesBlock}>
                <h3 className={styles.likes}>35</h3>
                <span className={styles.heart} onClick={this.handleClick}>
                  <ReactSVG src={heartSvg} element="span" />
                </span>
              </div>
            </div>
            <p className={styles.questionContext}>Комментарий бла бла бла ба</p>
            <div className={styles.questionAnswer}>
              <div className={styles.top}>
                <div className={styles.user}>
                  <img src={nataliaSvg} alt="Юзер" />
                  <div>
                    <h5>Наталия, Киев</h5>
                    <p className={styles.date}>2 дня назад</p>
                  </div>
                </div>
                <div className={styles.likesBlock}>
                  <h3 className={styles.likes}>35</h3>
                  <span className={styles.heart} onClick={this.handleClick}>
                    <ReactSVG src={heartSvg} element="span" />
                  </span>
                </div>
              </div>
              <p className={styles.questionContext}>Комментарий бла бла бла ба</p>
            </div>
            <div className={styles.button}>
              <span>Доступно 3 комментария</span>
              <ReactSVG src={commentArrowSvg} element="span" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
