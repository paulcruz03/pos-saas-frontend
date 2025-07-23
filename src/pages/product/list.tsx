import { Button, Table, Tag } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { TableProps } from 'antd';
import { useState, useEffect } from 'react';

import styles from '../../styles/components/shared.module.scss';
import type { Products } from '../../types';
import { getProducts } from '../../lib/data';
import AddProductModal from '../../components/add-product-form';
import useWindowDimensions from '../../hooks/screen';

export default function ProductsPage() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Products[]>([]);
  const [dataLoading, setDataLoading] = useState(true);
  const { width } = useWindowDimensions();
  
  const columns: TableProps<Products>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
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
      title: 'Stock',
      key: 'stock',
      dataIndex: 'stock',
    },
    {
      title: 'Status',
      key: 'isActive',
      dataIndex: 'isActive',
      render: (_, { id, isActive }) => (
        <>
          <Tag key={`${id}-isActive`} color={isActive ? 'green' : 'volcano'}>
            {isActive ? 'Active' : 'Inactive'}
          </Tag>
        </>
      ),
    },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (_, { id }) => (
    //     <Space key={`${id}-action`} size="middle">
    //       <Button color="default" variant="solid">
    //         View
    //       </Button>
    //       <Button color="default" variant="solid">
    //         Restock
    //       </Button>
    //       <Button color="default" variant="solid">
    //         Update Price
    //       </Button>
    //       <Button color="default" variant="solid">
    //         Delete
    //       </Button>
    //     </Space>
    //   ),
    // },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setData(productsData);
      setDataLoading(false);
    };
    
    fetchProducts();
  }, []);

  return (
    <>
      <div className={styles.page}>
        <div className={styles.header}>
          <span>
            <h1>Products Page</h1>
            <p>Here you can manage your products.</p>
          </span>
          <Button onClick={() => setOpen(true)} type="primary" size="large" icon={<PlusOutlined />}>
            Add Button
          </Button>
        </div>
        <Table<Products>
          rowKey="id"
          columns={columns}
          dataSource={data}
          loading={dataLoading}
          scroll={{ y: 55 * 5, x: (width ?? 768) < 768 ? 400 : undefined }}
        />

        <AddProductModal open={open} setOpen={setOpen} />
      </div>
    </>
  );
}