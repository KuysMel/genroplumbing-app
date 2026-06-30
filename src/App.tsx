import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { useTheme } from './hooks/useTheme';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import LocationDetail from './pages/LocationDetail';
import { locationDetails } from './data/locations';

export default function App() {
  const { theme } = useTheme();

  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {locationDetails.map((location) => (
        <Route
          key={location.slug}
          path={`/${location.slug}`}
          element={<LocationDetail slug={location.slug} />}
        />
      ))}
      <Route path="/:slug" element={<ServiceDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
