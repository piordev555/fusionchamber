import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { ApeItemDetailPartProps } from './types'
import { ApeItemDetailPartContainer } from './styles'

const ApeItemDetailPart: NextPage<ApeItemDetailPartProps> = ({ 
    mainTitle, mainText, summary, totalAmount, progress
 }) => {
    const [percent, SetPercent] = useState<number>(0);

    useEffect(() => {
        SetPercent( progress / totalAmount * 100);
    }, [totalAmount, progress])
    
    return (
        <ApeItemDetailPartContainer>
            <p className="main-title">{mainTitle}</p>
            <p className="main-text">{mainText}</p>
            <div className="progress-container">
                <div className="progress-text">
                    <span>
                        {summary}
                    </span>
                    <span>{progress}/{totalAmount}</span>
                </div>
                <div className="progress-outer">
                    <div className="progress-inner">
                        <div 
                            className="progress-done"
                            style={{ width: `${percent}%` }}></div>
                    </div>
                </div>
            </div>
        </ApeItemDetailPartContainer>
    )
}

export default ApeItemDetailPart;