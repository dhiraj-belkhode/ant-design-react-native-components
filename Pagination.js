import React from 'react';
import { Pagination, WhiteSpace, WingBlank } from 'antd-mobile-rn';

const locale = {
  prevText: 'Prev',
  nextText: 'Next',
};

export default class BasicPaginationExample extends React.Component<any, any> {
    static navigationOptions = {
        headerTitle: 'Pagination',
    };

    render() {
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Pagination total={5} current={1} locale={locale} />

        <WhiteSpace size="lg" />
        <Pagination simple total={5} current={1} locale={locale} />

        <WhiteSpace size="lg" />
        <Pagination mode="number" total={5} current={3} />

        <WhiteSpace size="lg" />
        <Pagination mode="pointer" total={5} current={2} />
      </WingBlank>
    );
  }
}