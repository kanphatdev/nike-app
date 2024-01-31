
import './App.css'
// component
import { Hero, Sale } from "./components";
import { heroapi, popularsales, toprateslaes } from "./data/data";
function App() {


  return (
    <>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sale endpoint={popularsales} />
        <Sale endpoint={toprateslaes} />
      </main>
    </>
  )
}

export default App
