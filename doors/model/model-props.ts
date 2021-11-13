import { Dispatch, SetStateAction } from 'react';

export interface ModelProps<T> {
  model: T;
  setModel: Dispatch<SetStateAction<T>> | ((model: T) => void);
}
