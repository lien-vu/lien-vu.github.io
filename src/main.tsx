import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './styles.css'
import AppLayout from './ui/AppLayout'
import HomePage from './pages/HomePage'
import ResearchPage from './pages/ResearchPage'
import ExperiencePage from './pages/ExperiencePage'
import AwardsPage from './pages/AwardsPage'
import TeachingPage from './pages/TeachingPage'
import ServicePage from './pages/ServicePage'
import ConsultingPage from './pages/ConsultingPage'
import ContactPage from './pages/ContactPage'
import CvPage from './pages/CvPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'research', element: <ResearchPage /> },
      { path: 'publications', element: <Navigate to="/research" replace /> },
      { path: 'presentations', element: <Navigate to="/research" replace /> },
      { path: 'experience', element: <ExperiencePage /> },
      { path: 'awards', element: <AwardsPage /> },
      { path: 'teaching', element: <TeachingPage /> },
      { path: 'service', element: <ServicePage /> },
      { path: 'consulting', element: <ConsultingPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'cv', element: <CvPage /> },
    ],
  },
], { basename: import.meta.env.BASE_URL })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


