import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CheckInPage from '../pages/CheckInPage';
import CheckOutPage from '../pages/CheckOutPage';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/check-in' element={<CheckInPage />} />
        <Route path='/check-out' element={<CheckOutPage />} />
      </Routes>
    </Router>
  );
}
