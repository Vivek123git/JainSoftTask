import React from 'react'
import './Profile.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BalanceIcon from '@mui/icons-material/Balance';

const Cart = () => {
  return (
    <><div className='Top'>
      <div className='FirstCart'>
        <div className='Cart'>
          <div className='firstLine'>
            <p>Electronics</p>
            <div className='Ship'><ShoppingCartIcon /></div>
          </div>
          <div className='CartImg'>
            <img src="https://media.gettyimages.com/photos/apple-watch-sport-picture-id481616102?s=612x612" alt="Smartwatch" />
          </div>
          <div className='Para'>
            <p>Apple watch series 3 38mm smartphone</p>
          </div>
          <p><button><FavoriteBorderOutlinedIcon/><BalanceIcon/></button></p>
          
        </div>

      </div>
      <div className='FirstCart'>
        <div className='Cart'>
          <div className='firstLine'>
            <p>Electronics</p>
            <div className='Ship'><ShoppingCartIcon /></div>
          </div>
          <div className='CartImg'>
            <img src="https://media.gettyimages.com/photos/apple-watch-sport-picture-id481616102?s=612x612" alt="Smartwatch" />
          </div>
          <div className='Para'>
            <p>Apple watch series 3 38mm smartphone</p>
          </div>
          <p><button><FavoriteBorderOutlinedIcon/><BalanceIcon/></button></p>
        </div>
      </div>
      <div className='FirstCart'>
        <div className='Cart'>
          <div className='firstLine'>
            <p>Electronics</p>
            <div className='Ship'><ShoppingCartIcon /></div>
          </div>
          <div className='CartImg'>
            <img src="https://media.gettyimages.com/photos/apple-watch-sport-picture-id481616102?s=612x612" alt="Smartwatch" />
          </div>
          <div className='Para'>
            <p>Apple watch series 3 38mm smartphone</p>
          </div>
          <p><button><FavoriteBorderOutlinedIcon/><BalanceIcon/></button></p>
        </div>
      </div>
      <div className='FirstCart'>
        <div className='Cart'>
          <div className='firstLine'>
            <p>Electronics</p>
            <div className='Ship'><ShoppingCartIcon /></div>
          </div>
          <div className='CartImg'>
            <img src="https://media.gettyimages.com/photos/apple-watch-sport-picture-id481616102?s=612x612" alt="Smartwatch" />
          </div>
          <div className='Para'>
            <p>Apple watch series 3 38mm smartphone</p>
          </div>
          <p><button><FavoriteBorderOutlinedIcon/><BalanceIcon/></button></p>
        </div>
      </div>
    </div>
    
    <h1 className='Popular'>Popular Categories</h1>
    </>
  )
}

export default Cart
