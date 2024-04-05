import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter,RouterProvider, Routes,Route } from 'react-router-dom'
import Question from './Question.jsx'
import Answer from './Answer.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
  
//     children: [
//       {
//         path: "/question",
//         element: <Question />,
//       },
//     ],
//   },
// ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/question" element={<Question/>} />
    <Route path="/answer" element={<Answer/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
