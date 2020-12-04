import React, { FC } from 'react';
import { connect } from 'umi';
import { Connect } from '@/models/connect';
import { Table } from 'antd';

interface PageProps extends Connect {}

const Home: FC<PageProps> = props => {
  const { dispatch, debt } = props;

  React.useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'debt/query',
      });
    }
  }, []);

  return (
    <div>
      <Table
        rowKey="code"
        columns={debt.debtList.columns}
        dataSource={debt.debtList.data}
      />
    </div>
  );
};

export default connect(({ debt }: Connect) => ({
  debt,
}))(Home);
