import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useThemeStore } from './store/themeStore';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import NowPlaying from './components/NowPlaying';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Support from './pages/Support';
import Prayer from './pages/Prayer';

function App() {
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-gray-100 dark:bg-gray-900 transition-colors duration-200`}>
        <Toaster position="top-right" />
        <Header />
        <NowPlaying />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/prayer" element={<Prayer />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;