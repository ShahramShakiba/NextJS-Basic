import MeetupItem from './MeetupItem';

export default function MeetupList({ meetups }) {
  return (
    <ul className="meetup-list">
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}
