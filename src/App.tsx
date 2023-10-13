import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Project from './Pages/Project/Project';
import Contact from './Pages/Contact/Contact';

function App() {
  const sectionArray: { id: number; path: string; name: string; element: JSX.Element }[] = [
    {
      id: 0,
      path: "/",
      name: "home",
      element: <Home />
    },
    {
      id: 1,
      path: "/project",
      name: "project",
      element: <Project />
    },
    {
      id: 2,
      path: "/contact",
      name: "contact",
      element: <Contact />
    }
  ]

  const routeComponents = sectionArray.map(section => {
    return (
      <Route key={section.id} path={section.path} element={section.element} />
    )
  })
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar links={sectionArray} />
        <main>
          <Routes>
            {routeComponents}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
