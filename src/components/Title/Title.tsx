import React, { ReactDOM } from 'react';
import cx from 'classnames';

import './Title.scss';

interface TitleProps {
  children: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

function Title({
  children,
  level,
  className = undefined,
}: TitleProps) {
  const Component: keyof ReactDOM = `h${level}`;

  return (
    <Component className={cx('title', `title--h${level}`, className)}>
      {children}
    </Component>
  );
}

export default Title;
