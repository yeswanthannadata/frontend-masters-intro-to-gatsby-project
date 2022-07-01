import * as React from 'react';
import { Link } from 'gatsby';

import { Seo } from '../components/seo';

export default function AboutPage() {
  return (
    <>
      <Seo title="About this site" description="More info about us page" />
      <main>
        <h1>About this page</h1>
        <Link to="/">back to home</Link>
      </main>
    </>
  );
}
