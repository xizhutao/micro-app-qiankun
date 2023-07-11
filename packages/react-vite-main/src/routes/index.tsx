import App from '../App.tsx'
import ErrorPage from '../pages/ErrorPage';
import MicroApp from '../pages/MicroApp/index.tsx'
import DashBoard from '../pages/DashBoard/index.tsx';
import {Navigate} from 'react-router-dom'
// const resolveRouteData = (routes: any) => {
//   const result: any = []
//   routes.map((item: any) => {
//     let routes = []
//     if(item?.children?.length > 0){
//       routes =  resolveRouteData(item.children)
//     }
//     result.push({
//       name: item.name,
//       path: item.path,
//       component: item.element,
//       routes: routes?.length > 0 ? routes : null
//     })
//   })
//   return result
// }
const routes = [
  {
    path: '/',
    element: <Navigate to='/dashboard'/>
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <DashBoard />,
      },
      {
        path: "vue-child/*",
        element: <MicroApp />,
      },
      {
        path: "react-child/*",
        element: <MicroApp />,
      },
    ],
  },]
  export default routes