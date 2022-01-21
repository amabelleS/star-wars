import PopulationTable from './components/population-table/PopulationTable';
import Emoji from './components/emoji/Emoji';

import './App.css';

function App() {
  return (
    <>
      <h1 className="header center">
        <Emoji symbol="🚀" label="rocket" />
        <Emoji symbol="👾" label="space-invader" />
        Star Wars API
        <Emoji symbol="👽" label="alien" />
        <Emoji symbol="🚀" label="rocket" />
      </h1>
      <PopulationTable />
    </>
  );
}

export default App;
