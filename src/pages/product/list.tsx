import { Button, Space, Table, Tag, Modal, Form, Input, InputNumber } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { TableProps } from 'antd';
import { useState, useEffect } from 'react';

import styles from '../../styles/components/pages/product.module.scss';
import type { Products } from '../../types';
import { getProducts } from '../../lib/data';

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
  const [data, setData] = useState<Products[]>([]);
  const [dataLoading, setDataLoading] = useState(true);
  
  const columns: TableProps<Products>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Cost',
      key: 'cost',
      dataIndex: 'cost',
    },
    {
      title: 'Status',
      key: 'isActive',
      dataIndex: 'isActive',
      render: (_, { isActive }) => (
        <>
          <Tag color={isActive ? 'green' : 'volcano'}>
            {isActive ? 'Active' : 'Inactive'}
          </Tag>
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

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setData(productsData);
      setDataLoading(false);
    };
    
    fetchProducts();
  }, []);

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
        <Table<Products> columns={columns} dataSource={data} loading={dataLoading} />

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