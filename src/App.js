import './App.css';
import Header from './components/Header/Header';
import Plan from './components/Plan/Plan';
import QandA from './components/QandA/QandA';

function App() {
  return (
    <div className='planner'>
      <Header></Header>
      <Plan></Plan>
      <QandA></QandA>
    </div>
  );
}

export default App;
