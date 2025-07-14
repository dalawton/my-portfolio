// pages/index.js
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Danielle Lawton - Computer Science Portfolio</title>
        <meta name="description" content="Danielle's Computer Science Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <nav className="nav">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>

      <main className="main">
        <div className="content">
          <div className="text-section">
            <h1 className="title">Hi, I&apos;m Danielle Lawton</h1>
            <p className="subtitle">Computer Science Portfolio</p>
            <div className="button-group">
              <button className="projects-btn">Projects</button>
              <button className="about-btn">About Me</button>
              <button className="contact-btn">Contact Me</button>
            </div>
          </div>
          
          <div className="illustration">
            <Image
              src="/frog-image.png"
              alt="Character illustration"
              width={400}
              height={450}
              priority
            />
          </div>
        </div>
      </main>
      <body className="body">
        <div className="content">
          <div className="text-section">
            <p className="subtitle">Experience</p>
          </div>
        </div>
      </body>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f0f8f0 0%, #e8f5e8 100%);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .header {
          position: fixed;
          top: 0;
          right: 0;
          padding: 2rem 3rem;
          z-index: 1000;
        }

        .nav {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          color: #4a5568;
          text-decoration: none;
          font-weight: 500;
          font-size: 1.1rem;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #2d3748;
        }

        .main {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 2rem;
        }

        .content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          width: 100%;
          gap: 4rem;
        }

        .text-section {
          flex: 1;
          max-width: 800px;
        }

        .title {
          font-size: 4rem;
          font-weight: 700;
          color: #2d3748;
          margin: 0 0 1rem 0;
          line-height: 1.2;
        }

        .subtitle {
          font-size: 1.5rem;
          color: #4a5568;
          margin: 0 0 2rem 0;
          font-weight: 400;
        }

        .projects-btn, .contact-btn, .about-btn {
          background: #8FBC8F;
          color: #2d3748;
          border: none;
          padding: 1rem 2rem;
          font-size: 1.2rem;
          gap: 4rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(143, 188, 143, 0.3);
        }

        .button-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .projects-btn:hover, .contact-btn:hover, .about-btn:hover {
          background: #7aa67a;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(143, 188, 143, 0.4);
        }

        .illustration {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .illustration img {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @media (max-width: 768px) {
          .content {
            flex-direction: column;
            text-align: center;
            gap: 2rem;
          }

          .title {
            font-size: 2.5rem;
          }

          .subtitle {
            font-size: 1.2rem;
          }

          .header {
            padding: 1rem 2rem;
          }

          .nav {
            gap: 1rem;
          }

          .nav-link {
            font-size: 1rem;
          }

          .illustration img {
            width: 400px;
            height: 450px;
          }
        }
      `}</style>
    </div>
  )
}