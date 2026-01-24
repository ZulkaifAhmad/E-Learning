import "../App.css"
import Main from "./comps/main.jsx"
import Success from "./comps/Success.jsx"
import Tools from "./comps/tools.jsx"


function Home() {
  return (
    <>
      <div className="Home">
      <Main />
      <Success />
      <Tools />

      </div>
    </>
  )
}

export default Home