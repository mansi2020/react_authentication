import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp'
import AuthProvider from './Context/AuthProvider';
import firebase from './firebase'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <SignUp/>
      </AuthProvider>
      
    </div>
  );
}

export default App;
