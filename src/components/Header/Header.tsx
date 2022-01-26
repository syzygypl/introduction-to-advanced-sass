import React from 'react';
import cx from 'classnames';

import './Header.scss';
import icon from '../../images/icon.png';

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
      <img className="header__logo" src={icon} alt="Sass logo" />
      {siteTitle}
    </header>
  );
}

export default Header;
