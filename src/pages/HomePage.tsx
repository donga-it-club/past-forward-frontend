import React from 'react';
import PageLayout from '../components/layouts/PageLayout';
import NavBar from '../components/layouts/PageNavBar';

const HomePage: React.FC = () => {
  return (
    <div>
      <NavBar>
        <div>This Route is HomePage</div>
      </NavBar>
    </div>
  );
};

export default HomePage;
