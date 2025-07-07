import SignupForm from './SignupForm';

function HomeSection({ isActive }) {
  return (
    <section id="home" className={`section ${isActive ? 'active' : ''}`}>
      <div className="home-container">
        <div className="home-content">
          <div className="hero-text">
            <h1 className="gradient-text floating">
              Unleash Your <strong>Creative Potential</strong>
            </h1>
            <p className="hero-subtitle">
              Transform your ideas into stunning digital experiences. Connect with fellow creators, 
              share your passion, and build a community that inspires.
            </p>
            <div className="hero-features">
              <div className="feature-item">
                <span className="feature-icon">🎨</span>
                <span>Create Beautiful Content</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🌐</span>
                <span>Connect Globally</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💡</span>
                <span>Share Your Ideas</span>
              </div>
            </div>
            <button className="btn-primary pulse">
              Start Your Journey
            </button>
          </div>
          
          <div className="signup-container">
            <SignupForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
