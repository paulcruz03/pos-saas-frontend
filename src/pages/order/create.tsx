import { useEffect, useState } from "react";
import { Button, Divider, Drawer, Modal, Table, Tag, type TableProps } from "antd";
import type { Products } from "../../types";
import { getProducts } from "../../lib/data";
import useWindowDimensions from "../../hooks/screen";

export default function CreateOrderPage() {
  const [dataLoading, setDataLoading] = useState(true);
  const [openOrderDetails, setOpenOrderDetails] = useState(false);
  const [productList, setProductList] = useState<Products[]>([]);
  const [productOrders, setProductOrders] = useState<{ count: number; item: Products }[]>([]);
  const [productAddPrompt, setProductAddPrompt] = useState<{ isOpen: boolean; product: Products | null }>({ isOpen: false, product: null });
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
      title: 'Stock',
      key: 'stock',
      dataIndex: 'stock',
    }
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
      setProductList(productsData);
      setDataLoading(false);
    };
    
    fetchProducts();
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <span>
          <h1>Create Order</h1>
          <p>Here you can create a new order by selecting products.</p>
        </span>
        <Button onClick={() => setOpenOrderDetails(true)} type="primary">
          View order details
          <Tag className="m-0 p-0" color="red">{productOrders.length}</Tag>
        </Button>
      </div>
      <Divider size="middle" />
      
      <Table<Products>
        rowKey="id"
        columns={columns}
        dataSource={productList}
        loading={dataLoading}
        onRow={(record) => ({
          onClick: () => setProductAddPrompt({ isOpen: true, product: record}),
        })}
        scroll={{ y: 55 * 5, x: (width ?? 768) < 768 ? 400 : undefined }}
      />

      <Modal
        title={`Add Product: ${productAddPrompt.product?.name}`}
        open={productAddPrompt.isOpen}
        onOk={() => {
          setProductOrders((prev) => [...prev, { count: 1, item: productAddPrompt.product! }]);
          setProductAddPrompt({ isOpen: false, product: null });
        }}
        onCancel={() => setProductAddPrompt({ isOpen: false, product: null })}
      >
      </Modal>

      <Drawer
        title="Order Details"
        placement="bottom"
        closable={false}
        onClose={() => setOpenOrderDetails(false)}
        open={openOrderDetails}
        getContainer={false}
      >
        <ol>
          {productOrders.map((order, index) => (
            <li key={index}>
              <span>{order.item.name} - {order.count}</span>
              <Button
                type="link"
                onClick={() => setProductOrders((prev) => prev.filter((_, i) => i !== index))}
              >
                Remove
              </Button>
            </li>
          ))}
        </ol>
      </Drawer>
    </>
  )
}