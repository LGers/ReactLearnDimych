//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.jsx'
import NavBar from './Components/NavBar.jsx'
import ProfilePage from './Components/ProfilePage'

const App = () => {
  return (
    <div className='appWrapper'>
      <Header />
      <NavBar />
      <ProfilePage />
    </div >);
}

export default App;
