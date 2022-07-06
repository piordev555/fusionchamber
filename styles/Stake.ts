import styled from 'styled-components'
import { PAGE_MAX_WIDTH } from '../constants'

export const MainContainer = styled.div`
    width: 100%;
    padding: 1rem 0;
    margin: 150px auto;
    margin-bottom: 0;
    
    .lockdown-header {
        display: flex;
        width: 100%;
        max-width: ${PAGE_MAX_WIDTH};
        justify-content: space-between;
        align-items: center;
        margin: auto;
        
        .title {
            font-weight: 400;
            font-size: 76px;
            line-height: 76px;
            text-transform: uppercase;
        }
    }
    .statistics-header {
        background: linear-gradient(to right, #5fada9 25%, #5FAD67 50%, #5fada9 75%);
        background-size: 400% 400%;
        transition: all 0.25s ease-in-out;
        object-fit: contain;
        object-position: center;
        flex-direction: row;
        animation: welcome-header-shimmer 2.5s linear infinite;
        align-items: center;
        margin-top: 100px;
        @keyframes welcome-header-shimmer {
            from {
                background-position: 0% 0%;
            }
            to {
                background-position: 135% 0%;
            }
        }
        
        .container {
            width: 100%;
            max-width: ${PAGE_MAX_WIDTH};
            display: flex;
            margin: auto;
            justify-content: space-between;
            align-items: end;
            
            .data-part {
                display: flex;
                padding: 20px 0;
                .data-item {
                    display: block;
                    padding: 0 20px;
                    
                    > p:first-of-type {
                        font-size: 16px;
                        line-height: 16px;
                        text-transform: uppercase;
                        color: rgba(0, 0, 0, 0.5);
                    }
                    > p:last-of-type {
                        font-size: 59px;
                        line-height: 59px;
                        text-transform: uppoercase;
                        color: #000000;
                    }
                }
            }

            .stake-header-img {
                position: absolute !important;
                left: 74%;
            }
        }
    }
`

export const ApeContainer = styled.div`
    width: 100%;
    max-widht: ${PAGE_MAX_WIDTH};
    justify-content: center;
    margin-top: 82px;
    margin-bottom: 82px;
`
