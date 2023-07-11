
import ReactDOM from 'react-dom/client'
import {createBrowserRouter  ,RouterProvider  } from 'react-router-dom'
import start from './micro'
import routes from './routes'
start() //启动qiankun
const router = createBrowserRouter(routes)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
