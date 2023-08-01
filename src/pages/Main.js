import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../components/Card';


function MAin() {
  return (
    <Container>
      <Row className='mt-5'>
        <Col xs={12} sm={6} md={4}>
            <Card icontitle="For individuals" variant="Free" details="Show social proof notifications
            to increase leads and sales." price="0" duration="monthly"/>
        </Col>
        <Col xs={12} sm={6} md={4}>
        <Card icontitle="For company" variant="Basic" details="Show social proof notifications
            to increase leads and sales." price="99" duration="monthly"/>
        </Col>
        <Col xs={12} sm={6} md={4}>
        <Card icontitle="For enterprise" variant="Premium" details="Show social proof notifications
            to increase leads and sales." price="299" duration="monthly"/>
        </Col>
      </Row>
    </Container>
  )
}

export default MAin