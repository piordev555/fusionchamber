import { NextPage } from 'next/types'
import { RankSectionProps } from './types'
import { RankSectionDiv } from './styles'

const RankSection: NextPage<RankSectionProps> = ({index, rank}) => {
    return (
        <RankSectionDiv>
            <span>#{index}</span>
            <span>{rank}º</span>
        </RankSectionDiv>
    )
}

export default RankSection;