import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import cx from 'classnames';

import './Markdown.scss';

interface HeaderProps {
  children: string;
  className?: string;
}

function Markdown({
  children,
  className = undefined,
}: HeaderProps) {
  return (
    <ReactMarkdown
      className={cx('markdown', className)}
      rehypePlugins={[rehypeRaw]}
    >
      {children}
    </ReactMarkdown>
  );
}

export default Markdown;
