import React, { ReactNode } from 'react';
import cx from 'classnames';

import './Blockquote.scss';

interface BlockquoteProps {
  children: ReactNode;
  className?: string;
}

function Blockquote({
  children,
  className = undefined,
}: BlockquoteProps) {
  return (
    <blockquote className={cx('blockquote', className)}>
      <p className="blockquote__text">
        {children}
      </p>
    </blockquote>
  );
}

export default Blockquote;
