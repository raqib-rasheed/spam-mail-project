import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";
import _ from "lodash";
import { columns } from "./utils/tableComponentConstants";
import SideBar from "./Sidebar";

export default function TableComponent() {
  const [tableData, handleTableData] = useState([]);
  useEffect(() => {
    async function getTableData() {
      const { data } = await axios.get("/users/all");
      if (!_.isEmpty(data)) {
        console.log(data);
        handleTableData(data);
      }
    }
    getTableData();
  }, []);

  const rowSelection = {
    selectedRowKeys: [],
    onChange: () => {},
  };
  return (
    <div className="mainSection">
      <SideBar />
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={tableData}
      />
    </div>
  );
}
