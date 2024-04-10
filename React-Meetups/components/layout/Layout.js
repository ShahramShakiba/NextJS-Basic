import MainNavigation from './MainNavigation';

export default function Layout({ children }) {
  return (
    <div>
      <MainNavigation />

      <main className="main-layout"> {children} </main>
    </div>
  );
}
