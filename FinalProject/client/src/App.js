import { BrowserRouter } from 'react-router-dom';
import 'materialize-css'
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';


const App = () => {
    return (
      <BrowserRouter>
        <NavBar/>
        <AppRouter/>
      </BrowserRouter>
    )
}


export default App;
