import React, { FC } from 'react';
import { connect } from 'umi';
import { Connect } from '@/models/connect';
import { Table } from 'antd';

interface PageProps extends Connect {}

const Home: FC<PageProps> = props => {
  const { dispatch, etf } = props;

  React.useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'etf/query',
      });
    }
  }, []);

  console.log(etf.etfList);

  return (
    <div>
      <Table
        rowKey="code"
        columns={etf.etfList.columns}
        dataSource={etf.etfList.data}
      />
    </div>
  );
};

export default connect(({ etf }: Connect) => ({
  etf,
}))(Home);
