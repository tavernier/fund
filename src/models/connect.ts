import { ConnectProps } from 'umi';
import { IndexModelState } from '@/models/index';
import { EtfModelState } from '@/models/etf';
import { DebtModelState } from '@/models/debt';

export interface Connect extends ConnectProps {
  index: IndexModelState;
  etf: EtfModelState;
  debt: DebtModelState;
}
