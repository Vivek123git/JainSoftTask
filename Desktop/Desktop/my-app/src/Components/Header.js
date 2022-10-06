import React from 'react'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Body from './Body';
import './Header.css';



const Header = () => {
    return (
        <>
            <div className='Header'>
                <div className='Navbar'>
                    <div className='Phone'>

                        <LocalPhoneOutlinedIcon style={{ color: 'white', fontSize: 'x-large' }} />
                        <p style={{ margin: '10px' }}>Sell on Hovee</p>
                    </div>
                    <div className='Icons'>
                        <LanguageOutlinedIcon style={{ color: 'white', fontSize: 'x-large', marginRight: '10px' }} />
                        <LocalShippingOutlinedIcon style={{ color: 'white', fontSize: 'x-large', marginRight: '10px' }} />
                        <FavoriteBorderOutlinedIcon style={{ color: 'white', fontSize: 'x-large', marginRight: '10px' }} />
                        <ShoppingCartOutlinedIcon style={{ color: 'white', fontSize: 'x-large', marginRight: '10px' }} />
                        <NotificationsNoneOutlinedIcon style={{ color: 'white', fontSize: 'x-large', marginRight: '10px' }} />
                        <Person2OutlinedIcon style={{ color: 'white', fontSize: 'x-large' }} />
                    </div>
                </div>
                <div className='Navbar2'>

                    <p className='Para'>Collection & Art</p>
                    <p className='Para'>Fashion</p>
                    <p className='Para'>Home & Garden</p>
                    <p className='Para'>Sporting Goods</p>
                    <p >Health and Beauty</p>

                </div>
                <div className='SearchBox'>
                    <div className='InsideSearch'>
                        <div className='Categories'>
                            <p>Categories</p>
                            <KeyboardArrowDownOutlinedIcon style={{ color: 'white', fontSize: 'x-large', marginBottom: '12px', marginRight: '10px' }} />
                            <p>Search for Goodies</p>
                        </div>
                        <div className='Categories2'>
                            <p>Worldwide</p>
                            <KeyboardArrowDownOutlinedIcon style={{ color: 'white', fontSize: 'x-large', marginBottom: '12px', marginRight: '10px' }} />
                            <p>All Condition</p>
                            <KeyboardArrowDownOutlinedIcon style={{ color: 'white', fontSize: 'x-large', marginBottom: '12px', marginRight: '10px' }} />
                            <p>All Categories</p>
                            <KeyboardArrowDownOutlinedIcon style={{ color: 'white', fontSize: 'x-large', marginBottom: '12px', marginRight: '10px' }} />
                            <SearchOutlinedIcon style={{ color: 'white', fontSize: 'x-large', marginBottom: '12px', marginRight: '10px' }} />
                        </div>
                    </div>

                </div>
                <Body/>
            </div>
        </>
    )
}

export default Header
