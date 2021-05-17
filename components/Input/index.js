import styled from 'styled-components'

export default function Input({ value, placeholder, label, type, onChange, className }) {
    return (
        <>

            <Label className={className} >
                {label}
                <StyledInput
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange} />
            </Label>
        </>
    );
}

const StyledInput = styled.input`
    width: 100%;
    color: ${({ theme }) => theme.colors.black};
    ::placeholder {
        color: ${({ theme }) => theme.colors.black};
        opacity: 0.2;
    }
    line-height: 1.83;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    border-bottom: 1px solid ${({ theme }) => theme.colors.red};
    transition: color .05s ease-in-out border-color .05s ease-in-out;
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    [type=number]{
        -moz-appearance: textfield;
    }
`


const Label = styled.label`
    width: 100%;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 15px;
    color: ${({ theme }) => theme.colors.red};
    text-align: left;
    display: flex;
    flex-direction: column;
    transition: color .05s ease-in-out;
`