import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

/* Dynamic Path

- [newsID].js   =>  
?- dynamic paths allow you to create dynamic routes for your application.

- These dynamic routes enable you to handle varying data and content by capturing parameters in the URL. 

- For instance, if you have a page that needs to display different content based on the URL, you can use dynamic paths to achieve this flexibility.

?- you can use brackets [] in the page filename to denote dynamic segments.

- For example, if you create a file named [id].js inside the pages directory, you can access the dynamic parameter id in your page component using useRouter from next/router.
*/