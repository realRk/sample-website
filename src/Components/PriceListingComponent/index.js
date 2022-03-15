import { Collapse, Table } from "antd";
import styles from "./index.module.css";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const PriceListingComponent = () => {
  const { Panel } = Collapse;
  const dataSource = [
    {
      key: "1",
      item: "Wheat",
      price: "$27.00/tonne",
    },
    {
      key: "2",
      item: "Barley",
      price: "$30.00/tonne",
    },
    {
      key: "3",
      item: "Oats",
      price: "$37.50/tonne",
    },
    {
      key: "4",
      item: "Lupins",
      price: "$27.00/tonne",
    },
    {
      key: "5",
      item: "Canola (1.5mm - 1.8mm)",
      price: "$27.00/tonne",
    },
    {
      key: "6",
      item: "Canola CC24 smaller machine (1.9mm to 2.0mm)",
      price: "$27.00/tonne",
    },
    {
      key: "7",
      item: "Field Peas",
      price: "$700.00/tonne",
    },
    {
      key: "8",
      item: "Canola TS35 larger machine (1.9mm to 2.0mm)",
      price: "$27.00/tonne",
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
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.headerText}>CURRENT PRICELIST</p>
      </div>
      <div className={styles.content}>
        <Collapse
          defaultActiveKey={["1"]}
          //   onChange={callback}
          bordered={false}
          expandIconPosition={"right"}
          expandIcon={({ isActive }) =>
            isActive ? <MinusOutlined /> : <PlusOutlined />
          }
        >
          <Panel header="Seed Gradling" key="1">
            <div>
              <p className={styles.note}>
                NOTE: SeedShield charge for cleaned seed tonnes only
              </p>
              <Table
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
          </Panel>
          <Panel header="SeedSheild Products" key="2">
            <div>
              <p className={styles.note}>
                NOTE: SeedShield charge for cleaned seed tonnes only
              </p>
              <Table
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
          </Panel>
          <Panel header="Treatment" key="3">
            <div>
              <p className={styles.note}>
                NOTE: SeedShield charge for cleaned seed tonnes only
              </p>
              <Table
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
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default PriceListingComponent;
