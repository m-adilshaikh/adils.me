import Carousel from 'nuka-carousel'

const renderImage = (url) => (
  <div>
    <img src={url} alt="" />
  </div>
  )



const Preview = ({ screens }) => {

  if(screens.length > 1) {
    return (
    <div className="preview">
      <Carousel heightMode="current">
        {
          screens.map(screen => (
            renderImage(screen.img_url)
          ))
        }
      </Carousel>
    </div>
    ) 
  }

  else {
    return (
    <div className="preview">
      {renderImage(screens[0].img_url)}
    </div>
    )
  }
  
}

export default Preview