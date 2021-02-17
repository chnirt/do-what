import React from 'react';
import {WomanAvatarSvg, ManAvatarSvg} from '../../assets/svgs';

export function getAvatarSVG(gender: string) {
  const genderIndex = gender === 'woman' ? 0 : 1;
  const avatars = [
    <WomanAvatarSvg width={70} height={70} />,
    <ManAvatarSvg width={70} height={70} />,
  ];

  return avatars[genderIndex];
}
