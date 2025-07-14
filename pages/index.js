import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Danielle - Student of Computer Science</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <About />
      <Projects />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Orbitron', monospace;
          background: linear-gradient(135deg, #0D2D23 0%, #1B5A4A 25%, #0A342D 50%, #033530 75%, #165A54 100%);
          color: white;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(141, 196, 73, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(155, 216, 84, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(56, 142, 60, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 90% 90%, rgba(139, 195, 74, 0.25) 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .stars {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
        }

        .neon-text {
          text-shadow: 
            0 0 5px currentColor,
            0 0 10px currentColor;
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .hover-glow {
          transition: all 0.3s ease;
        }

        .hover-glow:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  )
}