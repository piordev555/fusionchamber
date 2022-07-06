import { useEffect } from 'react'
import { NextPage } from 'next/types'
import CyberApeRenderer from '../CyberApeRenderer'
import { SingleApeData } from '../../constants/cyberapeage-data'
import RarityButton from './RarityButton'
import RankSection from './RankSection'
import { TokenData } from "../../types";

import {
    ApeItemContainer,
    HeroRenderWrapper
} from './styles'

const ApeItem: NextPage<TokenData> = ({ token, index, rank, traits }) => {
    return (
        <ApeItemContainer className='apeItemContainer'>
            <HeroRenderWrapper>
                <CyberApeRenderer 
                    isLookingRight={false}
                    size="200px"
                    traits={traits}
                />
            </HeroRenderWrapper>

            <RankSection 
                index={index}
                rank={rank}
            />

            <RarityButton rank={rank} />
        </ApeItemContainer>
    )
}

export default ApeItem;