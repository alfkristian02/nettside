// import Header from './components/header.tsx'
import frame1 from './assets/Frame1.png'
import frame2 from './assets/Frame2.png'

function App() {
  return (
    <>
      {/* <Header /> */}
      <div className="mt-24">
        <h2 className="text-4xl text-center">Om siden</h2>
        <br />
        <p className="text-center">Foreløpig plan for siden:</p>
        <img src={frame1} alt="" className="h-72 m-auto border-black border-2 rounded-sm"/>
        <br />
        <img src={frame2} alt="" className="h-72 m-auto border-black border-2 rounded-sm"/> 
        
      </div>
    </>
  )
}

export default App
