import { Effect, Reducer } from 'umi';
import { getDebtList } from '@/services/debt';

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

export interface DebtModelState {
  debtList: IEtf;
}

export interface EtfModelType {
  namespace: 'debt';
  state: DebtModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<DebtModelState>;
  };
}

const EtfModel: EtfModelType = {
  namespace: 'debt',
  state: {
    debtList: {},
  },
  effects: {
    *query({ payload }, { call, put }) {
      const data = yield call(getDebtList);
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
        debtList: {
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
