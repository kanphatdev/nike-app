
import './App.css'
// component
import { FlexContent, Hero, Sale } from "./components";
import { heroapi, popularsales, toprateslaes,highlight,sneaker } from "./data/data";
function App() {


  return (
    <>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sale endpoint={popularsales} />
        <FlexContent endpoint={highlight} ifExists/>
        <Sale endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
      </main>
    </>
  )
}

export default App
