import React from "react";
import { NextPage } from "next";
import { 
    Container,
    Title,
    Summary 
} from './styles'
import EmptyApe from "../StakedConnected/EmptyApe";

const StakedNotConnect = () => {
    return (
        <Container
            customStyles={{
                background: 'url(./dotBg.png) no-repeat',
                backgroundSize: `100% 300px`,
                minHeight: '300px',
            }}
        >
            <Title>lockdown a cyber ape to mine $cyber</Title>
            <Summary>connect your wallet to prepare for lockdown</Summary>
            <EmptyApe 
                heightSize={290}
                widthSize={300}/>
        </Container>
    )
}

export default StakedNotConnect;
