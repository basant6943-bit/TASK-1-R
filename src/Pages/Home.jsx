import Cards from "../Components/cards";
import Content from "../Components/Content";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Section from "../Components/Section";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
     <Cards/>
     <Section/>
     <Content/>
    </div>
  )
}
