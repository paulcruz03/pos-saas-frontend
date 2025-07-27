import { useEffect, useState } from "react";
import type { Devices } from "../../types";
import { Table, type TableProps } from "antd";
import { getDevices } from "../../lib/data";

export default function ManageDevices() {
  const [data, setData] = useState<Devices[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const deviceData = await getDevices();
      setData(deviceData);
      setDataLoading(false);
    };
    
    fetchUsers();
  }, []);
  
  const columns: TableProps<Devices>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'name',
      dataIndex: 'Name',
      key: 'name',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Active Device',
      dataIndex: 'device_id',
      key: 'device_id',
    }
  ];
  
  return (
    <div className="p-2">
      <h3>Manage Devices</h3>

      <Table<Devices> rowKey="id" columns={columns} dataSource={data} loading={dataLoading} />
    </div>
  )
}