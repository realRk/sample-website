import React, { useState } from "react";
import { Table, Tag } from "antd";

import styles from "./index.module.css";

const columns = [
  {
    title: () => <p className={styles.tableHeader}>JOB#</p>,
    dataIndex: "job",
    key: "job",
    render: (text) => <p className={styles.tableCell}>{text}</p>,
  },
  {
    title: () => <p className={styles.tableHeader}>STATE</p>,
    dataIndex: "state",
    key: "state",
    render: (text) => <p className={styles.tableCell}>{text}</p>,
  },
  {
    title: () => <p className={styles.tableHeader}>BOOKED&nbsp;ON</p>,
    dataIndex: "booked",
    state: "booked",
    render: (text) => <p className={styles.tableCell}>{text}</p>,
  },
  {
    title: () => <p className={styles.tableHeader}>STATUS</p>,
    dataIndex: "status",
    state: "status",
    render: (text) => (
      <>
        {text === "Received" && (
          <Tag>
            <p className={styles.tag}>{text?.toUpperCase()}</p>
          </Tag>
        )}
        {text === "UnAssigned" && (
          <Tag color={"#E8E8E8"}>
            <p className={styles.tagUnAssigned}>{text?.toUpperCase()}</p>
          </Tag>
        )}
        {text === "Assigned" && (
          <Tag color="#EFF9E0">
            <p className={styles.tagAssigned}>{text?.toUpperCase()}</p>
          </Tag>
        )}
        {text === "Completed" && (
          <Tag color="#7ECC01">
            <p className={styles.tag}>{text?.toUpperCase()}</p>
          </Tag>
        )}
      </>
    ),
  },
];
const data = [
  {
    key: "1",
    job: 238,
    state: "Victoria",
    booked: "17 Oct 2021",
    status: "Received",
  },
  {
    key: "2",
    job: 241,
    state: "Western Australia",
    booked: "11 Nov 2021",
    status: "UnAssigned",
  },
  {
    key: "3",
    job: 247,
    state: "South Australia",
    booked: "01 Jan 2022",
    status: "Assigned",
  },
  {
    key: "4",
    job: 268,
    state: "NSW",
    booked: "05 Feb 2022",
    status: "Completed",
  },
];

const rowSelection = {
  columnTitle: (selectedRowKeys) =>
    selectedRowKeys.length > 0 ? <div /> : <></>,
};

function MyJobsList() {
  const [selectedRowKeys, setSelectedKeys] = useState([]);
  const onSelectChange = (selectedRowKeys) => {
    if (selectedRowKeys.length > 1) {
      const lastSelectedRowIndex =
        selectedRowKeys?.[selectedRowKeys?.length - 1];
      setSelectedKeys([lastSelectedRowIndex]);
    } else {
      setSelectedKeys(selectedRowKeys);
    }
  };
  return (
    <div className={styles.wrapper}>
      <Table
        rowSelection={{
          type: "checkbox",
          selectedRowKeys,
          onChange: onSelectChange,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
}

export default MyJobsList;
