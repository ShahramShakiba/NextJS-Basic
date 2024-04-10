export default function MainNavigation() {
  return (
    <header className="nav-header">
      <div className="logo"> React Meetups </div>

      <nav>
        <ul>
          <li>
            <Link to="/"> All Meetups </Link>
          </li>

          <li>
            <Link to="/new-meetup"> Add New Meetup </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
