import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import { useContext } from 'react';
import { CartContext } from '../../context/Cart';

import { Link } from 'react-router-dom'

import './index.css'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));



const Cart = () => {

    const { itensCart } = useContext(CartContext)

    return (
        <div className="divCart">
            <Link to='/'>
                <IconButton aria-label="cart">
                    <HomeRoundedIcon />
                </IconButton>
            </Link>
            <Link to='/carrinho'>
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={itensCart.length === 0 ? "0" : itensCart.length} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
            </Link>
        </div>
    )
}

export default Cart 