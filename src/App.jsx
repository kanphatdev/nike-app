
import './App.css'
// component
import { Cart, FlexContent, Footer, Hero, Navbar, Sale, Stories } from "./components";
import { heroapi, popularsales, toprateslaes,highlight,sneaker,story,footerAPI } from "./data/data";
function App() {


  return (
    <>
    <Navbar/>
    <Cart/>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sale endpoint={popularsales} />
        <FlexContent endpoint={highlight} ifExists/>
        <Sale endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story}/>
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  )
}

export default App
