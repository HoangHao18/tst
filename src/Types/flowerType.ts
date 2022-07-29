import { ReactNode } from "react"

export type Flower = {
  _id: string,
  name: string,
  unit: string,
  image: string[],
  price: number,
  stockQuantity: number
}

export type FlowerTableProps = {
  flowersList: Flower[]
}

export type AvatarProps = {
  image: string,
  name: string
}

export type SideBarPropItem = {
  name: string,
  icon: ReactNode
}

export type SideBarProp ={
  listItem: SideBarProp[]
}