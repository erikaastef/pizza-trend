import styled, { css } from 'styled-components'

export const Button = ({ type, onClick, children, ...props }) => {
    return (
        <>
            {type === 'basic' &&
                <BasicButton onClick={onClick} {...props}>
                    {children}
                </BasicButton>
            }
            {type === 'check' &&
                <CheckButton onClick={onClick} {...props}>
                    {children}
                </CheckButton>
            }

        </>
    )
}

const BasicButton = styled.button`
    cursor:pointer;
    padding:10px;
    width:100%;
    min-height:fit-content;
    background:${({ theme }) => theme.colors.red};
    border-radius:8px;
    color:${({ theme }) => theme.colors.white};
    transition: background .2s ease-in-out , box-shadow .2s ease-in-out ;
    &:hover{
        background:${({ theme }) => theme.colors.warmRed};
        box-shadow: 2px 4px 7px -3px rgb(72 134 153);
    }
    text-transform:uppercase;
    font-size:18px;
`
const CheckButton = styled.button`
    cursor:pointer;
    padding:15px;
    min-height:55px;
    width:100%;
    border-radius:8px;
    text-transform:uppercase;
    border: 1px solid ${({ theme }) => theme.colors.red};
    background:${({ theme }) => theme.colors.pink};
    color:${({ theme }) => theme.colors.red};
    transition: background .2s ease-in-out , color .2s ease-in-out;
    &:hover{
        background:${({ theme }) => theme.colors.red};
        color:${({ theme }) => theme.colors.white};
    }
    ${({ checked }) => checked && css`
        background:${({ theme }) => theme.colors.red};
        color:${({ theme }) => theme.colors.white};
    `}
`
