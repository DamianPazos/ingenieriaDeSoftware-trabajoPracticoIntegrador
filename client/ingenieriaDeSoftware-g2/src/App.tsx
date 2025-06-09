import {Route, Routes} from 'react-router-dom'; // Importing routing components
import './App.css'; // Import the CSS file for styling
import HomePage from './pages/HomePage'; // Importing the HomePage component
import LoginPage from './pages/LoginPage'; // Importing the LoginPage component

function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} /> 
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </>
  );
}

export default App;