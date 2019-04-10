import React from 'react'
import { Button } from 'igroot'
import PropTypes from 'prop-types'

export default class Demo extends React.Component {

  render(){
    const {type,title}=this.props
    return (
      <Button type={type}>{title}</Button>
    )
  }
}

FrameLayout.propTypes = {
  type: PropTypes.string,          
  title: PropTypes.string,         
}
FrameLayout.defaultProps = {
  type: 'default',          
  title: 'xxx',   
}