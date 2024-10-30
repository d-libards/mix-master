import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SingleErrorPage,
} from './pages';

import { loader as landingLoader } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader,
        errorElement: <SingleErrorPage />,
        element: <Landing />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
      },
      {
        path: 'cocktail/:id',
        errorElement: <SingleErrorPage />,
        loader: singleCocktailLoader,
        element: <Cocktail />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
