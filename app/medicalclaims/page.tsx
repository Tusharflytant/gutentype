import React from 'react';
import GenericPostPage from '@/components/GenericPostPage';
import medicalclaims from '@/constants/medicalclaims';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical Claims',
};

const MedicalClaims = () => {
  return <GenericPostPage title="Medical Claims" posts={medicalclaims} />;
};

export default MedicalClaims;
