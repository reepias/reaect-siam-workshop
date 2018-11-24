import React, { Component } from 'react'
import { Col, Row } from 'antd'

class GridLayout extends Component {
  render() {
    return (
        <Row>
            <Col span={6}>Col-6</Col>
            <Col span={6}>Col-6</Col>
            <Col span={6}>Col-6</Col>
            <Col span={6}>Col-6</Col>
        </Row>
    )
  }
}

export default GridLayout