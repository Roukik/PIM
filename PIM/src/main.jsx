import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Menu from './components/Menu.jsx';
import Favories from './Pages/Favories.jsx';
import Notifications from './Pages/Notifications.jsx';
import Profil from './Pages/Profil.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/",
    element: <Menu/>
  },
  {
    path: "/",
    element: <Notifications/>,
  },
  {
    path: "/",
    element: <Profil/>,
  },
  {
    path: "/",
    element: <Favories/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App></App>
  </React.StrictMode>,
)
