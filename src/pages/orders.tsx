import { Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { useEffect, useState } from 'react';

import type { Orders } from '../types'
import { getOrders } from '../lib/data';

export default function OrderPage() {
  const [data, setData] = useState<Orders[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  const columns: TableProps<Orders>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Customer ID',
      dataIndex: 'customerId',
      key: 'customerId',
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Total Amount',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
    },
    {
      title: 'Paid Amount',
      dataIndex: 'paidAmount',
      key: 'paidAmount',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (_, { status }) => (
        <Tag color={'completed' === status ? 'green' : 'volcano'}>
          {status.toUpperCase()}
        </Tag>
      ),
    }
  ];

  useEffect(() => {
      const fetchOrders = async () => {
        const productsData = await getOrders();
        setData(productsData);
        setDataLoading(false);
      };
      
      fetchOrders();
  }, []);

  return (
    <div>
      <h1>Order Page</h1>
      <Table<Orders> columns={columns} dataSource={data} loading={dataLoading} />
    </div>
  );
}