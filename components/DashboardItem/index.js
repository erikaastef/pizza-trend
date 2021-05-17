import styled, { css } from 'styled-components'

export const Item = ({ name, phone, pizzaName, price, date, borderBottom }) => {
    return (
        <Wrapper borderBottom={borderBottom}>
            <img src="/images/pizza-delivery.png" />
            <Table>
                <thead>
                    <tr>
                        <th>CUSTOMER</th>
                        <th>PHONE</th>
                        <th>PIZZA NAME</th>
                        <th>PRICE</th>
                        <th>DATE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{phone}</td>
                        <td>{pizzaName}</td>
                        <td>{price}</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display:flex;
    align-items:center;
    padding:15px;
    width:100%;
    min-width:800px;
    transition: background .2s ease-in-out;
    &:hover{
        background:${({ theme }) => theme.colors.palePink};
    }
    img{
        margin-right:20px;
    }
    border-radius:4px;
    margin-bottom:10px;
`
const Table = styled.table`
    width:100%;

    th {
        text-align:left;
        box-sizing:border-box;
        color: ${({ theme }) => theme.colors.red};
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.17;
        letter-spacing: normal;
        font-size: 12px;
        border-right:1px solid ${({ theme }) => theme.colors.red};
        padding-left:10px;
        &:last-child {
            border:none;
        }
    }

    td {
        vertical-align: middle;
        padding: 10px 20px 10px 0;
        box-sizing:border-box;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.2;
        letter-spacing: normal;
        color: ${({ theme }) => theme.colors.black};
        border-right:1px solid ${({ theme }) => theme.colors.red};
        padding-left:10px;
        &:last-child {
            border:none;
        }
    }
    
`