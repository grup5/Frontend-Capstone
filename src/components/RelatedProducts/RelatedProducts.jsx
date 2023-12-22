import {useState,useEffect} from 'react'
import axios from 'axios'
export default function RelatedProducts(){

  let apiUrl;
  const [product,setProduct] = useState([])
  if (process.env.NODE_ENV === 'production') {
    // Use the production API URL
    apiUrl = '/api/images/related';
  } else {
    // Use the development API URL
    apiUrl = 'http://localhost:3000/api/images/related';
  }
  useEffect(()=>{
    async function getProducts(){
      const res = await axios.get(apiUrl)
      setProduct(res.data)
      await console.log(product)
    }
    getProducts()
  },[])

  return (
    <div>

    </div>
    )
}

function CarouselImage(){

}