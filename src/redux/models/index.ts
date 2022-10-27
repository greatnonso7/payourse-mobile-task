import { Models } from '@rematch/core';
import { Crypto } from './Crypto';

export interface RootModel extends Models<RootModel> {
  Crypto: typeof Crypto;
}

export const models: RootModel = { Crypto };
