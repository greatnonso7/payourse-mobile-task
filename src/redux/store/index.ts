import { init, RematchRootState } from '@rematch/core';

import { models, RootModel } from '../models';

export default init({
  models,
  redux: {},
});

export type RootState = RematchRootState<RootModel>;
