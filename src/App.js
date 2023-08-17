import './App.css';
import BooksList from './components/BooksList';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';


function App() {

  const name = "Jay";

  return (

    <div>
      <BrowserRouter>

        <NavLink style={{marginRight: 10}} to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>

        <Routes>
          <Route path='/' element={<HomePage userName={name} />}></Route>
          <Route path='/books' element={<BooksList />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
