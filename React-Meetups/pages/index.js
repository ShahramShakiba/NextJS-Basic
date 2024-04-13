// our-domain.com/
//================================
import MeetupList from '@/components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image:
      'https://resources.sansan.com/hubfs/Imported_Blog_Media/GettyImages-530685779-Article-9.jpg',
    address: 'London',
    description: 'This is a first meetups!',
  },
  {
    id: 'm2',
    title: 'second Meetup',
    image:
      'https://www.profocustechnology.com/wp-content/uploads/2017/02/tech-meetup.jpg',
    address: 'US',
    description: 'This is a second meetups!',
  },
];

export default function HomePage({ meetups }) {
  return (
    <>
      <MeetupList meetups={meetups} />
    </>
  );
}

// if you need to add data-fetching to a page-component | fn = reserves-name
export async function getStaticProps() {
  // fetch data from an API

  return {
    //this props will be the props-obj you receive in your page-component-fn
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

/* NextJS Rendering
- we might have SEO Problems if we use useEffect() to fetch-data

* Does not wait for the data to be fetched to then return the fully pre-rendered page, but it returns the result of the first component rendered cycle and that might be a pretty empty page

BUT Nextjs has 2 solution for pre-rendering the content-data
  - Static Site Generation (SSG):
    a page component is pre-rendered when you build your application, when you build the Next project, When You build it for the production(npm run build)

  - Server-side Rendering (SSR)

*/

/* getStaticProps()
?- Nextjs first of all, call getStaticProps() before it calls the component-function

- its job is to prepare the props for this page
- and this props could then contain the data this page needs

?- getStaticProps() is allowed to be "asynchronous"
- you can return a promise there
- nextjs will wait for this promise to resolve
- it waits until your data is loaded
- then you return the props for this component-fn

- inside this getStaticProps() you could access a file system or securely connect to a database
* because any code you write in here will never end up on the client-side and it will never execute on the client-side, simply because this code is executed during the "build-process"

*/
