import styled from "styled-components";

const COLORS = {
    primary: '#0099FF',
    default: '#274060'
}

const THEMES = {
    primary: {
        color: COLORS.primary
    },
    default: {
        color: COLORS.default
    }
} 

export const Wrapper = styled.div<{
    variant: 'default' | 'primary'
}>`
    display: flex;
    flex-direction: column;
    color: ${p => THEMES[p.variant].color};

    span.Description {
        font-size: 12px;
        color: #274060;
    }

    span.Currency,
    span.Value {
        font-weight: 700;
        font-size: 18px
    }
`