// import logo from './logo.svg';
import './App.css';
import RMButton from './components/Button';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   // {
//   //   path: "contacts/:contactId",
//   //   element: <Contact />,
//   // },
// ]);

function App() {
  return (
    <div className="App">
      <RMButton title="Frontend" />
      <RMButton title="Backend" />
      <RMButton title="Middleware" />
      <RMButton title="Smart Contract" />
      <RMButton title="Git versioning" />
      <RMButton title="Object Oriented Programming" />
    </div>
  );
}

export default App;
