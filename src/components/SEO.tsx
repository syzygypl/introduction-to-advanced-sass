import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: Array<{ name: string, content: string }>,
}

function SEO({
  title,
  description = '',
  lang = 'en',
  meta = [],
}: SEOProps) {
  // eslint-disable-next-line
  const { site }: any = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  /* eslint-disable */
  const metaDescription: string = description || site.siteMetadata.description;
  const defaultTitle: string = site.siteMetadata.title;
  const author: string = site.siteMetadata?.author || '';
  /* eslint-enable */

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

export default SEO;
