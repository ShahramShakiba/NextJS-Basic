import Link from 'next/link';

export default function MainNavigation() {
  return (
    <header className="nav-header">
      <div className="logo">
        <img
          src="https://skillicons.dev/icons?i=nextjs"
          height="35"
          alt="nextjs logo"
        />
        <h1>React & Next Meetups</h1>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/" >
              All Meetups
            </Link>
          </li>

          <li>
            <Link href="/newMeetup" >
              Add New Meetup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
