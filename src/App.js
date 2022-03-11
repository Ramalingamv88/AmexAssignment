import Home from './components/Home/Home';
import './App.css';
import Header from './components/Header/Header';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Header />
        <Home />
      </DndProvider>
    </div>
  );
}

export default App;
