import React from 'react';
import Navigation from './components/Navigation';
import Equestrian from './components/personas/Equestrian';

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Equestrian />
      </main>
    </>
  );
}