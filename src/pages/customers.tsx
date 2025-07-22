import { Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { useEffect, useState } from 'react';

import { getCustomers } from '../lib/data';
import type { Customers } from '../types';

export default function CustomersPage() {
  const [data, setData] = useState<Customers[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  const columns: TableProps<Customers>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Created At',
      key: 'createdAt',
      dataIndex: 'createdAt',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  useEffect(() => {
      const fetchCustomers = async () => {
        const productsData = await getCustomers();
        setData(productsData);
        setDataLoading(false);
      };
      
      fetchCustomers();
    }, []);

  return (
    <div>
      <h1>Customers Page</h1>
      <Table<Customers> columns={columns} dataSource={data} loading={dataLoading} />
    </div>
  );
}