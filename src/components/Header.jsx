function Header({ activeSection, setActiveSection }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'explore', label: 'Discover', icon: '🔍' },
    { id: 'share', label: 'Share', icon: '📤' },
    { id: 'create', label: 'Create', icon: '✨' }
  ];

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🌟</span>
          <span className="logo-text gradient-text">CreativeHub</span>
        </div>
        
        <nav className="nav-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
