export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#about" className="nav-link">ABOUT</a>
        <a href="#projects" className="nav-link">PROJECTS</a>
        <a href="#skills" className="nav-link">SKILLS</a>
        <a href="#contact" className="nav-link">CONTACT</a>
      </nav>

      <style jsx>{`
        .header {
          padding: 30px 0;
          text-align: center;
        }

        .nav {
          display: flex;
          justify-content: center;
          gap: 60px;
        }

        .nav-link {
          color: #9DD85C;
          text-decoration: none;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: 2px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #8DC849, #9DD85C);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link:hover {
          color: #ffffff;
          text-shadow: 0 0 20px #9DD85C;
        }

        @media (max-width: 768px) {
          .nav {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </header>
  )
}