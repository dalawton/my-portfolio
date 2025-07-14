export default function Projects() {
  const projects = [
    {
      title: "DISCORD BOT",
      color: "#8DC849",
      icon: "🌌"
    },
    {
      title: "INVENTORY TRACKING SYSTEM",
      color: "#9DD85C",
      icon: "💬"
    },
    {
      title: "PORTFOLIO WEBSITE",
      color: "#388E3C",
      icon: "🖥️"
    }
  ]

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">PROJECTS</h2>
      <p className="section-description">Here are some of my recent projects:</p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card hover-glow"
            style={{
              borderColor: project.color,
              border: `3px solid ${project.color}`
            }}
          >
            <div className="project-icon">{project.icon}</div>
            <h3 className="project-title" style={{ color: project.color }}>
              {project.title}
            </h3>
          </div>
        ))}
      </div>

      <style jsx>{`
        .projects {
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

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .project-card {
          aspect-ratio: 1;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-icon {
          font-size: 60px;
          margin-bottom: 20px;
          filter: drop-shadow(0 0 20px currentColor);
        }

        .project-title {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 2px;
          text-align: center;
          line-height: 1.2;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .project-card {
            aspect-ratio: 1.2;
          }
        }
      `}</style>
    </section>
  )
}