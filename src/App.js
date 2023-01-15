import styled from 'styled-components';
import Header from './componets/Header/Header';
import Main from './componets/Main/Main';
import Footer from './componets/Footer/Footer';
import Button from './componets/Button/Button';
import List from './componets/List/List';

import movieList from './data/movie-list.json';

function App() {
  return (
    <>
      <Header />
      <List title="Movie List" items={movieList} />
      <Button text="Push" type="button" active={true} />
      <Main />
      <Button text="click me" />
      <Footer />
    </>
  );
}

export default App;
