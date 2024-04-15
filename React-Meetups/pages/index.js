// our-domain.com/
//================================
import { MongoClient } from 'mongodb';
import MeetupList from '@/components/meetups/MeetupList';

export default function HomePage({ meetups }) {
  return (
    <>
      <MeetupList meetups={meetups} />
    </>
  );
}

// if you need to add data-fetching to a page-component | fn = reserves-name
export async function getStaticProps() {
  // fetch data(GET) from an API
  const client = await MongoClient.connect(
    'mongodb+srv://shahram:96C5ScLzZs4ghP7Z@cluster-sh.rgaxnx4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-Sh'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    //this props will be the props-obj you receive in your page-component-fn
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },

    revalidate: 10, // 10 seconds | 3600 1H
  };
}

/* NextJS Rendering
- we might have SEO Problems if we use useEffect() to fetch-data
* Does not wait for the data to be fetched to then return the fully pre-rendered page, but it returns the result of the first component rendered cycle and that might be a pretty empty page

BUT Nextjs has 2 solution for pre-rendering the content-data
  - Static Site Generation (SSG):
    a page component is pre-rendered when you build your application, when you build the Next project, When You build it for the production(npm run build)

  - Server-side Rendering (SSR)
    When you do this, you'll create an HTML file with all of the content of the site and send it back to the user. The user will then get an fully rendered HTML page that contains all of the necessary information for them to see your site without having to wait for any JavaScript or CSS files to load. This means that users who visit your site will be able to see everything much faster than if they were just looking at blank screen while waiting for JavaScript files to load.
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

/* revalidate
- this page will not just build during the build process, but it also be generated every couple of seconds on the server, at least if there are requests
*/

/* getServerSideProps()

---> run always on the server after deployment | use it: if you need to access to request-obj and authentication & if you have multiple-data that changes every seconds

export async function getServerSideProps(context) {
  ---> access to request-obj & response-obj
  const req = context.req;
  const res = context.res;

  ---> fetch data from an API

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },

    ---> this fn does not need "revalidate"
  };
}
*/
