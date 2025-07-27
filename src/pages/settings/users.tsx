import { useEffect, useState } from "react";
import type { Users } from "../../types";
import { Table, type TableProps } from "antd";
import { getUsers } from "../../lib/data";

export default function ManageUsers() {
  const [data, setData] = useState<Users[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUsers();
      setData(usersData);
      setDataLoading(false);
    };
    
    fetchUsers();
  }, []);
  
  const columns: TableProps<Users>['columns'] = [
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
      <h3>Manage Users</h3>

      <Table<Users> rowKey="id" columns={columns} dataSource={data} loading={dataLoading} />
    </div>
  )
}