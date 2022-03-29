import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import { Card, Col, Row, Input, Button, Dropdown, Menu, Avatar, Modal, message, Popconfirm } from 'antd'
import { SearchOutlined, PlusOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";

import "./styles/users.css"


const Users = () => {
    const [isAddUserModalVisible, setIsAddUserModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userList, setUserList] = useState()
    const [addUserForm, setAddUserForm] = useState({
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
    const { firstName, lastName, email, password } = addUserForm
    const { notFilled, validEmail, validPassword } = fieldValidation;

    const success = (alertMessage) => {
        message.success(alertMessage);
    };

    const addUserFormHandler = (e) => {
        setFieldValidation({ ...fieldValidation, validPassword: false, validEmail: false, notFilled: false })
        setAddUserForm({ ...addUserForm, [e?.name]: e?.value })
    }

    const addUserHandler = () => {
        const isAllFilled = firstName && lastName && email && password
        let regexEmail = /\S+@\S+\.\S+/;
        ;
        if (isAllFilled) {
            if (!regexEmail.test(email)) {
                setFieldValidation({ ...fieldValidation, validEmail: true })
                return;
            }
            if (password.length < 4) {
                setFieldValidation({ ...fieldValidation, validPassword: true })
                return;
            }

            // Form Submission
            setLoading(true)
            fetch('https://api-seedshielddev.perfomatix.online/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVyLmFkbWluQGdtYWlsLmNvbSIsImlkIjoiZGRhNmI0MWQtMmFhOC00ZGVlLWIwZDctOGQzNDFlYzRlNTU5Iiwicm9sZSI6IlNVUEVSX0FETUlOIiwiaWF0IjoxNjQ4NDU2MjgyfQ.S1rldLj14wmSX_U72dOji5Ei0Ss5z4JsPffnE-2UPKg'

                },
                body: JSON.stringify({ firstName, lastName, email, password })
            })
                .then(res => res.json())
                .then(
                    setLoading(false),
                    setAddUserForm({ ...addUserForm, firstName: "", lastName: "", email: "", password: "" }),
                    setIsAddUserModalVisible(false),
                    success("Added user successfully")
                );


        } else {
            setFieldValidation({ ...fieldValidation, notFilled: true })
            return;
        }
    }

    // Deleting Users
    const deleteUser = (user) => {
        fetch(`https://api-seedshielddev.perfomatix.online/api/users/${user}`, {
            method: 'Delete',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVyLmFkbWluQGdtYWlsLmNvbSIsImlkIjoiZGRhNmI0MWQtMmFhOC00ZGVlLWIwZDctOGQzNDFlYzRlNTU5Iiwicm9sZSI6IlNVUEVSX0FETUlOKiwisWF0IjoxNjQ4NDU2MjgyfQ.S1rldLj14wmSX_U72dOji5Ei0Ss5z4JsPffnE-2UPKg'
            },
        })
            .then(res => res.json())
        success("Deleted user sucessfully")
            .catch(err => console.log(err))
    }


    const menu = (user) => {
        return (
            <Menu key={user}>
                <>
                    <Menu.Item key="2">
                        Edit
                    </Menu.Item>
                    <Popconfirm placement="topLeft" title="Are you sure to delete this user ?" onConfirm={() => { deleteUser(user) }} okText="Yes" cancelText="No">
                        <Menu.Item key={user} >
                            Delete
                        </Menu.Item>
                    </Popconfirm>

                </>
            </Menu >
        )
    }
    // fetching Users
    useEffect(() => {
        fetch('https://api-seedshielddev.perfomatix.online/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVyLmFkbWluQGdtYWlsLmNvbSIsImlkIjoiZGRhNmI0MWQtMmFhOC00ZGVlLWIwZDctOGQzNDFlYzRlNTU5Iiwicm9sZSI6IlNVUEVSX0FETUlOIiwiaWF0IjoxNjQ4NDU2MjgyfQ.S1rldLj14wmSX_U72dOji5Ei0Ss5z4JsPffnE-2UPKg'
            },
        })
            .then(res => res.json())
            .then(res => setUserList(res));

    }, [addUserForm, deleteUser])


    return (
        <div className="UserWrapper">
            <div className="userHeader">
                <div className="WelcomeCaption">
                    <p> Welcome <span>Charles Xavier</span></p>
                </div>
                <div className="user-header-bar">
                    <span className="user-label">Users</span>
                    <div className="user-header-bar-actions">
                        <Input
                            className="search-input"
                            placeholder="Search users..."
                            prefix={<SearchOutlined className="searchinput-icon" />}
                        />
                        <Button className="UserAddButton"
                            onClick={() => {
                                setIsAddUserModalVisible(!isAddUserModalVisible)
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
                    <Modal visible={isAddUserModalVisible}
                        footer={null}
                        okText="Add"
                        width={450}
                        className="userModal"
                        onCancel={() => { setIsAddUserModalVisible(false) }}

                    >
                        <div className="addUserModal">
                            <h1>New User</h1>
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
                                <Input type="password" placeholder="Enter password" name="password" onChange={(e) => { addUserFormHandler(e.target) }} value={password} />
                                {validPassword ? <p className="fillwarn">*Please enter a password above 3 charecters </p> : ""}
                            </div>
                            {
                                notFilled ? <p className="fillwarn">*Please fill all fields before submission</p> : ""
                            }
                            <div className="actionButton">
                                <button className="cancelButton" onClick={() => { setIsAddUserModalVisible(false) }}>Cancel</button>
                                <button className="addButton" disabled={loading} onClick={() => { addUserHandler() }}>{loading ? "Adding .." : "Add"}</button>
                            </div>
                        </div>
                    </Modal>
                </div >
            </div >
            {loading ? "" : userList ? <div className="userListWrapper">
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
                </div>
            </div > : "Loading ..."}

        </div >
    )
}

export default Users;


