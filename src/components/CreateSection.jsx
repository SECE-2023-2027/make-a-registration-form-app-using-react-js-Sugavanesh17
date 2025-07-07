import image from "./download.jpeg"

function CreateSection({ isActive }) {
  const createTools = [
    {
      icon: "🎨",
      title: "Visual Editor",
      description: "Create stunning graphics and designs with our intuitive editor"
    },
    {
      icon: "📝",
      title: "Content Writer",
      description: "Write compelling stories and articles with AI assistance"
    },
    {
      icon: "🎵",
      title: "Audio Studio",
      description: "Record and edit audio content with professional tools"
    },
    {
      icon: "📱",
      title: "Mobile Creator",
      description: "Create on-the-go with our mobile-optimized tools"
    }
  ];

  const creationSteps = [
    {
      number: "01",
      title: "Choose Your Medium",
      description: "Select from various creative formats and tools"
    },
    {
      number: "02",
      title: "Express Yourself",
      description: "Use our intuitive tools to bring your ideas to life"
    },
    {
      number: "03",
      title: "Polish & Perfect",
      description: "Refine your creation with advanced editing features"
    },
    {
      number: "04",
      title: "Share & Connect",
      description: "Publish your work and connect with your audience"
    }
  ];

  return (
    <section id="create" className={`section ${isActive ? 'active' : ''}`}>
      <div className="create-container">
        <div className="create-header">
          <h1 className="gradient-text">Create Something Amazing</h1>
          <p className="create-subtitle">
            Turn your imagination into reality with our powerful creation tools. 
            From visual arts to written content, bring your ideas to life.
          </p>
        </div>

        <div className="create-tools">
          <h2>Creation Tools</h2>
          <div className="tools-grid">
            {createTools.map((tool, index) => (
              <div key={index} className="tool-card glass-card">
                <div className="tool-icon">{tool.icon}</div>
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
                <button className="btn-secondary">Try Now</button>
              </div>
            ))}
          </div>
        </div>

        <div className="creation-process">
          <div className="process-content">
            <div className="process-info">
              <h2>How It Works</h2>
              <div className="steps">
                {creationSteps.map((step, index) => (
                  <div key={index} className="step">
                    <div className="step-number">{step.number}</div>
                    <div className="step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn-primary">Start Creating</button>
            </div>
            <div className="process-visual">
              <div className="creation-preview glass-card">
                <div className="preview-header">
                  <h3>Live Preview</h3>
                  <span className="status">● Live</span>
                </div>
                <div className="preview-content">
                  <img src={image} alt="Creation Preview" />
                  <div className="preview-overlay">
                    <h4>Your Creation</h4>
                    <p>See your work come to life in real-time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="create-cta">
          <div className="cta-content glass-card">
            <h2>Ready to Create?</h2>
            <p>Join thousands of creators who are already building amazing content</p>
            <div className="cta-buttons">
              <button className="btn-primary">Get Started Free</button>
              <button className="btn-secondary">View Examples</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateSection;
