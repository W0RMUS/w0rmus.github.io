import { Table } from 'antd';

function InformationTable() {
  const dataSource = [
    {
      key: '1',
      name: 'Markus Einan',
      age: 28,
      from: 'Sørumsand'
    }
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'From',
      dataIndex: 'from',
      key: 'from'
    }
  ];

  return <Table columns={columns} dataSource={dataSource} pagination={false} />;
}

export default InformationTable;
