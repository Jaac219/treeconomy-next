import Allies from "./allies"
import MBlog from "./blog"
import MShrubbery from "./shrubbery"

const Main = ()=>{
  return(
    <>
    <main role="main" id="main-dia">
      <section id="animacion-dias" className="banner cnt-1 animate day">
        <canvas id="space"></canvas>
        <MShrubbery/>
        <MBlog />
        <Allies/>
      </section>
    </main>
    </>
  )
}

export default Main