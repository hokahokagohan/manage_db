import React, {useState} from 'react';
import Form from './Form';
import Header from './Header';
import Results from './Results';
import './App.css';

function App() {
  const [query, setQuery] = useState<string>('');
  
  const getResults = (e: React.FormEvent<HTMLFormElement>) => {
    console.log({ query })
  }

  return (
    <>
    <Header/>
      <div className="App">
        <Form setQuery={setQuery} getResults={getResults} query={query} />
        <Results/>
    </div>
    </>
  );
};

export default App;
