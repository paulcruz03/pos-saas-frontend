import { useState } from "react";
import { Modal, Form, Input, InputNumber } from 'antd';

type FieldType = {
  name?: string;
  description?: string;
  price?: string;
  cost?: string;
  sku?: string;
  stock?: string;
};

export default function AddProductModal({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={() => setOpen(false)}
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
    </>
  )
}