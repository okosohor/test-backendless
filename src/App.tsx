import { lazy, Suspense } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import { Header } from './components/header';
// import { Table } from './components/table';
import tabs from './data';

const Table = lazy(() => import('./components/table'))

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/tabs/${tabs.sort((tab1, tab2) => tab1.order - tab2.order)[0].id}`} />}>

      </Route>
      <Route path="/tabs" element={<Header />}>
          <Route path=":id" element={<Suspense fallback={<p>Loading...</p>}><Table /></Suspense>} />
        </Route>
    </Routes>
  );
};

export default App;
