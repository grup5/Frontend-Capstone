// import Footer from "./components/Footer";
// import StickyFooter from "./components/StickyFooter";
import MainProduct from "./components/imgcontent/MainProduct.jsx"

function App() {
  const images = ["./img/beanie2.jpg", "./img/beanie3.jpg", "./img/beanie4.jpg", "./img/beanie5.jpg", "./img/beanie6.jpg"]
  
  return (
    <>
      <MainProduct images={images}/>
      {/* <Footer />
      <StickyFooter /> */}
    </>
  )
}

export default App
