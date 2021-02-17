import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {IMyAvatar} from './types';
import {PlusSvg} from '../../assets';

export function MyAvatar({uri, onPress = () => {}, children}: IMyAvatar) {
  return (
    <TouchableOpacity style={styles.avatarContainer} onPress={onPress}>
      {uri ? (
        <Image
          style={styles.avatar}
          source={{
            uri,
          }}
          resizeMode="cover"
        />
      ) : (
        children
      )}

      <PlusSvg style={styles.plus} fill="#fff" width={20} height={20} />
    </TouchableOpacity>
  );
}
