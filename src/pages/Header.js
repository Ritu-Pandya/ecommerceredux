import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Box, AppBar, Toolbar, Badge } from '@mui/material'
import { Search, ShoppingCart } from '@mui/icons-material'
import Searchbar from '../components/Searchbar'
import logo from '../image/shopkart.png'

const Header = () => {
  const cartcounter = useSelector((state) => state.cart)
  //console.log(cartcounter.length);
  return (
    <>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Link to="/" style={{
                textDecoration: 'none',
                color: 'inherit',
                fontSize: 25,
                fontWeight: 700,
              }}>
                <img src={logo} alt="Logo" style={{ marginRight: '10px', height: '50px' }} />
              </Link>
            </Box>
            <Searchbar/>


            <Link to="/cart"
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}>
              <Badge badgeContent={cartcounter.length} color="success">
                <ShoppingCart />
              </Badge>
            </Link>

          </Toolbar>

        </AppBar>
      </Box>

    </>
  )
}

export default Header