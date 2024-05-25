import { useEffect } from 'react'

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
      </section>
      {/* skills */}
      <section>
      </section>
      {/* Projects */}
      <section>
      </section>
      {/* about me */}
      <section>
      </section>
    </>
  )
}

export default App
