import request from '@/utils/request';

export async function getEtfList() {
  return request('/etf/list');
}
