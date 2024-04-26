import ImageShow from './Cambio'

function ImageList ({texts}){
    const renderImage = texts.map((texts) => {
        return <ImageShow key={texts.id} texts={texts} />
    })
    
    return(
    <div>
        <h1>{renderImage}</h1> 
    </div>
   )
}
export default ImageList