import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu';
import styles from './styles.module.scss';
import svgLogo from './logo.svg';
import svgLogin from './login.svg';

class HeaderNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // resize listener
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  // eslint-disable-next-line class-methods-use-this
  updateDimensions() {
    if (window.innerWidth < 868) {
      return <BurgerMenu />;
    }
    return (
      <div className={styles.rightNav}>
        <div className={styles.links}>
          <Link to="/">Главная</Link>
          <a href="#1">Материалы для вас</a>
          <a href="#1">Календарь курсов</a>
        </div>
        <div className={styles.login}>
          <Link to="/login">
            <ReactSVG
              src={svgLogin}
              wrapper="span"
              svgStyle={{ transform: 'translateY(2px)', margin: '0 7px 0 0' }}
            />
              Войти
          </Link>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.topBar}>
        <ReactSVG
          src={svgLogo}
          evalScripts="always"
          loading={() => <span>Karpachoff</span>}
          renumerateIRIElements={false}
          // svgStyle={{ width: 184 }}
        />
        {this.updateDimensions()}
      </div>
    );
  }
}

export default HeaderNav;
