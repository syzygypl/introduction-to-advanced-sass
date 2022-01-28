import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './Layout.scss';
import Header from '../Header/Header';
import SassLogo from '../../images/sass-logo.svg';
import GithubIcon from '../../images/github-icon.svg';

interface LayoutProps {
  children: ReactNode;
}

function Layout({
  children,
}: LayoutProps) {
  // eslint-disable-next-line
  const data: any = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  // eslint-disable-next-line
  const siteTitle: string = data.site.siteMetadata?.title || 'Title';

  return (
    <div className="layout">
      <a className="layout__repo" href="https://github.com/syzygypl/introduction-to-advanced-sass">
        <GithubIcon />
        Show code on GitHub
      </a>
      <Header className="layout__header" siteTitle={siteTitle} />
      <main className="layout__content">
        <span className="layout__image">
          <SassLogo />
        </span>
        {children}
      </main>
    </div>
  );
}

export default Layout;
