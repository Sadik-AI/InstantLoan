import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@/components/Layout.tsx';
import LoadingScreen from '@/components/LoadingScreen.tsx';
import HomePage from '@/pages/HomePage.tsx';
import ServicesPage from '@/pages/ServicesPage.tsx';
import ProductsPage from '@/pages/ProductsPage.tsx';
import BookingPage from '@/pages/BookingPage.tsx';
import ContactPage from '@/pages/ContactPage.tsx';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Keep the premium loading animation visible just long enough to feel intentional.
    const loaderTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1100);

    return () => window.clearTimeout(loaderTimer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
