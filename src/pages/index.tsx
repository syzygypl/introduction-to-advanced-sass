import React from 'react';

import SEO from '../components/SEO';
import Layout from '../components/Layout/Layout';
import Markdown from '../components/Markdown/Markdown';
import readme from '../../README.md';

function Index() {
  return (
    <Layout>
      <SEO title="Introduction to advanced Sass" />
      <Markdown>
        {readme}
      </Markdown>
    </Layout>
  );
}

export default Index;
