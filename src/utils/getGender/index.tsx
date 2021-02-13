import React from 'react';
import {WomanSvg, ManSvg} from '../../assets';

export function getGenderSVG(gender: string) {
  const genderIndex = gender === 'woman' ? 0 : 1;
  const genders = [
    <WomanSvg width={20} height={20} />,
    <ManSvg width={20} height={20} />,
  ];

  return genders[genderIndex];
}
