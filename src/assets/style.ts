import styled from "styled-components";

interface BoxTheme{
    textColor: string;
    backgroundColor?: string;  
}

export const Box = styled.div<BoxTheme>`
    display: flex;
    color: read;
    align-items: right;
    
    h1{
        color: ${(props) => props.textColor};
    }
`
export const TEXT = styled.h1`
    display: flex;
    color: read;
`