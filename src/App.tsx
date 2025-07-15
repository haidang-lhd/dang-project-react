import './App.css'
import './i18n';
import HomePage from './components/HomePage';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <HomePage />
      </div>
    </div>
  );
};

export default App
