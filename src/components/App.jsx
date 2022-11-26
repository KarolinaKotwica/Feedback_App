import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';

function allNotes(nots) {
  return (
    <Note 
      key={nots.key}
      title={nots.title}
      content={nots.content}
    />
  )
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(allNotes)}
      <Footer />
    </div>
  );
}

export default App;