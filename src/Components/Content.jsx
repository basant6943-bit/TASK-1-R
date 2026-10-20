import "./Content.css";
import Img from "../assets/Image.jpeg"
export default function Content() {
  return (
    <div className = "style"> 
      <img src= {Img} alt="Img"/>
    <div >
    <h1>24/7/365 Support</h1>
    <p>Sample text. Click to select the Text Element.
       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident,
         sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <button>Get Started</button>
    </div>
    </div>
  )
}
