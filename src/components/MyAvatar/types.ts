import {FC} from 'react';

export interface IMyAvatar {
  uri: string;
  onPress: () => void;
  children: FC;
}
