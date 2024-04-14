import MeetupDetail from '@/components/meetups/MeetupDetail';

export default function MeetupDetails({ meetupData }) {
  return (
    <MeetupDetail
      image={meetupData.image}
      title="First Meetup"
      address="London"
      description="This is first meetup."
    />
  );
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  // identifier between the square-brackets will be properties and the value will be the actual value encoded in the URL
  const meetupID = context.params.meetupID;

  return {
    props: {
      meetupData: {
        image:
          'https://resources.sansan.com/hubfs/Imported_Blog_Media/GettyImages-530685779-Article-9.jpg',
        id: meetupID,
        title: 'First Meetup',
        address: 'London',
        description: 'This is first meetup.',
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
