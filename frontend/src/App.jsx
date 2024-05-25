import { useEffect } from 'react'
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
function App() {

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkScheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  return (
    <>
      {/* home */}
      <section>
        <Home />
      </section>
      {/* skills */}
      <section>
        <Skills />
      </section>
      {/* Projects */}
      <section>
        <Projects />
      </section>
      {/* about me */}
      <section>
        <AboutMe />
      </section>
    </>
  )
}

export default App
