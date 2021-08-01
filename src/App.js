import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './style.css';


const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting = "Bienvenido a nuestra Tienda"/>
    </div>
  );
}

export default App;
