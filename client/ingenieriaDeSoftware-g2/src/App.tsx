import {/*BrowserRouter,*/ Route, /*Router,*/ Routes} from 'react-router-dom'; // Importing routing components
import './App.css'; // Import the CSS file for styling
import HomePage from './pages/HomePage'; // Importing the HomePage component
import LoginPage from './pages/LoginPage'; // Importing the LoginPage component
import MenuPage from './pages/MenuPage';
import ClientNavbar from './components/ClientNavbar';

function App () {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/menu" element={
          <>
          <ClientNavbar />
          <MenuPage />
          </>
          } /> 

        <Route path="/login" element={<LoginPage/>} />
      </Routes>
  );
}

export default App;