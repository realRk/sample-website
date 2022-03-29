/* eslint-disable jsx-a11y/no-distracting-elements */
import { SearchOutlined } from "@ant-design/icons";
import { Col, Pagination, Row, Select, Table, Tag } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./customer.module.css";

export default function CustomersList() {
  const navigate = useNavigate();
  const columns = [
    {
      title: () => <p className={styles.tableHeader}>SL. NO.</p>,
      dataIndex: "key",
      key: "key",
      render: (text) => <p className={styles.tableCell}>{text}</p>,
    },
    {
      title: () => <p className={styles.tableHeader}>NAME</p>,
      dataIndex: "name",
      key: "name",
      render: (text) => <p className={styles.tableCell}>{text}</p>,
    },
    {
      title: () => <p className={styles.tableHeader}>TRADING NAME</p>,
      dataIndex: "trending",
      state: "trending",
      render: (text) => <p className={styles.tableCell}>{text}</p>,
    },
    {
      title: () => <p className={styles.tableHeader}>POST CODE</p>,
      dataIndex: "postcode",
      state: "postcode",
    },
    {
      title: () => <p className={styles.tableHeader}>STATE</p>,
      dataIndex: "state",
      state: "state",
    },
    {
      title: () => <p className={styles.tableHeader}>PHONE</p>,
      dataIndex: "phone",
      state: "phone",
    },
    {
      title: () => <p className={styles.tableHeader}>EMAIL</p>,
      dataIndex: "email",
      state: "email",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Doe",
      trending: "RM Rookes",
      postcode: "3500",
      state: "Victoria",
      phone: "+97456622287",
      email: "johndoe@gmail.com",
    },
    {
      key: "2",
      name: "John Doe",
      trending: "RM Rookes",
      postcode: "3500",
      state: "Victoria",
      phone: "+97456622287",
      email: "johndoe@gmail.com",
    },
    {
      key: "3",
      name: "John Doe",
      trending: "RM Rookes",
      postcode: "3500",
      state: "Victoria",
      phone: "+97456622287",
      email: "johndoe@gmail.com",
    },
    {
      key: "4",
      name: "John Doe",
      trending: "RM Rookes",
      postcode: "3500",
      state: "Victoria",
      phone: "+97456622287",
      email: "johndoe@gmail.com",
    },
    {
      key: "5",
      name: "John Doe",
      trending: "RM Rookes",
      postcode: "3500",
      state: "Victoria",
      phone: "+97456622287",
      email: "johndoe@gmail.com",
    },
    {
      key: "6",
      name: "John Doe",
      trending: "RM Rookes",
      postcode: "3500",
      state: "Victoria",
      phone: "+97456622287",
      email: "johndoe@gmail.com",
    },
    {
      key: "7",
      name: "John Doe",
      trending: "RM Rookes",
      postcode: "3500",
      state: "Victoria",
      phone: "+97456622287",
      email: "johndoe@gmail.com",
    },
    {
      key: "8",
      name: "John Doe",
      trending: "RM Rookes",
      postcode: "3500",
      state: "Victoria",
      phone: "+97456622287",
      email: "johndoe@gmail.com",
    },
    {
      key: "9",
      name: "John Doe",
      trending: "RM Rookes",
      postcode: "3500",
      state: "Victoria",
      phone: "+97456622287",
      email: "johndoe@gmail.com",
    },
    {
      key: "10",
      name: "John Doe",
      trending: "RM Rookes",
      postcode: "3500",
      state: "Victoria",
      phone: "+97456622287",
      email: "johndoe@gmail.com",
    },
    {
      key: "11",
      name: "John Doe",
      trending: "RM Rookes",
      postcode: "3500",
      state: "Victoria",
      phone: "+97456622287",
      email: "johndoe@gmail.com",
    },
  ];
  const { Option } = Select;
  return (
    <div className={styles.bookingWrapper}>
      <div>
        <marquee width="100%" direction="left" height="auto" bgcolor="#015092">
          <p className={styles.marqueeText}>
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Enim ad minim veniam, quis no
          </p>
        </marquee>
        <div className={styles.header}>
          <div className={styles.div1}>
            <p className={styles.head1}>Customers List</p>
          </div>
          <div className={styles.div2}>
            <div className={styles.searchWrap}>
              <div>
                <SearchOutlined style={{ color: "#fff" }} />
              </div>
              <div>
                <input
                  placeholder="Search customers by name…"
                  className={styles.searchInput}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <Row>
          <Col span={24}>
            <div className={styles.form}>
              <Table columns={columns} dataSource={data} pagination={false} />
              <div className={styles.paginationWrap}>
                <Pagination current={1} total={50} />
                <p className={styles.footerText}>Showing 10 out of 52</p>
                <div className={styles.paginationWrap}>
                  <Select defaultValue="10">
                    <Option value="10">10</Option>
                    <Option value="20">20</Option>
                    <Option value="30">30</Option>
                    <Option value="40">40</Option>
                    <Option value="50">50</Option>
                  </Select>
                  <p className={styles.footerText}>Rows per page</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
