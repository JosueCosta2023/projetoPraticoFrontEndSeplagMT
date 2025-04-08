import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFaund';


const Home = lazy(() => import('./pages/Home'));
const Detalhes = lazy(() => import('./pages/Detalhes'));

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/detalhes/:id" element={<Detalhes />} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

