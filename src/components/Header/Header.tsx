import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';

import './Header.scss';
import Themes from '../Themes/Themes';
import SassIcon from '../../images/sass-icon.svg';

interface HeaderProps {
  siteTitle: string;
  className?: string;
}

function Header({
  siteTitle,
  className = undefined,
}: HeaderProps) {
  const headerRef = useRef<HTMLElement | null>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const headerEl = headerRef.current;
    const stickinessObserver = new IntersectionObserver(([e]) => (
      setIsSticky(e.intersectionRatio < 1)
    ), {
      threshold: [1],
    });

    if (headerEl) {
      stickinessObserver.observe(headerEl);
    }

    return () => {
      if (headerEl) {
        stickinessObserver.observe(headerEl);
      }
    };
  }, []);

  return (
    <header
      className={cx('header', {
        '-is-sticky': isSticky,
      }, className)}
      ref={headerRef}
    >
      <Themes className="header__themes" />
      <span className="header__logo">
        <SassIcon />
      </span>
      {siteTitle}
    </header>
  );
}

export default Header;
