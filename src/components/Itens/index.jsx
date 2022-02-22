import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import './index.css'
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/Cart';

const Itens = () => {

    const [produtos, setProdutos] = useState([{
        id: 1,
        nome: "Lanche",
        descricao: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        foto: "https://mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg"
    }, {
        id: 2,
        nome: "Lanche 2",
        descricao: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        foto: "https://mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg"
    }]) 

    const { itensCart, setItensCart } = useContext(CartContext)

    function addCart(produto){
        const itensRepetidos = itensCart.filter(item => item.id === produto.id) 
        if(itensRepetidos.length === 0){
            const newList = [...itensCart, produto]
            setItensCart(newList)
        }else{
            alert("Este produto já está no carrinho")
        }
    }

    return (
        <Container maxWidth="lg">
            <div className="divItens">
                <Grid container spacing={2} direction="row"
                    justifyContent="center"
                    alignItems="center">
                    {produtos.map(produto => (
                        <Grid item md={4} key={produto.id}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={produto.foto}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {produto.nome}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {produto.descricao}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={() => addCart(produto)}>Adicionar ao Carrinho</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Container>

    )
}

export default Itens