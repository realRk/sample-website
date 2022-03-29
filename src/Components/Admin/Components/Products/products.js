import React, { useState, useEffect } from "react";
import {
  Table,
  Switch,
  Input,
  Select,
  Button,
  Form,
  InputNumber,
  Spin,
} from "antd";
import "./products.css";
import { SearchOutlined } from "@ant-design/icons";
import { useAdminUiContext } from "../../adminUIContext";
const { Option } = Select;

const Products = () => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState(null);
  const [newProductClicked, setNewProductClicked] = useState(false);
  const [newProductSlNo, setNewSlNo] = useState("");
  const [tableData, setTableData] = useState([]);
  //context
  const { state, createProduct, getProducts, updateProduct, deleteProduct } =
    useAdminUiContext();
  let { brands, products, states, user } = state;
  useEffect(() => {
    setTableData(products.data);
  }, [products]);
  //tableData
  const isEditing = (record) => record.id === editingKey;
  const deterMineComponentToDisplay = (dataIndex, record) => {
    switch (dataIndex) {
      case "brandId":
        return (
          <Select>
            {brands &&
              brands.data &&
              brands.data.map((data) => (
                <Option value={data.id}>{data.name}</Option>
              ))}
          </Select>
        );
      case "stateId":
        return (
          <Select>
            {states &&
              states?.data?.map((data) => (
                <Option value={data.id}>{data.address}</Option>
              ))}
          </Select>
        );
      case "price":
        return <InputNumber />;
      case "isActive":
        return (
          <div className="action-menu">
            {/* {!(newProductClicked) && (
              <div className="active-div">
                <Switch
                  // onChange={(value) => {
                  //   changeActiveStatus(record, value);
                  // }}
                  defaultChecked={record.isActive ? true : false}
                />
                <span> {record.isActive ? "Active" : "In-Active"}</span>
              </div>
            )} */}

            <div className="action-button-group">
              {(newProductClicked && newProductSlNo === record.id) ||
              editingKey === record.id ? (
                <React.Fragment>
                  <div
                    onClick={newProductClicked?saveProduct:updateProductClicked}
                    className="save-button-div"
                    type="submit"
                  >
                    <img
                      alt="edit"
                      src={require("../../../../assets/check.png")}
                      className="save-button"
                    />
                  </div>
                  <div className="cancel-button-div" onClick={cancelNewEntity}>
                    <img
                      alt="cancel"
                      src={require("../../../../assets/close-white.png")}
                      className="cancel-button"
                    />
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Button
                    onClick={() => edit(record)}
                    className="edit-button-div"
                    disabled={newProductClicked || editingKey}
                  >
                    <img
                      alt="edit"
                      src={require("../../../../assets/edit.png")}
                      className="edit-button"
                    />
                  </Button>
                  <Button
                    onClick={() => deleteButtonClicked(record)}
                    className="delete-button-div"
                    disabled={newProductClicked || editingKey}
                  >
                    <img
                      alt="delete"
                      src={require("../../../../assets/trash.png")}
                      className="delete-button"
                    />
                  </Button>
                </React.Fragment>
              )}
            </div>
          </div>
        );
      default:
        return <Input />;
    }
  };
  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = deterMineComponentToDisplay(dataIndex, record);
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };
  const edit = (record) => {
    form.setFieldsValue({
      ...record,
    });
    setEditingKey(record.id);
  };
  const callBackFunctionForSave = () => {
    getProducts();
    setNewProductClicked(false);
    setEditingKey(null);
  };
  const saveProduct = async () => {
    const row = await form.validateFields();
    if (row.errorFields) {
      return;
    }
    let { brandId, name, price, stateId } = row;
    let params = {
      brandId: brandId,
      name: name,
      price: price,
      stateId: stateId,
    };
    createProduct(params, callBackFunctionForSave);
  };
  const changeActiveStatus = (record, flag) => {
    let { brandIdProvided, name, price, stateIdProvided, id } = record;
    let params = {
      brandId: brandIdProvided,
      name: name,
      price: price,
      stateId: stateIdProvided,
      isActive: flag,
    };
    updateProduct(params, id, callBackFunctionForSave);
  };
  const updateProductClicked = async () => {
    // console.log(isActive.value)
    const row = await form.validateFields();
    if (row.errorFields) {
      return;
    }
    let { brandId, name, price, stateId, isActive } = row;
    let params = {
      brandId: brands?.data?.filter((item) => item.name === brandId)[0]?.id,
      name: name,
      price: price,
      stateId: states?.data?.filter((item) => item.address === stateId)[0]?.id,
      isActive: isActive,
    };
    updateProduct(params, editingKey, callBackFunctionForSave);
  };
  const deleteButtonClicked = ({ id }) => {
    deleteProduct(id, callBackFunctionForSave);
  };
  const columns = [
    {
      title: "SL NO",
      width: 80,
      dataIndex: "key",
      key: "id",
      fixed: "left",
    },
    {
      title: "PRODUCT",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
      editable: true,
    },
    {
      title: "BRAND",
      dataIndex: "brandId",
      key: "brandId",
      editable: true,
      width: 100,
    },
    {
      title: "STATE",
      dataIndex: "stateId",
      key: "stateId",
      editable: true,
      width: 100,
    },
    {
      title: "PRICE DISPLAYED",
      dataIndex: "price",
      key: "price",
      width: 100,
      editable: true,
    },
    {
      title: "UNITS",
      dataIndex: "units",
      key: "units",
      editable: true,
      width: 100,
    },
    {
      title: "VOLUME",
      dataIndex: "volume",
      key: "volume",
      editable: true,
      width: 100,
    },
    {
      title: "STATUS",
      key: "isActive",
      dataIndex: "isActive",
      // editable: true,
      fixed: "right",
      width: 300,
      render: (_, record) => (
        <div className="action-menu">
          {!(newProductClicked && newProductSlNo === record.id||editingKey ===record.id) && (
            <div className="active-div">
              <Switch
                onChange={(value) => {
                  changeActiveStatus(record, value);
                }}
                defaultChecked={record.isActive ? true : false}
              />
              <span> {record.isActive ? "Active" : "In-Active"}</span>
            </div>
          )}

          <div className="action-button-group">
            {(newProductClicked && newProductSlNo === record.id) ||
            editingKey === record.id ? (
              <React.Fragment>
                <div
                  onClick={
                    newProductClicked ? saveProduct : updateProductClicked
                  }
                  className="save-button-div"
                  type="submit"
                >
                  <img
                    alt="edit"
                    src={require("../../../../assets/check.png")}
                    className="save-button"
                  />
                </div>
                <div className="cancel-button-div" onClick={cancelNewEntity}>
                  <img
                    alt="cancel"
                    src={require("../../../../assets/close-white.png")}
                    className="cancel-button"
                  />
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Button
                  onClick={() => edit(record)}
                  className="edit-button-div"
                  disabled={newProductClicked || editingKey}
                >
                  <img
                    alt="edit"
                    src={require("../../../../assets/edit.png")}
                    className="edit-button"
                  />
                </Button>
                <Button
                  onClick={() => deleteButtonClicked(record)}
                  className="delete-button-div"
                  disabled={newProductClicked || editingKey}
                >
                  <img
                    alt="delete"
                    src={require("../../../../assets/trash.png")}
                    className="delete-button"
                  />
                </Button>
              </React.Fragment>
            )}
          </div>
        </div>
      ),
    },
  ];

  const onNewProductClicked = () => {
    let newData = {
      id: 0,
      sl_no: 0,
      name: "",
      brandId: "",
      stateId: "",
      price: "",
      units: "",
      volume: "",
    };
    let newTableData = [newData, ...tableData];
    setTableData(newTableData);
    setNewProductClicked(true);
    setNewSlNo(newData.sl_no);
    edit(newData);
  };

  const cancelNewEntity = () => {
    if (newProductClicked) {
      setNewSlNo("");
      setEditingKey(null);
      let updatedData = tableData;
      updatedData.shift();
      setTableData([...updatedData]);
      setNewProductClicked(false);
    } else {
      setEditingKey(null);
    }
  };
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType:
          col.dataIndex === "brand" || col.dataIndex === "region"
            ? "select"
            : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  const onStatusFilterChange = (value) => {
    getProducts({ isActive: value });
  };
  useEffect(() => {
    let typingTimer; //timer identifier
    let search = document.getElementById("search-field");
    search.addEventListener("keyup", () => {
      clearTimeout(typingTimer);
      if (search.value) {
        typingTimer = setTimeout(() => {
            getProducts({search:search.value})
        }, 1000);
      }else{
        getProducts()      }
    });
  }, []);
  return (
    <div>
      {/* <Spin/> */}
      <div className="welocome-name-div">
        <span className="welcome-name"> Welcome Charles Xavier </span>
      </div>
      <div className="products-header-bar">
        <span className="products-label">Products</span>
        <div className="products-header-bar-actions">
          <Input
            id="search-field"
            className="search-input"
            placeholder="Search product..."
            prefix={<SearchOutlined className="searchinput-icon" />}
          />
          <Select
            className="select-drop"
            placeholder="Status"
            allowClear={true}
            onSelect={onStatusFilterChange}
            onClear={getProducts}
          >
            <Option value={1}>Active</Option>
            <Option value={0}>In-Active</Option>
          </Select>
          <Button
            disabled={newProductClicked || editingKey}
            className="new-product-button"
            onClick={onNewProductClicked}
          >
            NEW PRODUCT
          </Button>
        </div>
      </div>
      <Form form={form} component={false} onSubmit={saveProduct}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          columns={mergedColumns}
          dataSource={tableData?.map((item, index) => {
            return {
              key: index + 1,
              id: item.id,
              name: item.name,
              brandIdProvided: item.brandId,
              brandId: brands?.data?.filter((it) => it.id === item.brandId)[0]
                ?.name,
              price: item.price,
              stateId: states?.data?.filter((it) => it.id === item.stateId)[0]
                ?.address,
              stateIdProvided: item.stateId,
              isActive: item.isActive,
            };
          })}
          className="product-table"
          scroll={{ x: 760, y: 450 }}
          key="sl_no"
        />
      </Form>
    </div>
  );
};
export default Products;
