import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="container main-content">
        {children}
      </main>

      <footer className="footer">
        Learn. Practice. Reflect. Improve.
      </footer>
    </>
  );
}