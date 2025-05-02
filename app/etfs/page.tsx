import React from 'react'
import Etfs from './Etfs';
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "ETFS",
  };

const etf = () => {
  return (
    <div>
      <Etfs/>
    </div>
  )
}

export default etf
