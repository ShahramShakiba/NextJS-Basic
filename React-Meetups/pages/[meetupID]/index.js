import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import MeetupDetail from '@/components/meetups/MeetupDetail';

export default function MeetupDetails({ meetupData }) {
  return (
    <>
      <Head>
        <title> {meetupData.title} </title>
        <meta name="description" content={meetupData.description} />
        <link rel="icon" type="image/png" href="ico.png" />
        <meta />
      </Head>

      <MeetupDetail
        image={meetupData.image}
        title={meetupData.title}
        address={meetupData.address}
        description={meetupData.description}
      />
    </>
  );
}

// getStaticPaths() is a function you need to export if you have a dynamic-page and you're using getStaticProps()
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://shahram:96C5ScLzZs4ghP7Z@cluster-sh.rgaxnx4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-Sh'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  //find({}, {}) = first brackets: find all data but second brackets: which fields should be extracted | only include id
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,

    paths: meetups.map((meetup) => ({
      params: {
        meetupID: meetup._id.toString(),
      },
    })),
  };
}

// Page pre-generated during the build-process
export async function getStaticProps(context) {
  //fetch data for a single meetup

  //identifier between the square-brackets will be properties and the value will be the actual value encoded in the URL
  const meetupID = context.params.meetupID;

  const client = await MongoClient.connect(
    'mongodb+srv://shahram:96C5ScLzZs4ghP7Z@cluster-sh.rgaxnx4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-Sh'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupID), //convert this string to an object-id
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        image: selectedMeetup.image,
      },
    },
  };
}

/* Dynamic Path
- Folder: [meetupID] OR File: [meetupID].js   =>  
?- dynamic paths allow you to create dynamic routes for your application.

- These dynamic routes enable you to handle varying data and content by capturing parameters in the URL. 

- For instance, if you have a page that needs to display different content based on the URL, you can use dynamic paths to achieve this flexibility.

?- you can use brackets [] in the page filename to denote dynamic segments.

- For example, if you create a file named [id].js inside the pages directory, you can access the dynamic parameter id in your page component using useRouter from next/router.
*/

/* fallback

- fallback it allows you to pre-generated some of your pages for a specific meetupID values

?- false:
   your path contains all supported meetupID values, if user enter anything that's not supported here, throw a 404 error - new paths will result in a 404 page

?- true:
   next.js would try to generate a page dynamically on the server for the incoming request and if it fails, it will serve the fallback page

*/
