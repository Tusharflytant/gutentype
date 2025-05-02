import React from 'react'
import Trading from './Trading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trading',
};

const trading = () => {
  return (
    <div>
      <Trading/>
    </div>
  )
}

export default trading
