import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './components/pages/login.jsx';
import RegisterPage from './components/pages/register.jsx';
import UserPage from './components/pages/user.jsx';
import '/src/components/style/global.css'
import TodoApp from './components/Todo/TodoApp.jsx';
import BookPage from './components/pages/book.jsx';
import ErrorPage from './components/pages/error.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />
      },
      {
        path: "/users",
        element: <UserPage />
      },
      {
        path: "/books",
        element: <BookPage />
      },
      {
        path: "/book",
        element: <Navigate to="/books" replace />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
