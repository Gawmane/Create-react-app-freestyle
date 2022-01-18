
import './App.scss';
import { Header } from './components/partials/Header/Header'
import { Main } from './components/partials/Main/Main'
import { Nav } from './components/partials/Nav/Nav'
import { NavArray } from './components/partials/Nav/Nav'
import { Footer } from './components/partials/Footer/Footer'





function App() {
  return (
    <div className="wrapper">
      <Header name="Ethical blue bottle"/>
     <Nav data={NavArray}/>
      <Main />
      <Footer data={NavArray} />
    </div>
  );
}
export default App;