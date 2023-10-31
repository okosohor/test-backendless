import {Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import { Header } from './components/header';
import { Table } from './components/table';
import tabs from './data';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/tabs/${tabs.sort((tab1, tab2) => tab1.order - tab2.order)[0].id}`} />}>

      </Route>
      <Route path="/tabs" element={<Header />}>
          <Route path=":id" element={<Table />} />
        </Route>
    </Routes>
  );
};

export default App;
