import React from 'react';
import ReactSVG from 'react-svg';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';
import emSvg from './em.svg';
import styles from './styles.module.scss';

function ListItem(props) {
  const { text, danger, orange } = props;

  return (
    <div>
      { danger === true || danger !== undefined
        ? (
          <div className={styles.orange}>
            <ReactSVG src={emSvg} element="span" />
            <p>{text}</p>
          </div>
        )
        : (
          <div className={styles.listItem}>
            <p>{text}</p>
            <Checkbox orange={orange} />
          </div>
        )}
    </div>
  );
}

ListItem.defaultProps = {
  orange: '0',
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ListItem;
