import React from 'react';
import GenericPostPage from '@/components/GenericPostPage';
import consumerprotection from '@/constants/consumerprotection';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consumer Protection',
};

const Consumerprotection = () => {
  return <GenericPostPage title="Consumer Protection" posts={consumerprotection} />;
};

export default Consumerprotection;
