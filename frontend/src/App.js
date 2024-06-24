import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element ={<HomePage />}/>
        <Route path="login" element ={<SignInPage />}/>
        <Route path="register" element ={<SignUpPage />}/>
        <Route path="*" element ={<ErrorPage />}/>
      </Route>
    )
);

function App() {


  return (
    <RouterProvider router={router}/>
  );
}

export default App;
