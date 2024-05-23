import 'regenerator-runtime/runtime';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Compo/Siderbar/Sidebar';
import Main from './Compo/Main/Main';
import Plink from './Compo/PLink/Plink';
import './index.css';
import { ThemeProvider } from './Context/ThemeContext';

const App = () => {
  const [showPublicLinkContent, setShowPublicLinkContent] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <Sidebar setShowPublicLinkContent={setShowPublicLinkContent} />
        <Routes>
          <Route path="/" element={<Main showPublicLinkContent={showPublicLinkContent} setShowPublicLinkContent={setShowPublicLinkContent} />} />
          <Route path="/public-link" element={<Plink setShowPublicLinkContent={setShowPublicLinkContent} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
