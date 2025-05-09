import React from 'react';
import GenericPostPage from '@/components/GenericPostPage';
import personalinjury from '@/constants/personalinjury';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personal Injury',
};

const PersonalInjury = () => {
  return <GenericPostPage title="Personal Injury" posts={personalinjury} />;
};

export default PersonalInjury;
