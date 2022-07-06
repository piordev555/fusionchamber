import { NextPage } from 'next'
import React from 'react'
import { WalletApesDataProps } from './types'
import CyberApeRenderer from '../CyberApeRenderer'
import BloomingContainer from '../BloomingContainer'
import ApeItemDetailPart from './ApeItemDetailPart'
import SignatureButton from '../SignatureButton'
import {
    WalletApeItemContainer
} from './styles'

// mainTitle: string,
// mainText: string,
// sumary: string,
// totalAmount: number,
// progress: number

const WalletApeItem: NextPage<WalletApesDataProps> = ({
        traits, timeInLockdown, totalDays, cyberProgress, rewardedSecond, totalSecond}) => {
    return (
        <WalletApeItemContainer size={10}>
            <div className='item-container'>

            
                <CyberApeRenderer 
                    isLookingRight={false}
                    size="120px"
                    traits={traits}/>
                <ApeItemDetailPart 
                    mainTitle="time in lockdown"
                    mainText={timeInLockdown}
                    summary="days $cyber bonus progress"
                    totalAmount={totalDays}
                    progress={cyberProgress}
                />
                <ApeItemDetailPart 
                    mainTitle="cyber rewarded per second"
                    mainText={rewardedSecond.toString()}
                    summary="days $cyber bonus progress"
                    totalAmount={totalSecond}
                    progress={rewardedSecond}
                />
                <div className="action-container">
                    <SignatureButton 
                        onClick= {()=>{}}
                        accent="#E42575"
                        customStyle={{
                            width: "100%",
                            padding: "0px"
                        }}>
                        release
                    </SignatureButton>
                    <SignatureButton 
                        onClick={()=>{}}
                        isContrast 
                        accent="#5865F2"
                        customStyle={{
                            width: "100%",
                            padding: "0px"
                        }}
                        >
                        claim rewards
                    </SignatureButton>
                </div>
            </div>
            
        </WalletApeItemContainer>
    )
}

export default WalletApeItem;