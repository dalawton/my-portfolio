export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="greeting">HI, I&apos;M</h1>
        <h2 className="name neon-text">DANIELLE</h2>
        <h3 className="title">STUDENT</h3>
        
        <div className="cta-buttons">
          <button className="cta-button projects-btn hover-glow">
            VIEW PROJECTS
          </button>
          <button className="cta-button resume-btn hover-glow">
            DOWNLOAD RESUME
          </button>
        </div>
      </div>

      <style jsx>{`
        .hero {
          text-align: center;
          padding: 60px 0;
          position: relative;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .greeting {
          font-size: 48px;
          font-weight: 400;
          color: #388E3C;
          margin-bottom: 20px;
        }

        .name {
          font-size: 120px;
          font-weight: 900;
          color: #388E3C;
          margin-bottom: 20px;
          line-height: 1;
          letter-spacing: 8px;
          text-shadow: 
            4px 4px 0px #0D2D23,
            8px 8px 0px rgba(56, 142, 60, 0.8),
            12px 12px 0px rgba(56, 142, 60, 0.6),
            16px 16px 0px rgba(56, 142, 60, 0.4),
            20px 20px 0px rgba(56, 142, 60, 0.2);
        }

        .title {
          font-size: 36px;
          font-weight: 700;
          color: #9DD85C;
          margin-bottom: 60px;
          letter-spacing: 4px;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-top: 40px;
        }

        .cta-button {
          padding: 15px 30px;
          font-family: 'Orbitron', monospace;
          font-weight: 700;
          font-size: 18px;
          border: none;
          cursor: pointer;
          letter-spacing: 2px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .projects-btn {
          background: linear-gradient(45deg, #165A54, #388E3C);
          color: white;
          border-radius: 0;
          clip-path: polygon(15px 0%, 100% 0%, calc(100% - 15px) 100%, 0% 100%);
        }

        .resume-btn {
          background: linear-gradient(45deg, #8DC849, #9DD85C);
          color: white;
          border-radius: 0;
          clip-path: polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 15px 0);
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        @media (max-width: 768px) {
          .name {
            font-size: 80px;
          }
          
          .title {
            font-size: 24px;
          }
          
          .cta-buttons {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  )
}