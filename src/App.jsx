import './App.css';
import Clients from './pages/Clients/index';
import { AppProvider } from './context'; 

function App() {
  return (
    <AppProvider>
      <Clients />
    </AppProvider>
  );
}

export default App;
