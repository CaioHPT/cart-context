import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { useContext } from 'react';
import { CartContext } from '../context/Cart';

const ItensCarrinho = () => {

    const { itensCart, setItensCart } = useContext(CartContext)

    function removerItem(produto){
        const newList = itensCart.filter((item) => item.id !== produto.id)
        setItensCart(newList)
    }


    return(
        <Container maxWidth="lg">
            <div className="divItens">
                <h1>Itens do Carrinho</h1>
                <Grid container spacing={2} direction="row"
                    justifyContent="center"
                    alignItems="center">
                    {itensCart.map(produto => (
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
                                    <Button size="small" onClick={() => removerItem(produto)}>Remover do Carrinho</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Container>
    )
}

export default ItensCarrinho