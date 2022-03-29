import React from "react";
import { Table, Tabs } from "antd";

import styles from "./index.module.css";
import location from "../../assets/location.svg";

const { TabPane } = Tabs;

function Pricing() {
  function callback(key) {
    console.log(key);
  }

  const dataSource = [
    {
      key: "1",
      item: "Wheat",
      price: "$27.00/tonne",
      brand: "Syngenta",
    },
    {
      key: "2",
      item: "Barley",
      price: "$30.00/tonne",
      brand: "Biogrow",
    },
    {
      key: "3",
      item: "Oats",
      price: "$37.50/tonne",
      brand: "BASF",
    },
    {
      key: "4",
      item: "Lupins",
      price: "$27.00/tonne",
      brand: "Loveland",
    },
    {
      key: "5",
      item: "Canola (1.5mm - 1.8mm)",
      price: "$27.00/tonne",
      brand: "Various",
    },
    {
      key: "6",
      item: "Canola CC24 smaller machine (1.9mm to 2.0mm)",
      price: "$27.00/tonne",
      brand: "Nufarm",
    },
    {
      key: "7",
      item: "Field Peas",
      price: "$700.00/tonne",
      brand: "Bayer",
    },
    {
      key: "8",
      item: "Canola TS35 larger machine (1.9mm to 2.0mm)",
      price: "$27.00/tonne",
      brand: "Mewrce",
    },
  ];

  const columns = [
    {
      title: "Item",
      dataIndex: "item",
      key: "item",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "right",
    },
  ];

  const columns2 = [
    {
      title: () => <p className={styles.headerStyle}>Brand</p>,
      dataIndex: "brand",
      key: "brand",
      width: "30%",
    },
    {
      title: () => <p className={styles.headerStyle}>Product</p>,
      dataIndex: "item",
      key: "item",
      align: "left",
    },
    {
      title: () => <p className={styles.headerStyle}>Price</p>,
      dataIndex: "price",
      key: "price",
      align: "right",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <p className={styles.heading}>Pricing</p>
        </div>
        <div className={styles.postcodeWrap}>
          <img src={location} alt="icon" className={styles.location} />
          <input placeholder="Enter Post Code" className={styles.postcode} />
          <button className={styles.apply}>APPLY</button>
        </div>
      </div>
      <div className={styles.content}>
        <Tabs
          defaultActiveKey="1"
          onChange={callback}
          tabBarGutter={50}
          tabBarStyle={{ paddingLeft: 50 }}
        >
          <TabPane tab="&nbsp;&nbsp;Seed Grading&nbsp;&nbsp;" key="1">
            <div className={styles.contents}>
              <p>NOTE: SeedShield charge for cleaned seed tonnes only</p>
              <Table
                size="small"
                dataSource={dataSource}
                columns={columns}
                showHeader={false}
                pagination={false}
                bordered={false}
                rowClassName={(record, index) =>
                  index % 2 === 0 ? styles.tableLight : styles.tableDark
                }
              />
            </div>
          </TabPane>
          <TabPane tab="&nbsp;&nbsp;Seed Treatment&nbsp;&nbsp;" key="2">
            <div className={styles.contents}>
              <Table
                size="small"
                dataSource={dataSource?.slice(0, 4)}
                columns={columns}
                showHeader={false}
                pagination={false}
                bordered={false}
                rowClassName={(record, index) =>
                  index % 2 === 0 ? styles.tableLight : styles.tableDark
                }
              />
              <br />
              <p>
                Please note there will be a set up/relocation fee for any
                complete or partially complete job of 50 tonnes or less.
                <p />
                <p>
                  CC24 (smaller machine) $700
                  <br /> TS35 (larger machine) $1000
                </p>
                <p>
                  Line Fee – Any Line of Grain less than 15 tonne will be
                  charged at $150/line (excluding Canola Sizing and Speciality
                  Seeds)
                </p>
                <p>
                  Any chemical NOT supplied by SeedShield will incur an
                  additional charge of $5/L.
                </p>
                <p>
                  Diesel to operate SeedShield Generator is input required at
                  the completion of each job – charges apply if diesel not
                  available.
                </p>
              </p>
            </div>
          </TabPane>
          <TabPane tab="&nbsp;&nbsp;SeedShield Product&nbsp;&nbsp;" key="3">
            <div className={styles.contents}>
              <Table
                size="small"
                dataSource={dataSource}
                columns={columns2}
                pagination={false}
                bordered={false}
                rowClassName={(record, index) =>
                  index % 2 === 0 ? styles.tableLight : styles.tableDark
                }
              />
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default Pricing;
