import React from "react";
import styled from "styled-components";
import { SideBarProp, SideBarPropItem } from "../Types/flowerType";

const StyledSideIcon = styled.div`
  width: 20px;
  height: 20px;
  color: white;
  display: inline-block;
  cursor: pointer;
`;

const StyledSideItem = styled.div`
  display: flex;
  flex: row;
  flex-wrap: nowrap;
  gap: 1rem;
  color: white;
  display: inline-block;
  cursor: pointer;
  width: 100%;
  height: fit-content;
  justify-content: center;
  align-items: center;
`;

const StyledSideBar = styled.div`
  margin-top: 3.25rem;
  width: 24vh;
  height: 100vh;
  border-right: 1px solid black;
  text-align: left;
  background-color: rgb(26, 35, 49);
  display: flex;
  flex: row;
  /* flex-wrap: wrap; 
  justify-content: flex-start;
  align-items: flex-start; */
  flex-wrap: wrap;
`;

const listSideBar: SideBarPropItem[] = [
  {
    name: "Dashboard",
    icon: 
      <StyledSideIcon>
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
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </StyledSideIcon>
  },
  {
    name: "Flower",
    icon: 
      <StyledSideIcon>
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
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </StyledSideIcon>
  },
  {
    name: "User",
    icon: 
      <StyledSideIcon>
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
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </StyledSideIcon>
  }
];
export const SideBar: React.FC<SideBarProp> = ({listItem}) => {
  return <StyledSideBar>
    {
      listSideBar.map((item)=><StyledSideItem>
        {item.icon}
        <span>{item.name}</span>
      </StyledSideItem>)
    }
  </StyledSideBar>;
};
