import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './Layout.scss';
import Header from './Header';

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
      <Header className="layout__header" siteTitle={siteTitle} />
      <main className="layout__content">
        {children}
      </main>
    </div>
  );
}

export default Layout;
