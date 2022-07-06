import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { CardS } from "../../../styles/FusionChamber";
import NFTType from "./NFTType";

interface Props {
  url: string;
  type: string;
  selected?: boolean;
  disabled?: boolean;
}

const CardImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  padding: 0;
  margin-bottom: 8px;
`;

const CardImageDescription = styled.div`
  display: flex;
  flex-direction: row;
  width: calc((275 / 1920) * 100vw);

  font-family: "VT323";
  font-style: normal;
  font-weight: 400;
  font-size: calc((28 / 1920) * 100vw);
  line-height: calc((28 / 1920) * 100vw);

  color: #ffffff;

  justify-content: space-between;
`;

const CardImage = styled.img`
  border-radius: 25px;

  width: calc((275 / 1920) * 100vw);
  height: calc((275 / 1920) * 100vw);
`;

const NFTCard: React.FC<Props> = ({
  url,
  type,
  selected = false,
  disabled = false,
}) => {
  return (
    <CardS>
      <CardImageBox>
        <CardImage src={url} />
        <CardImageDescription>
          <p>#3131</p>
          <p>1219</p>
        </CardImageDescription>
      </CardImageBox>
      <NFTType type={type} />
    </CardS>
  );
};

export default NFTCard;
