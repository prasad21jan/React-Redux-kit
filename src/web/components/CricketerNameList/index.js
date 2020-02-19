import React from 'react'
import PropTypes from 'prop-types'
import { Col,Button, Row, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CricketerNameList = props => {
  let listItem = props.allCricketerData.map(cricketer => (
        <ListGroupItem key={cricketer.name} onClick={e => props.onCricketerNameSelect(e, cricketer.id)}>
          {cricketer.name}
        </ListGroupItem>
  ))
  return (
    <Row>
      <Col xs={12} md={9} className='calc'>
        <Link to={`/Dashboard/home`}>
        <Button bsStyle="primary" bsSize="large" className="float-right">Home</Button>          
        </Link>
          <ListGroup>
            
            {listItem}
            
          </ListGroup>
      </Col>
    </Row>
    
  )
}

export default CricketerNameList
