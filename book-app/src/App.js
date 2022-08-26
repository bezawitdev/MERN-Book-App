import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './shared/Home';
import AddBook from './components/AddBook';
import Books from './components/Book/Books';
import Book from './components/Book/Book'

// import Items from './components/routes/Items';
// import ItemCreate from './components/routes/ItemCreate';
// import Item from './components/routes/Item';
// import ItemEdit from './components/routes/ItemEdit';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <h3>{location.state ? location.state.msg: null }</h3>
      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route path='/Books' element={<Books />} />
        <Route path='/Add-Book' element={<AddBook />} /> 
        <Route path='/Books/:id' element={<Book />} />
        {/* <Route path='/Books/:id/edit' element={<ItemEdit />} />  */}

      </Routes>

    </div>
  );
}


export default App;