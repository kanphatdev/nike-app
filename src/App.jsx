
import './App.css'
// component
import { FlexContent, Hero, Sale, Stories } from "./components";
import { heroapi, popularsales, toprateslaes,highlight,sneaker,story } from "./data/data";
function App() {


  return (
    <>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sale endpoint={popularsales} />
        <FlexContent endpoint={highlight} ifExists/>
        <Sale endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story}/>
      </main>
    </>
  )
}

export default App
