'use client';

import StaffManagement from './StaffManagement';
import PFASettings from './PFASettings';
import ReverseDocuments from './ReverseDocuments';
import { JSX } from 'react';

export const tabComponents: Record<string, () => JSX.Element> = {
  staff: StaffManagement,
  pfa: PFASettings,
  reverse: ReverseDocuments,
};
