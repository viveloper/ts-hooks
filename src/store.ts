import { createContext } from 'react';

export interface UserState {
  first: string;
  last: string;
}

const initialState: UserState = {
  first: 'Jack',
  last: 'Herrington',
};

const context = createContext<UserState>(initialState);

export default context;
