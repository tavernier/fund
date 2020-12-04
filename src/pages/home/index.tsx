import React, { FC } from 'react';
import { connect, DebtModelState } from 'umi';
import { Button } from 'antd';
import { Connect } from '@/models/connect';

interface PageProps extends Connect {
  index: DebtModelState;
}

const Home: FC<PageProps> = props => {
  const { name } = props.index;

  return (
    <div>
      <Button type={'primary'}>111 {name}</Button>
    </div>
  );
};

export default connect(({ index }: Connect) => ({
  index,
}))(Home);
