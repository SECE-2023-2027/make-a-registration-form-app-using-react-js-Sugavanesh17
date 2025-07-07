import image from "./first.jpeg"

function ShareSection({ isActive }) {
  const shareFeatures = [
    {
      icon: "📱",
      title: "Easy Sharing",
      description: "Share your creations with just one click across all platforms"
    },
    {
      icon: "🔗",
      title: "Smart Links",
      description: "Generate beautiful preview cards for your shared content"
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Track engagement and see how your content performs"
    },
    {
      icon: "🎯",
      title: "Target Audience",
      description: "Reach the right people who will love your content"
    }
  ];

  return (
    <section id="share" className={`section ${isActive ? 'active' : ''}`}>
      <div className="share-container">
        <div className="share-header">
          <h1 className="gradient-text">Share Your Creativity</h1>
          <p className="share-subtitle">
            Amplify your voice and connect with audiences worldwide. Share your passion, 
            inspire others, and build meaningful connections through your creations.
          </p>
        </div>

        <div className="share-content">
          <div className="share-info">
            <div className="share-features">
              {shareFeatures.map((feature, index) => (
                <div key={index} className="share-feature">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="share-cta">
              <button className="btn-primary">Start Sharing</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>

          <div className="share-visual">
            <div className="share-card glass-card">
              <div className="card-header">
                <div className="user-avatar">
                  <img src={image} alt="User" />
                </div>
                <div className="user-info">
                  <h4>Alex Rodriguez</h4>
                  <p>Digital Artist</p>
                </div>
              </div>
              <div className="card-content">
                <p>"Just finished my latest digital painting! The creative process was incredible. 
                Can't wait to share more of my journey with you all! 🎨✨"</p>
                <div className="card-stats">
                  <span>❤️ 2.3K</span>
                  <span>💬 156</span>
                  <span>🔄 89</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="share-stats">
          <div className="stat-item">
            <div className="stat-icon">📈</div>
            <div className="stat-info">
              <h3>10M+</h3>
              <p>Content Shares</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🌍</div>
            <div className="stat-info">
              <h3>150+</h3>
              <p>Countries Reached</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">👥</div>
            <div className="stat-info">
              <h3>2.5M</h3>
              <p>Active Users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShareSection;
