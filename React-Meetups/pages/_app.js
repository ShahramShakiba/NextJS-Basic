import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

/* Component & pageProps

* pageProps: are passed into this Component(App) automatically by Nextjs - these props are specific props our pages might be getting

* Component: is a prop that holds the actual page-content that should be rendered - it wil be different whenever we switch a page
*/