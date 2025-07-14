export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">ABOUT ME</h2>
      
      <div className="about-content">        
        <div className="bio neon-border">
          <p>Currently a student at Syracuse University persuing a major in Computer Science and a minor in Engineering and Computer Science Management.</p>
        </div>
      </div>

      <style jsx>{`
        .about {
          padding: 80px 0;
          text-align: center;
        }

        .section-title {
          font-size: 48px;
          font-weight: 900;
          color: #388E3C;
          margin-bottom: 60px;
          letter-spacing: 4px;
        }

        .about-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 60px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .avatar-container {
          flex-shrink: 0;
        }

        .bio {
          flex: 1;
          padding: 30px;
          background: rgba(0, 0, 0, 0.3);
          border-color: #165A54;
          border-radius: 10px;
          backdrop-filter: blur(10px);
        }

        .bio p {
          font-size: 18px;
          line-height: 1.6;
          color: #9DD85C;
          margin: 0;
        }

        @media (max-width: 768px) {
          .about-content {
            flex-direction: column;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  )
}