import React from "react";
import { FlowerTableProps } from "../../Types/flowerType";

export const FlowerTable: React.FC<FlowerTableProps> = ({flowersList}) => {
  return <div>
    <div>
    <table>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Unit</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Image</th>
            <th></th>
          </thead>
          <tbody>
            {
              (flowersList?.length > 0) ? <>{
                flowersList.map((flowerItem) => 
                  <tr>
                    <td>{flowerItem._id}</td>
                    <td>{flowerItem.name}</td>
                    <td>{flowerItem.unit}</td>
                    <td>{flowerItem.price}</td>
                    <td>{flowerItem.stockQuantity}</td>
                    <td>{flowerItem.image?.map((imageItem)=>imageItem)}</td>
                    <td>Edit</td>
                    <td>Delete</td>
                  </tr>
                )}</> : <tr>No Flower</tr>
            } 
          </tbody>
        </table>
    </div>
  </div>;
};
