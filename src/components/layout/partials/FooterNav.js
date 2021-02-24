import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
        <a href="https://convect.readme.io">Documentation</a>
        </li>
        <li>
          <Link to="/about-us/">About us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;