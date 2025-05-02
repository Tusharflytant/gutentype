import React from 'react'
import Finance from './Finance';
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Finance",
  };

const finance = () => {
  return (
    <div>
      <Finance/>
    </div>
  )
}

export default finance
