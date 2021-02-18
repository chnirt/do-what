import {StyleSheet} from 'react-native';

import {wp} from '../../utils';

export const styles = StyleSheet.create({
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(100),
    height: wp(100),
    borderRadius: wp(100 / 2),
    borderWidth: wp(3),
    borderColor: '#fff',
    backgroundColor: '#d3d3d3',
  },
  avatar: {
    width: wp(100),
    height: wp(100),
    borderRadius: wp(100 / 2),
    borderWidth: wp(3),
    borderColor: '#fff',
  },
  plus: {
    position: 'absolute',
  },
});
