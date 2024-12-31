import React from 'react'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Home = React.lazy(() => import('./components/Createauth'))
const Charts = React.lazy(() => import('./views/charts/Charts'))
const Taskedit = React.lazy(() => import('./views/charts/Taskedit'))
const List = React.lazy(() => import('./views/charts/ProtectList'))
const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/taskedit/:id', name: 'Edit-task', element: Taskedit },
  { path: '/showdata', name: 'Environment', element: List },

]

export default routes
