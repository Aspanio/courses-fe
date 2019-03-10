import React from 'react';
import ReactSVG from 'react-svg';
import styles from './styles.module.scss';
import svgLogo from './logo.svg';
import svgLogin from './login.svg';

export default function () {
  return (
    <div className={styles.topBar}>
      <ReactSVG
        src={svgLogo}
        evalScripts="always"
        fallback={() => <span>Error!</span>}
        loading={() => <span>Karpachoff</span>}
        onInjected={(error, svg) => {
          if (error) {
            console.error(error);
            return;
          }
          console.log(svg);
        }}
        renumerateIRIElements={false}
        // svgStyle={{ width: 184 }}
      />
      <div className={styles.rightNav}>
        <div className={styles.links}>
          <a href="#1">Главная</a>
          <a href="#1">Материалы для вас</a>
          <a href="#1">Календарь курсов</a>
        </div>
        <div className={styles.login}>
          <a href="#1">
            <ReactSVG
              src={svgLogin}
              evalScripts="always"
              fallback={() => <span>Error!</span>}
              loading={() => <span>123</span>}
              onInjected={(error, svg) => {
                if (error) {
                  console.error(error);
                  return;
                }
                console.log(svg);
              }}
              renumerateIRIElements={false}
              wrapper="span"
              svgStyle={{ transform: 'translateY(2px)', margin: '0 7px 0 0' }}
            />
            Войти
          </a>
        </div>
      </div>
    </div>
  );
}
