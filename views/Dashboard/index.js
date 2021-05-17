import styled from 'styled-components'
import Box from '../../components/Box'
import { Button } from '../../components/Button'
import { Item } from '../../components/DashboardItem'
import Router from 'next/router'

export const Dashboard = () => {
    return (
        <Container className="wrapper">
            <Header>
                <Button type="basic" className="redirectBtn" type="basic" onClick={() => Router.push('/order')}>CREATE NEW ORDER</Button>
                <span>
                    SELLS HISTORY
                    <img src="/images/pizza.png" />
                </span>
            </Header>
            <Box scroll>
                <Item name="Erika" phone="1166074332" pizzaName="Special" price="$20000" />
                <Item name="Erika" phone="1166074332" pizzaName="Special" price="$20000" />
                <Item name="Erika" phone="1166074332" pizzaName="Special" price="$20000" />
                <Item name="Erika" phone="1166074332" pizzaName="Special" price="$20000" />
                <Item name="Erika" phone="1166074332" pizzaName="Special" price="$20000" />
                <Item name="Erika" phone="1166074332" pizzaName="Special" price="$20000" />
                <Item name="Erika" phone="1166074332" pizzaName="Special" price="$20000" />
                <Item name="Erika" phone="1166074332" pizzaName="Special" price="$20000" />
                <Item name="Erika" phone="1166074332" pizzaName="Special" price="$20000" />
            </Box>
        </Container>
    )
}
const Container = styled.div`
    height:100vh;
    padding:20px 30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
`
const Header = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    margin-bottom:10px;
    .redirectBtn{
        max-width:210px;
        align-self: flex-start;
    }
    span{
        display: flex;
        font-size: 18px;
        letter-spacing: 4px;
        align-items:center;
        margin-left:10px;
    }
    img{
        max-width:40px;
        max-height:40px;
        margin-left:10px;
    }
    @media(max-width: ${({ theme }) => theme.device.xsm}){
        flex-direction:column;
        align-items:end;
        span{
            justify-content: space-between;
            width: 100%;
            margin:0px;
        }
        .redirectBtn{
            text-align: left;
            background:none;
            border:none;
            color:${({ theme }) => theme.colors.red};
            padding: 0px;
            width: fit-content;
            box-shadow: none;
            transition: color .2s ease-in-out;
            &:hover{
                color:${({ theme }) => theme.colors.orange}
            }
        }

    }
    
`
