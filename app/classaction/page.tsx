import React from 'react';
import GenericPostPage from '@/components/GenericPostPage';
import classaction from '@/constants/classaction';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Class Action Lawsuit',
};

const ClassActionPage = () => {
  return <GenericPostPage title="Class Action Lawsuits" posts={classaction} />;
};

export default ClassActionPage;
