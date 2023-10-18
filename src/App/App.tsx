import React, { lazy, Suspense, FC } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { Loading } from '../Components/Loading/Loading';
import Layout from '../Pages/Layout/Layout';

//Static pages
const HomePage = lazy(() => import('../Pages/Home/Home'));
const ProjectPage = lazy(() => import('../Pages/Project/Project'));
const ContactPage = lazy(() => import('../Pages/Contact/Contact'));
const AboutPage = lazy(() => import('../Pages/About/About'));
const SkillPage = lazy(() => import('../Pages/Skill/Skill'));

//error pages
const NotFoundPage = lazy(() => import('../Pages/NotFound/NotFound'))

function App() {
  const sectionArray: { path: string; name: string; icon?: FC; component: FC }[] = [
    {
      path: "/about",
      name: "about",
      component: AboutPage
    },
    {
      path: "/skill",
      name: "skill",
      component: SkillPage
    },
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/project",
      name: "project",
      component: ProjectPage
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPage
    }
  ]

  const routeComponents = sectionArray.map(section => {
    return (
      <Route key={section.name} path={section.path} element={<section.component />} />
    )
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Layout paths={sectionArray}>
          <Suspense fallback={<Loading />}>
            <main>
              <Routes>
                {routeComponents}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
