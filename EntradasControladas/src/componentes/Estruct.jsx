import { useState } from "react"

function SearchBar({ onSubmit }){
        const [term, setTerm] = useState('')

        const handleFromSubmit = (event) => {
            event.preventDefault()
            console.log('Se escribe el texto')
            onSubmit(term)
        }

        const handleChange = (event) => {
            console.log(event.target.value)
            setTerm(event.target.value)
        }
        
       

        return(
            <div className="search-bar">
                <h1>Texto cambiante </h1>
                <h3>Su Texto:</h3>
                <form onSubmit={handleFromSubmit}>
                 
                 <input onChange={handleChange} value={term}/>
                 
                 </form>
                 {term}
            </div>
        )
}

export default SearchBar