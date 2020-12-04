import request from '@/utils/request';

export async function getDebtList() {
  return request('/debt/list');
}
