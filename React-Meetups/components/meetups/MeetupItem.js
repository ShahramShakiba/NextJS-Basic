import { useRouter } from 'next/router';
import Card from '../ui/Card';

export default function MeetupItem({ image, title, address, id }) {
  const router = useRouter();

  const showDetailsHandler = () => {
    //navigate to [meetupID]
    router.push('/' + id);
  };

  return (
    <li className="meetup-item">
      <Card>
        <div className="image">
          <img src={image} alt={title} />
        </div>

        <div className="content">
          <h3> {title} </h3>
          <address> {address} </address>
        </div>

        <div className="actions">
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

/* router.query
- query: gives us access to all that data that might be part of the URL for a dynamic page for example
*/
