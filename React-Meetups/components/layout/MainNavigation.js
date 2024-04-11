import Link from 'next/link';

export default function MainNavigation() {
  return (
    <header className="nav-header">
      <div className="logo"> React Meetups </div>

      <nav>
        <ul>
          <li>
            <Link href="/"> All Meetups </Link>
          </li>

          <li>
            <Link href="/newMeetup"> Add New Meetup </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
