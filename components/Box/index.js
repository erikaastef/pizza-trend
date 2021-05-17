import styled, { css } from 'styled-components'

export default function Box({ className, scroll, children }) {
    return (
        <Wrapper className={className} scroll={scroll}>
            {children}
        </Wrapper>
    )
}
const Wrapper = styled.div`
    background:${({ theme }) => theme.colors.white};
    min-height: 85vh;
    border-radius:4px;
    width: 100%;
    padding:25px 20px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    ${({ scroll }) => scroll && css`
        height:85vh;
        padding-right:10px;
        overflow:auto;
    `}
`