import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';

import './Header.scss';

interface HeaderProps {
  siteTitle: string;
  className?: string;
}

function Header({
  siteTitle,
  className = undefined,
}: HeaderProps) {
  return (
    <header className={cx('header', className)}>
      <Link className="header__link" to="/">
        {siteTitle}
      </Link>
    </header>
  );
}

export default Header;
