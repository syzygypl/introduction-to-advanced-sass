import React from 'react';
import cx from 'classnames';

import './Header.scss';
import Icon from '../../images/icon.svg';

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
      <span className="header__logo">
        <Icon />
      </span>
      {siteTitle}
    </header>
  );
}

export default Header;
