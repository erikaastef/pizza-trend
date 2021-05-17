import styled from 'styled-components'
import Select from 'react-select';

export const StyledSelect = ({ className, label, options, id, defaultValue, onChange, placeholder }) => {

    return (
        <Wrapper className={className}>
            <Label>{label}</Label>
            <Select
                instanceId={id}
                components={{ IndicatorsContainer }}
                styles={customStyles}
                options={options}
                placeholder={placeholder}
                onChange={onChange}
                defaultValue={defaultValue}
                theme={theme => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        primary25: 'none',
                        primary75: 'none',
                        primary: 'none',
                        primary50: 'none',
                    },
                })}
            />
        </Wrapper>
    )
}

const IndicatorsContainer = ({ innerRef, innerProps, selectProps }) => {

    return (
        <div ref={innerRef} {...innerProps}>
            <Chevron viewBox="0 0 20 20" width="18" height="20">
                <g fill="none" fillRule="evenodd">
                    <g fill="#EF3340">
                        <g>
                            <g>
                                <g>
                                    <path d="M15.895 8.162c.14.173.138.423.008.594l-.055.06-5.563 5.072c-.144.13-.347.147-.505.049l-.065-.049-5.563-5.072c-.183-.167-.204-.46-.047-.654.14-.173.374-.21.553-.099l.064.049L10 12.925l5.278-4.813c.163-.148.4-.147.56-.009l.057.059z" transform="translate(-520 -256) translate(95 158) translate(0 69) translate(425 29)" />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </Chevron>
        </div>
    );
};

const Chevron = styled.svg.attrs({
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`

`

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        borderRadius: '0px',
        minHeight: "0px",
        border: 'none',
        borderBottom: `1px solid #EF3340`,
        fontWeight: 400,
        boxShadow: 'none',
        '&:hover': {
            borderColor: 'none !important`',
        },
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        padding: '0px',
        flexWrap: 'nowrap',
    }),
    placeholder: (provided, state) => ({
        fontSize: "14px",
        opacity: '0.2',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    }),
    indicatorSeparator: (provided, state) => ({
        ...provided,
        width: '0px',
    }),
    menu: (provided, state) => ({
        ...provided,
        padding: "10px 20px",
        margin: "5px 3px",
        width: "98%",
        borderRadius: "10px",
        backgroundColor:"#F5DADF",
        boxShadow: " 0 2px 4px 0 rgba(0, 0, 0, 0.3)",
        "&::-webkit-scrollbar-thumb": {
            borderRadius: "2.5px",
        }
    }),
    menuList: (provided, state) => ({
        ...provided,
        maxHeight: "100px",
        overflow: "auto"
    }),
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? "#EF3340" : "#333333",
        padding: "10px 0px",
        borderBottom: "1px solid #EF3340",
        fontSize: "14px",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.5",
        letterSpacing: "normal",
        '&:hover': {
            color: !state.isSelected && '#280071',
        },
    }),
}

const Label = styled.label`
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    color: ${({ theme }) => theme.colors.red};
    text-align: left;
    transition: color .3s ease-in-out;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align:left;
`