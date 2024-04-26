import { useState } from 'react'
import SearchBar from './componentes/Estruct'
import ImageList from './componentes/TextDev'
import searchImage from './rempl'
import './App.css'


function App() {
  const [texts, setImages] = useState([])

  const handleSubmit = async(term) => {
    console.log('ustate esta buscando con: ', term)
    const result = await searchImage(term)
    console.log('coco')
    console.log(result)
    setImages(result)
  }

  return (
    <div>

       <SearchBar onSubmit={handleSubmit} />
       <ImageList texts={texts} />
    </div>

  )
}
export default App
