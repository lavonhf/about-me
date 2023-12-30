import Hero from './component/hero'
import './App.css'
import { Contact } from './component/Contact'

function App() {

  return (
    <>
      <div className='bg-slate-800'>
        <Hero/>
        <Contact/>
      </div>
    </>
  )
}

export default App
