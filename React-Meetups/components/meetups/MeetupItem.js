import Card from '../ui/Card';

export default function MeetupItem({ image, title, address }) {
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
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
}
