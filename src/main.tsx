import { createRoot } from 'react-dom/client'
import ThemeWrapper from './ThemeWrapper.tsx'
import './index.css'
import App from './App.tsx'; // Import the App component

createRoot(document.getElementById("root")!).render(<ThemeWrapper />);
