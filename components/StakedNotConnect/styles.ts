import styled, { css } from 'styled-components'
import { PAGE_MAX_WIDTH } from '../../constants'
import { 
    CustomStylesProps
} from "../StakedConnected/types";

export const Container = styled.div<CustomStylesProps>`
    width: 100%;
    max-width: ${PAGE_MAX_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;

    ${({customStyles}) => 
        customStyles && 
        css`
            ${customStyles}
        `
    }
`

export const Title = styled.p`
    font-size: 48px;
    line-height: 48px;
    text-transform: uppercase;
    color: #fff;
    position: relative;
    position: absolute;
    z-index: 100;
`

export const Summary = styled.p`
    font-size: 32px;
    line-height: 32px;
    text-align: center;
    text-transform: uppercase;
    color: #404040;
    position: absolute;
    margin-top: 80px;
    z-index: 100;
`