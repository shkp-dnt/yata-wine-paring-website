import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FoodListPage from './pages/FoodListPage';
import OccasionListPage from './pages/OccasionListPage';
import FoodDetailPage from './pages/FoodDetailPage';
import OccasionDetailPage from './pages/OccasionDetailPage';
import WineDetailPage from './pages/WineDetailPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/food" element={<FoodListPage />} />
            <Route path="/food/:id" element={<FoodDetailPage />} />
            <Route path="/occasion" element={<OccasionListPage />} />
            <Route path="/occasion/:id" element={<OccasionDetailPage />} />
            <Route path="/wine/:id" element={<WineDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}