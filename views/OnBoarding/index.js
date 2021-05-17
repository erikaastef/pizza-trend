import styled from 'styled-components'
import { Button } from '../../components/Button'
import Router from 'next/router'


export const OnBoarding = () => {
    return (
        <Container className="wrapper">
            <h1>Welcome To PizzaTrend</h1>
            <img src="/images/pizza.png" />
            <Grid>
                <Button type="basic" onClick={() => Router.push('/order')}>
                    Create New Order
                </Button>
                <Button type="basic" onClick={() => Router.push('/records')}>
                    Go To Dashboard
                </Button>
            </Grid>
        </Container>
    )
}
const Container = styled.div`
    height:100vh;
    padding:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    h1{
        font-size:34px;
        text-transform:capitalize;
        line-height: 1.5;
        letter-spacing: 11px;
        text-align: center;
        margin-bottom:20px;
        color:${({ theme }) => theme.colors.white};
    }
    img{
        height:300px;
        width:300px;
        margin-bottom:20px;
    }
    @media(max-width: ${({ theme }) => theme.device.sm}){
        padding:30px 0px;
    }
    @media(max-width: ${({ theme }) => theme.device.xsm}){
        img{
            width:100%;
            height:40%;  
        }
        h1{
            letter-spacing:normal;
        }
    }
`
const Grid = styled.div`
    width:100%;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:40px;
    @media(max-width: ${({ theme }) => theme.device.sm}){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        gap:20px;  
    }
`

