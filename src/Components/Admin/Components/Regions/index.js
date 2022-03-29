import React from "react";
import { Card, Col, Row, Button } from 'antd'
import "./styles/region.css"
import { DownloadOutlined } from "@ant-design/icons";
import TickIcon from "../../../../assets/check.png"
// require("../../../../assets/check.png"
// require("../../../../assets/close-white.png")
const Region = () => {
    return (
        <div>
            <div className="userHeader">
                <div className="WelcomeCaption">
                    <p> Welcome <span>Charles Xavier</span></p>
                </div>
                <div className="user-header-bar">
                    <span className="user-label">Regions</span>
                    <div className="user-header-bar-actions">
                    </div>
                </div >
            </div >

            <div className="RegionWrapper">
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={6}>
                            <Card bordered={true} className="regionCard">
                                <div className="topBar">
                                    <div className="DefaultIcon">
                                        <img alt="location icon" src={require("../../../../assets/location.png")} />
                                    </div>
                                    <div className="actionIcons">
                                        <button className="editButton">
                                            <img alt="edit-icon" src={require("../../../../assets/edit.png")} />
                                        </button>
                                        <button className="deleteButton">
                                            <img alt="delete-icon" src={require("../../../../assets/trash-white.png")} />
                                        </button>
                                    </div>
                                </div>
                                <div className="cardContent">
                                    <p>
                                        Western Australia
                                    </p>
                                </div>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card bordered={true} className="regionCard">
                                <div className="topBar">
                                    <div className="DefaultIcon">
                                        <img alt="location icon" src={require("../../../../assets/location.png")} />
                                    </div>
                                    <div className="actionIcons">
                                        <button className="editButton">
                                            <img alt="edit-icon" src={require("../../../../assets/edit.png")} />
                                        </button>
                                        <button className="deleteButton">
                                            <img alt="delete-icon" src={require("../../../../assets/trash-white.png")} />
                                        </button>
                                    </div>
                                </div>
                                <div className="cardContent">
                                    <p>
                                        South Australia
                                    </p>
                                </div>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card bordered={true} className="regionCard">
                                <div className="topBar">
                                    <div className="DefaultIcon">
                                        <img alt="location icon" src={require("../../../../assets/location.png")} />
                                    </div>
                                    <div className="actionIcons">
                                        <button className="editButton">
                                            <img alt="edit-icon" src={require("../../../../assets/edit.png")} />
                                        </button>
                                        <button className="deleteButton">
                                            <img alt="delete-icon" src={require("../../../../assets/trash-white.png")} />
                                        </button>
                                    </div>
                                </div>
                                <div className="cardContent">
                                    <p>
                                        Victoria
                                    </p>
                                </div>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card bordered={true} className="newRegion">
                                <div className="plusButton">+</div>
                                <p>NEW REGION</p>
                            </Card>
                        </Col>

                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Region;