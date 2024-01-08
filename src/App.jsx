
import Footer from "./components/Footer/Footer";
import StickyFooter from "./components/Footer/StickyFooter";
import Description from './components/description/description'
import MainProduct from "./components/imgcontent/MainProduct.jsx"
import RelatedProducts from "./components/RelatedProducts/RelatedProducts.jsx"
import RecommendedProducts from "./components/RecommendedProducts/RecommendedProducts.jsx"
import NavBar from "./components/Header/NavBar.jsx"
import "./style.css"


function App() {
   const images = ["./img/beanie2.jpg", "./img/beanie3.jpg", "./img/beanie4.jpg", "./img/beanie5.jpg", "./img/beanie6.jpg"]
  return (
    <>
    <NavBar/>
      <div className="bodyclass">
        <MainProduct images={images}/>
        <Description Description={Description}/>
      </div>
      <RelatedProducts/>
      <RecommendedProducts/>
      <Footer />
      <StickyFooter/>
    </>
  )
}

export default App;
