import React from "react";
import styled from "styled-components";
import { AvatarProps } from "../Types/flowerType";

const StyledAvatar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 0.5rem;
  color: white;
  font-size: 0.90rem;
  cursor: pointer;
`;
const StyledAvatarImg = styled.div`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  & img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
`;

export const Avatar: React.FC<AvatarProps> = ({image, name}) => {
  return <StyledAvatar>
    <StyledAvatarImg><img src={image}></img></StyledAvatarImg>
    <div>{name}</div>
  </StyledAvatar>;
};
