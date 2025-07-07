import { useState } from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import ExploreSection from './components/ExploreSection';
import ShareSection from './components/ShareSection';
import CreateSection from './components/CreateSection';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="app">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        <HomeSection id="home" isActive={activeSection === 'home'} />
        <ExploreSection id="explore" isActive={activeSection === 'explore'} />
        <ShareSection id="share" isActive={activeSection === 'share'} />
        <CreateSection id="create" isActive={activeSection === 'create'} />
      </main>
    </div>
  );
}

export default App;
