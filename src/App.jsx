import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Labs from './components/Labs'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Projects />
        <Labs />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
