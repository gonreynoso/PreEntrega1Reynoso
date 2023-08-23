//eslint-disable-next-line
import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import ItemListContainer from '../ItemListContainer/ItemListContainer';
import CartWidget from '../Cart/CartWidget/CartWidget';
import logo from '../../assets/logo-motor.jpg';

const NavBar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.containerLogo}>
          <Link className={styles.link} to="/">
            <img src={logo} className={styles.logo} alt="logo" />
            <p className={styles.titulo}>MotorEnLínea</p>
          </Link>
        </div>

        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact">Contact</Link>
          </li>
          {/* Esto es de la 1er entrega */}
          <li className={styles.navItem}>
            <Link to="/cart" className={styles.cartLink}>
              <CartWidget />
            </Link>
          </li>
        </ul>

      </nav >
    </>
  );
};

NavBar.propTypes = {

}

export default NavBar;
