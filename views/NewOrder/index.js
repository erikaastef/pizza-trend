import styled from 'styled-components'
import Box from '../../components/Box'
import Input from '../../components/Input'
import { Button } from '../../components/Button'
import { StyledSelect } from '../../components/Select'
import Router from 'next/router'

export const NewOrder = () => {
    return (
        <Container className="wrapper">
            <Header>
                <span>
                    <img src="/images/pizza.png" />
                    ...ORDER IN PROGRESS
                </span>
                <Button type="basic" className="redirectBtn" type="basic" onClick={() => Router.push('/records')}>DASHBOARD</Button>
            </Header>
            <Box>
                <Form>
                    <Input type="text" label="NEW PIZZA NAME" />
                    <StyledSelect
                        id="#282us"
                        label="CHOOSE PIZZA NAME"
                        options={[{ label: "special", value: "special" }, { label: "special2", value: "special2" }, { label: "special3", value: "special3" }]}
                    />
                </Form>
                <h1 className="left-align">INGREDIENTS</h1>
                <PanelGrid>
                    <IngredientsGrid>
                        <Button type="check">peinillo $2000</Button>
                        <Button type="check">peinillo $2000</Button>
                        <Button type="check">peinillo $2000</Button>
                        <Button type="check">peinillo $2000</Button>
                        <Button type="check">peinillo $2000</Button>
                        <Button type="check">peinillo $2000</Button>
                        <Button type="check">peinillo $2000</Button>
                        <Button type="check">peinillo $2000</Button>
                        <Button type="check">peinillo $2000</Button>
                        <Button type="check">peinillo $2000</Button>
                        <Button type="check">peinillo $2000</Button>
                        <Button type="check">peinillo $2000</Button>
                        <Button type="check">peinillo $2000</Button>
                        <Button type="check">peinillo $2000</Button>
                        <Button type="check">peinillo $2000</Button>
                    </IngredientsGrid>
                    <InfoBox>
                        <h1>RECEIPT</h1>
                        <ul>
                            <li>peperoni<span className="black-font">50000</span></li>
                            <li>cheese <span className="black-font">50000</span></li>
                            <li>ham <span className="black-font">40000</span></li>
                            <li>peperoni<span className="black-font">50000</span></li>
                            <li>cheese <span className="black-font">50000</span></li>
                            <li>ham <span className="black-font">40000</span></li>
                            <li>peperoni<span className="black-font">50000</span></li>
                            <li>cheese <span className="black-font">50000</span></li>
                            <li>ham <span className="black-font">40000</span></li>
                        </ul>
                        <div>total:<span className="black-font">50000</span></div>
                    </InfoBox>
                    <Form className="newIngredient">
                        <Input type="text" label="NEW INGREDIENT" />
                        <Button type="basic">CREATE</Button>
                    </Form>
                </PanelGrid>
                <h1 className="left-align">CLIENT INFO</h1>
                <Form>
                    <Input type="text" label="NAME" />
                    <Input type="number" label="PHONE NUMBER" />
                </Form>
                <Button type="basic" className="orderBtn">PLACE ORDER</Button>
            </Box>
        </Container>
    )
}

const Container = styled.div`
    min-height:100vh;
    padding:20px 30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    h1{
        font-size: 18px;
        text-align:center;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.14;
        padding-bottom:10px;
        margin-bottom:10px;
        color:${({ theme }) => theme.colors.black};
        
    }
    .left-align{
        text-align:left;
    }
    .orderBtn{
        width:70%;
        margin:0 auto;
    }
    @media(max-width: ${({ theme }) => theme.device.xsm}){
        .orderBtn{
            width:100%;
            margin:0px;
        }
    }
`
const Header = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    margin-bottom:10px;
    .redirectBtn{
        max-width:175px;
        align-self: flex-end;
    }
    span{
        display: flex;
        font-size: 18px;
        letter-spacing: 4px;
        align-items:center;
    }
    img{
        max-width:40px;
        max-height:40px;
        margin-right:10px;
    }
    @media(max-width: ${({ theme }) => theme.device.xsm}){
        flex-direction:column-reverse;
        align-items:flex-end;
        text-align: right;
        .redirectBtn{
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
const PanelGrid = styled.div`
    display:grid;
    grid-template-columns:1.5fr 0.5fr;
    grid-template-rows:1.5fr 0.5fr;
    grid-template-areas:
    "ingredients receipt"
    "newIngredient receipt";
    gap:20px;
    .newIngredient{
        grid-area: newIngredient;
        margin: 0px;
        align-self: flex-end;
    }
    margin-bottom:20px;
    @media(max-width: ${({ theme }) => theme.device.md}){
        grid-template-columns:1fr;
        grid-template-rows:auto;
        grid-template-areas:
        "ingredients"
        "newIngredient"
        "receipt";

    }

`
const IngredientsGrid = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr ;
    grid-area:ingredients;
    gap:20px;
    height:150px;
    overflow: auto;
    padding:0px 15px 15px 0px ;
`

const InfoBox = styled.div`
    height:inherit;
    grid-area:receipt;
    h1{
        font-weight: 500;
        border-bottom: 1px solid ${({ theme }) => theme.colors.red};
    }
    ul{
        display:flex;
        flex-direction:column;
        height:150px;
        overflow:auto;
        border-bottom: 1px solid ${({ theme }) => theme.colors.red};
        padding: 0px 5px 10px 0px;
    }
    li{
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: normal;
        color:${({ theme }) => theme.colors.gray};
    }
    div{
        display:flex;
        justify-content:space-between;
        color:${({ theme }) => theme.colors.gray};
        padding-top: 10px;
    }
    .black-font{
        color:${({ theme }) => theme.colors.black};
        text-align: end;
    }

`
const Form = styled.form`
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:1fr;
    gap:20px;
    margin-bottom:25px;
    @media(max-width: ${({ theme }) => theme.device.xsm}){
        grid-template-columns:1fr; 
        .orderBtn{
            width:100%
        }
    }
`
