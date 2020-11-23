import NavBar from './Components/header/NavBar'; 
import SideBar from './Components/sidebar/SideBar'; 
import DocEditor from './Components/editor/DocEditor';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <DocEditor />
      <SideBar />
    </div>
  );
}

export default App;
