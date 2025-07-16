import { Button, Space, Table, Tag, Modal, Form, Input, InputNumber } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { TableProps } from 'antd';
import styles from '../styles/components/pages/product.module.scss';
import { useState } from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

type FieldType = {
  name?: string;
  description?: string;
  price?: string;
  cost?: string;
  sku?: string;
  stock?: string;
};

export default function ProductsPage() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  
  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
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

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={styles.productPage}>
        <div className={styles.header}>
          <span>
            <h1>Products Page</h1>
            <p>Here you can manage your products.</p>
          </span>
          <Button onClick={() => setOpen(true)} type="primary" size="large" icon={<PlusOutlined />}>
            Add Button
          </Button>
        </div>
        <Table<DataType> columns={columns} dataSource={data} />

        <Modal
          title="Title"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <Form
            name="basic"
            layout='vertical'
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Description"
              name="description"
            >
              <Input />
            </Form.Item>

            <div className='flex gap-10'>
              <Form.Item<FieldType>
                label="Price"
                name="price"
                required
              >
                <InputNumber
                  prefix="₱"
                  defaultValue={100}
                  controls
                  required
                />
              </Form.Item>

              <Form.Item<FieldType>
                label="Cost"
                name="cost"
                required
              >
                <InputNumber
                  prefix="₱"
                  defaultValue={100}
                  controls
                  required
                />
              </Form.Item>

              <Form.Item<FieldType>
                label="Stock"
                name="stock"
                required
              >
                <InputNumber
                  defaultValue={1}
                  controls
                  required
                />
              </Form.Item>
            </div>

            <Form.Item<FieldType>
              label="SKU"
              name="sku"
            >
              <Input />
            </Form.Item>

          </Form>
        </Modal>
      </div>
    </>
  );
}