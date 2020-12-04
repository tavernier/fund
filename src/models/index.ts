import { Effect, Reducer, Subscription } from 'umi';

export interface IndexModelState {
  name: string;
}

export interface IndexModelType {
  namespace: 'index';
  state: IndexModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
  };
}

const IndexModel: IndexModelType = {
  namespace: 'index',
  state: {
    name: 'hello world',
  },
  effects: {
    *query({ payload }, { call, put }) {},
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
export default IndexModel;
