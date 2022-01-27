import React, { ReactNode } from 'react';
import cx from 'classnames';

import './Accordion.scss';

interface AccordionProps {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
  className?: string;
}

function Accordion({
  title,
  children,
  isOpen = false,
  className = undefined,
}: AccordionProps) {
  return (
    <details className={cx('accordion', className)} open={isOpen}>
      <summary className="accordion__title">
        {title}
      </summary>

      {children}
    </details>
  );
}

export default Accordion;
