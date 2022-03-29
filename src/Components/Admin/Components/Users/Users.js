import React, { useCallback, useEffect, useState } from "react";
import { Card, Col, Row, Input, Button, Dropdown, Menu, Avatar, Modal, message, Popconfirm, Spin, Pagination } from 'antd'
import { SearchOutlined, PlusOutlined, MailOutlined, LockOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';
import * as config from "../../../../Utils/config";

import "./styles/users.css"


const Users = () => {
    const [loading, setLoading] = useState(false);
    const [userList, setUserList] = useState();
    const [searchKeyword, setSearchKeyword] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [userModal, setUserModal] = useState({
        visible: false,
        modalType: "AddNewUser"
    });
    const [addUserForm, setAddUserForm] = useState({
        userId: "",
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const [fieldValidation, setFieldValidation] = useState({
        notFilled: false,
        validEmail: false,
        validPassword: false
    })
    const { userId, firstName, lastName, email, password } = addUserForm
    const { notFilled, validEmail, validPassword } = fieldValidation;
    const { modalType } = userModal;

    const success = (alertMessage) => {
        message.success(alertMessage);
    };

    const addUserFormHandler = (e) => {
        setFieldValidation({ ...fieldValidation, validPassword: false, validEmail: false, notFilled: false })
        setAddUserForm({ ...addUserForm, [e?.name]: e?.value })
    }

    const userFormSubmitHandler = useCallback((editUserId) => {
        const isAllFilled = firstName && lastName && email && password
        let regexEmail = /\S+@\S+\.\S+/;
        // TODO: have to make the max limit to 12 here
        let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
        if (isAllFilled) {
            if (!regexEmail.test(email)) {
                setFieldValidation({ ...fieldValidation, validEmail: true })
                return;
            }
            if (!passwordRegex.test(password)) {
                console.log("password", passwordRegex.test(password))
                setFieldValidation({ ...fieldValidation, validPassword: true })
                return;
            }

            // Form Submission
            setLoading(true)
            if (modalType === "EditUser") {
                fetch(`${config.BASE_URL}/users/${editUserId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem(
                            "access_token"
                        )}`

                    },
                    body: JSON.stringify({ userId, firstName, lastName, email, password })
                })
                    .then(res => res.json())
                    .then(
                        setAddUserForm({ ...addUserForm, userId: "", firstName: "", lastName: "", email: "", password: "" }),
                        setUserModal({ ...userModal, visible: false }),
                        success("Added user successfully")
                    );
            } else {
                fetch(`${config.BASE_URL}/users`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem(
                            "access_token"
                        )}`

                    },
                    body: JSON.stringify({ firstName, lastName, email, password })
                })
                    .then(res => res.json())
                    .then(
                        // setLoading(false),
                        setAddUserForm({ ...addUserForm, userId: "", firstName: "", lastName: "", email: "", password: "" }),
                        setUserModal({ ...userModal, visible: false }),
                        success("Added user successfully")
                    );
            }

        } else {
            setFieldValidation({ ...fieldValidation, notFilled: true })
            return;
        }
    }, [addUserForm, loading])


    // Delete User
    const deleteUser = useCallback((user) => {
        setLoading(true)
        fetch(`${config.BASE_URL}/users/${user}`, {
            method: 'Delete',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem(
                    "access_token"
                )}`
            },
        })
            .then(res => {
                res.json()
                setLoading(false)
            })
            .catch(err => console.log(err))
        success("Deleted user successfully")
    }, [])

    const editUser = (userId) => {
        fetch(`${config.BASE_URL}/users/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem(
                    "access_token"
                )}`
            },
        })
            .then(res => res.json())
            .then(res => {
                setAddUserForm({ ...addUserForm, userId: res?.id, firstName: res?.firstName, lastName: res?.lastName, email: res?.email, password: res?.password })
                setUserModal({ ...userModal, visible: !userModal.visible, modalType: "EditUser" })
            });


    }

    const menu = (user) => {
        return (
            <Menu key={user}>
                <>
                    <Menu.Item key={user} icon={<EditOutlined />} onClick={() => { editUser(user) }}>
                        Edit
                    </Menu.Item>
                    <Popconfirm placement="topLeft" title="Are you sure to delete this user ?" onConfirm={() => { deleteUser(user) }} okText="Yes" cancelText="No">
                        <Menu.Item icon={<DeleteOutlined />} key={user} >
                            Delete
                        </Menu.Item>
                    </Popconfirm>
                </>
            </Menu >
        )
    }


    // fetching User
    useEffect(() => {
        fetch(`https://api-seedshielddev.perfomatix.online/api/users?limit=9&offset=0&page=${currentPage}&?s={"$or" : [{"firstName": {"$cont":"Lovin"}}, {"email": {"$cont":"Lovin"}}]}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVyLmFkbWluQGdtYWlsLmNvbSIsImlkIjoiZGRhNmI0MWQtMmFhOC00ZGVlLWIwZDctOGQzNDFlYzRlNTU5Iiwicm9sZSI6IlNVUEVSX0FETUlOIiwiaWF0IjoxNjQ4NDU2MjgyfQ.S1rldLj14wmSX_U72dOji5Ei0Ss5z4JsPffnE-2UPKg'
            },
        })
            .then(res => res.json())
            .then(res => {
                setUserList(res)
                setLoading(false)
            });
    }, [userFormSubmitHandler, searchKeyword, currentPage, deleteUser, loading])



    return (
        <div className="UserWrapper">
            <div className="userHeader">
                <Modal visible={userModal.visible}
                    footer={null}
                    okText="Add"
                    width={450}
                    className="userModal"
                    onCancel={() => {
                        setUserModal({ ...userModal, visible: false, modalType: "addUser" })
                        setAddUserForm({ ...addUserForm, userId: "", firstName: "", lastName: "", email: "", password: "" })
                    }}

                >
                    <div className="addUserModal">
                        <h1>{modalType === "EditUser" ? "Edit user" : "New User "}</h1>
                        <div className="userName">
                            <div>
                                <label>First Name</label><br />
                                <Input placeholder="Enter first name" name="firstName" onChange={(e) => { addUserFormHandler(e.target) }} value={firstName} />
                            </div>
                            <div>
                                <label>Last Name</label><br />
                                <Input placeholder="Enter last name" name="lastName" onChange={(e) => { addUserFormHandler(e.target) }} value={lastName} />
                            </div>
                        </div>
                        <div className="loginUserInputs">
                            <label>Email</label>
                            <Input placeholder="Enter email" name="email" onChange={(e) => { addUserFormHandler(e.target) }} value={email} />
                            {validEmail ? <p className="fillwarn">*Please enter a valid email</p> : ""}
                        </div>
                        <div className="loginUserInputs">
                            <label>Password</label>
                            <Input.Password placeholder="Input password" onChange={(e) => { addUserFormHandler(e.target) }} name="password" value={password} />
                            {validPassword ? <p className="fillwarn">Your password must be 6 -12 characters and include at least one uppercase, one lowercase and a number</p> : ""}
                        </div>
                        {
                            notFilled ? <p className="fillwarn">*Please fill all fields before submission</p> : ""
                        }
                        <div className="actionButton">
                            <button className="cancelButton"
                                onClick={() => {
                                    setUserModal({ ...userModal, visible: false, modalType: "addUser" })
                                    setAddUserForm({ ...addUserForm, userId: "", firstName: "", lastName: "", email: "", password: "" })
                                }}

                            >Cancel</button>
                            <button className="addButton" disabled={loading} onClick={() => { userFormSubmitHandler(userId || "") }}>{modalType === "EditUser" ? "Edit" : "Add "}</button>
                        </div>
                    </div>
                </Modal>
                <div className="WelcomeCaption">
                    <p> Welcome <span>Charles Xavier</span></p>
                </div>
                <div className="user-header-bar">
                    <span className="user-label">Users</span>
                    <div className="user-header-bar-actions">
                        <Input
                            className="search-input"
                            placeholder="Search users..."
                            onChange={(e) => { setSearchKeyword(e.target.value) }}
                            prefix={<SearchOutlined className="searchinput-icon" />}
                        />
                        <Button className="UserAddButton"
                            onClick={() => {
                                setUserModal({ ...userModal, visible: !userModal.visible, modalType: "AddNewUser" })
                            }}
                        >
                            <PlusOutlined style={{
                                strokeWidth: "50",
                                stroke: "white",
                                fontSize: "12px",
                            }}
                                className="plusIcon" />
                            <span className="add">NEW USER</span>
                        </Button>
                    </div>
                </div >
            </div >
            <div className="userListWrapper">
                {loading ? <Spin className="spinner" /> : userList ?
                    <div className="site-card-wrapper">
                        <Row gutter={16}>
                            {userList?.data?.map((item, index) => {
                                return (
                                    <Col span={8} key={index}>
                                        <Card bordered={true} className="userCard">
                                            <div className="cardTopBar">
                                                <div className="userInfo">
                                                    <Avatar>{(item.firstName).charAt(0) || "A"}</Avatar>
                                                    <p>{`${item?.firstName || ""} ${item?.lastName || ""}`}</p>
                                                </div>
                                                <Dropdown.Button
                                                    className="userDropdown"
                                                    onClick={() => { }}
                                                    overlay={menu(item.id)}
                                                    bordered={false} />
                                            </div>
                                            <div className="cardContent">
                                                <MailOutlined style={{
                                                    stroke: "#212121",
                                                    fontSize: "17px",
                                                    color: "#212121",
                                                    opacity: "0.5",
                                                    marginLeft: "8px"

                                                }} className="itemIcon" />
                                                <div className="items">
                                                    <span>Email</span>
                                                    <p>{item.email || ""}</p>
                                                </div>
                                            </div>
                                            <div className="cardContent">
                                                <LockOutlined style={{
                                                    stroke: "#212121",
                                                    fontSize: "17px",
                                                    color: "#212121",
                                                    opacity: "0.5",
                                                    marginLeft: "8px"

                                                }} className="itemIcon" />
                                                <div className="items">
                                                    <span>Password</span>
                                                    <p>*********</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>)
                            })}
                        </Row>
                    </div> : <Spin className="spinner" />}
            </div >
            <Pagination
                current={userList?.page}
                hideOnSinglePage={true}
                pageSize={9}
                total={userList?.total}
                onChange={(page) => {
                    setCurrentPage(page)
                    setLoading(true)
                }} />
        </div >
    )
}

export default Users;


