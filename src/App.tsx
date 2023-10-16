import React, { lazy, Suspense, FC } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import { Loading } from './Components/Loading/Loading';

//Static pages
const HomePage = lazy(() => import('./Pages/Home/Home'));
const ProjectPage = lazy(() => import('./Pages/Project/Project'));
const ContactPage = lazy(() => import('./Pages/Contact/Contact'));

//error pages
const NotFoundPage = lazy(() => import('./Pages/NotFound/NotFound'))

function App() {
  const sectionArray: { id: number; path: string; name: string; component: FC }[] = [
    {
      id: 0,
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      id: 1,
      path: "/project",
      name: "project",
      component: ProjectPage
    },
    {
      id: 2,
      path: "/contact",
      name: "contact",
      component: ContactPage
    }
  ]

  const routeComponents = sectionArray.map(section => {
    return (
      <Route key={section.id} path={section.path} element={<section.component />} />
    )
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <NavBar links={sectionArray} />
          <main>
            <Routes>
              {routeComponents}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
