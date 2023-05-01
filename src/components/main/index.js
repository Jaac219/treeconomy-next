import DayContext from "@/src/context/dayContext";
import Allies from "./allies"
import MBlog from "./blog"
import MShrubbery from "./shrubbery"
import { useContext } from "react";

const Main = ()=>{
  const { isDay, setIsDay } = useContext(DayContext);

  setTimeout(()=>{
    setIsDay(!isDay)
  }, 12000)

  return(
    <>
    <main role="main" id="main-dia">
      <section id="animacion-dias" className={`banner animate cnt-1 ${isDay ? 'day' : 'night'}`}>
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