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

export default function HomePage() {
  return (
    <>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </>
  );
}
