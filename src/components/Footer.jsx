import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Kovie. All rights reserved.</p>
        <p>Built with ❤️ using React & TMDb API.</p>
        <p>
          Developed by{" "}
          <a
            href="http://kailashbadu.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Kailash Badu
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
