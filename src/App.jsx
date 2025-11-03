import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { paths } from './utils/Constants';

function App() {

  const router = createBrowserRouter([
    ...Object.values(paths?.route).map((e) => {
      return {
        path: e?.path,
        element: e?.element
      }
    }),
  ]
  );


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
