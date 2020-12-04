import { Effect, Reducer } from 'umi';
import { getEtfList } from '@/services/etf';

interface IField {
  field: string;
  text: string;
}

interface IOriginEtf {
  data: Array<(string | number)[]>;
  fields: IField[];
}

interface IDataItem {
  [x: string]: string | number;
}

export interface IEtf {
  data?: IDataItem[];
  columns?: Array<{ title: string; dataIndex: string; key: string }>;
}

export interface EtfModelState {
  etfList: IEtf;
}

export interface EtfModelType {
  namespace: 'etf';
  state: EtfModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<EtfModelState>;
  };
}

const EtfModel: EtfModelType = {
  namespace: 'etf',
  state: {
    etfList: {},
  },
  effects: {
    *query({ payload }, { call, put }) {
      const data = yield call(getEtfList);
      yield put({
        type: 'save',
        payload: {
          etfList: data,
        },
      });
    },
  },
  reducers: {
    save(state, { payload }) {
      const { etfList } = payload;
      const { fields, data } = etfList as IOriginEtf;
      return {
        ...state,
        etfList: {
          columns: fields.map(({ field, text }) => ({
            key: field,
            title: text,
            dataIndex: field,
          })),
          data: data.map(arr =>
            arr.reduce(
              (obj, value, index) => ({
                ...obj,
                [fields[index].field]: value,
              }),
              {},
            ),
          ),
        },
      };
    },
  },
};
export default EtfModel;
