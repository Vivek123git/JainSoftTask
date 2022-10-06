import React from 'react'
import './Card.css'


const Card = () => {
  return (
    <div>
       <div className='Card'>
            <div className='responsive'>
                <div className="responsiveMax">
                    <div className="gallery">
                        <a target="_blank" href="https://images.unsplash.com/photo-1551782450-a2132b4ba21d">
                            <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d" alt="Cinque Terre" width={1600} height={200} />
                        </a>
                    </div>
                </div>
                <div className="responsiveMin">
                    <div className="gallery">
                        <a target="_blank" href="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e">
                            <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="Cinque Terre" width={600} height={200} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='responsive'>
                <div className="responsiveMin">
                    <div className="gallery">
                        <a target="_blank" href="https://images.unsplash.com/photo-1551782450-a2132b4ba21d">
                            <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d" alt="Cinque Terre" width={1600} height={200} />
                        </a>
                    </div>
                </div>
                <div className="responsiveMax">
                    <div className="gallery">
                        <a target="_blank" href="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e">
                            <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="Cinque Terre" width={600} height={200} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='responsive'>
                <div className="responsiveMax">
                    <div className="gallery">
                        <a target="_blank" href="https://images.unsplash.com/photo-1551782450-a2132b4ba21d">
                            <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d" alt="Cinque Terre" width={1600} height={200} />
                        </a>
                    </div>
                </div>
                <div className="responsiveMin">
                    <div className="gallery">
                        <a target="_blank" href="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e">
                            <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="Cinque Terre" width={600} height={200} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='responsive'>
                <div className="responsiveMin">
                    <div className="gallery">
                        <a target="_blank" href="https://images.unsplash.com/photo-1551782450-a2132b4ba21d">
                            <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d" alt="Cinque Terre" width={1600} height={200} />
                        </a>
                    </div>
                </div>
                <div className="responsiveMax">
                    <div className="gallery">
                        <a target="_blank" href="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e">
                            <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="Cinque Terre" width={600} height={200} />
                        </a>
                    </div>
                </div>
               
            </div>
            {/* <Footer/> */}
        
        </div>
    </div>
  )
}

export default Card


