import { useState } from 'react';
import './App.css';
import Card from './components/card/Card';
import Search from './components/search/Search';

function App() {

  const [books, setBooks] = useState([]);

  function renderBooks(response) {
    setBooks(response.docs);
  }

  return (
    <div className="App">
      <Search sendBooks={renderBooks} />
      <div>
        {[...books].map(book => book.title ? <Card bookData={book} /> : null)}
      </div>
    </div>
  );
}

export default App;
