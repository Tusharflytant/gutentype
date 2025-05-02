import React from 'react'
import Stock from './Stock';
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Stock",
  };

const stock = () => {
  return (
    <div>
      <Stock/>
    </div>
  )
}

export default stock
