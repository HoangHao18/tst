import React from "react";
import styled from "styled-components";
import { AvatarProps } from "../Types/flowerType";
import { Avatar } from "./Avatar";

const StyledHeader = styled.div`
  width: 100vw;
  height: 3.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(29, 40, 53, 0.95);
  position: fixed;
  z-index: 1024;
  justify-content: space-between;
  padding: 0 1rem;
  box-sizing: border-box;
`;
const StyledHeaderItem = styled.div`
  width: 20px;
  height: 20px;
  color: white;
  display: inline-block;
  cursor: pointer;
`;
const WrapRight = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 1rem;
`;

const StyledStoreName = styled.div`
  color: white;
  text-transform: uppercase;
  font-size: 0.95rem;
`

const userExam: AvatarProps = {
  image: "/public/cat.jpg",
  name: "HoangHao",
};

export const Header = () => {
  return (
    <StyledHeader>
      <WrapRight>
        <StyledHeaderItem>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </StyledHeaderItem>
        <StyledStoreName>STORE ADMIN</StyledStoreName>
      </WrapRight>
      <WrapRight>
        <StyledHeaderItem>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </StyledHeaderItem>
        <StyledHeaderItem>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        </StyledHeaderItem>
        <StyledHeaderItem>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </StyledHeaderItem>
        <Avatar image={userExam.image} name={userExam.name} />
      </WrapRight>
    </StyledHeader>
  );
};
