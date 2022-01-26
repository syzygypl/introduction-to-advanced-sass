import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import logo from '../images/logo.svg';

function Index() {
  return (
    <Layout>
      <SEO title="Introduction to advanced Sass" />
      <img src={logo} style={{ maxWidth: '250px' }} alt="Sass logo" />
      <h1>
        Introduction to advanced Sass.
      </h1>
    </Layout>
  );
}

export default Index;
