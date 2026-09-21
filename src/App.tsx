import "./App.css";
import heroImage from "./assets/hero.png";

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <div className="logo">PAPU</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>
        {/* Home */}
        <section id="home" className="hero">
          <div className="hero-text">
            <p className="eyebrow">ART · PHOTOGRAPHY · CREATIVE</p>

            <h1>
              A collection of
              <br />
              visual stories.
            </h1>

            <p className="intro">
              Photography, art and creative projects collected in one place.
            </p>

            <a href="#portfolio" className="hero-link">
              Explore the work →
            </a>
          </div>

          <div className="hero-image">
            <img src={heroImage} alt="Featured artwork" />
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="section">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>Portfolio</h2>
        </section>

        {/* Projects */}
        <section id="projects" className="projects-section">
          <div className="projects-header">
            <p className="eyebrow">CREATIVE PROJECTS</p>

            <h2>Projects</h2>
          </div>

          <article className="project-card">
            <div className="project-image">
              <img
              src="/Gatito-Kurt.png"
              alt="Gatito Kurt"
              />
              </div>
              
            <div className="project-info">
              <p className="project-number">01</p>

              <h3>Gatito Kurt</h3>

              <p className="project-subtitle">
                The Decision Oracle
              </p>

              <p className="project-description">
                A cat positioned as a decision oracle, somewhere between
                mythology, technology and everyday life.
              </p>

              <a
                href="https://github.com/cesar-alex-jm/new-gatito-kurt"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Explore project →
              </a>
            </div>
          </article>
        </section>

        {/* About */}
        <section id="about" className="about-section">
          <div className="about-header">
            <p className="eyebrow">ABOUT PAPU</p>

            <h2>
              A geographical
              <br />
              mystery by design.
            </h2>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p>
                Papu exists somewhere between Central America and Europe —
                a geographical mystery by design.
              </p>

              <p>
                Born from the collaborative spirit of two artists merging
                into one conceptual entity, Papu explores the fluid
                boundaries of identity, geography, and creative expression.
              </p>

              <p>
                Currently studying Art and Design in Germany, Papu is
                spending this semester as an exchange student in South Korea.
              </p>

              <p>
                Beyond visual arts, Papu plays both violin and electric guitar,
                weaving sound into the fabric of installations and performances.
              </p>

              <p>
                Among Papu's most celebrated creations is Gatito Kurt:
                a cat positioned as a decision oracle, complete with its own
                web app designed to validate its mystical gifting.
              </p>

              <p>
                The project explores the intersection of technology,
                mythology, and everyday life.
              </p>

              <p>
                Music, cats, and computers remain the three pillars
                guiding Papu's practice.
              </p>
            </div>

            <div className="about-pillars">
              <span>Music</span>
              <span>Cats</span>
              <span>Computers</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;