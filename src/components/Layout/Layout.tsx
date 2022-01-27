import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './Layout.scss';
import Themes from '../Themes/Themes';
import Header from '../Header/Header';
import Logo from '../../images/logo.svg';

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
      <Themes className="layout__themes" />
      <Header className="layout__header" siteTitle={siteTitle} />
      <main className="layout__content">
        <span className="layout__image">
          <Logo />
        </span>
        {/*<img className="layout__image" src={Logo} alt="Sass logo" />*/}
        {children}
      </main>
    </div>
  );
}

export default Layout;
