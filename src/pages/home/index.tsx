import React, { FC } from 'react';
import { connect, IndexModelState, ConnectProps } from 'umi';
import styles from './index.less';

interface PageProps extends ConnectProps {
  index: IndexModelState;
}

const Home: FC<PageProps> = props => {
  fetch('/api/test').then((...args) => {
    console.log(args);
  });

  const { name } = props.index;

  return (
    <div>
      <h1 className={styles.title}>Page index {name}</h1>
    </div>
  );
};

export default connect(({ index }: { index: IndexModelState }) => ({
  index,
}))(Home);
