import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';


const Home = lazy(() => import('./pages/Home'));
const Detalhes = lazy(() => import('./pages/Detalhes'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/detalhes" element={<Detalhes />} />
    </Routes>
  );
}

