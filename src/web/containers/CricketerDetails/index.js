import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CricketerDetailsComponent from '../../components/CricketerDetails'
import * as dashboardAction from '../../../common/actions/dashboard'
import { withRouter } from "react-router";
class CricketerDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showCricketerInfoPanel: false
    }
    this.onEditDetailsClick = this.onEditDetailsClick.bind(this)
  }
  onCricketerInfoDismissClick (){
    this.setState({
      showCricketerInfoPanel: false
    })
  }
  onEditDetailsClick () {
    this.setState({
      showCricketerInfoPanel: true
    })
  }
  onCricketerInfoSaveClick () {
    this.setState({
      showCricketerInfoPanel: false
    })
  }
  
  componentDidMount(){
    if(this.props.match.params.id){
      this.props.dashboardAction.setCricketerData(this.props.match.params.id)
    }
  }
  componentWillReceiveProps(newProps){
    console.log("componentWillReceiveProps");
  }
  shouldComponentUpdate(newProps, newState){
   
    console.log("shouldComponentUpdate");
    return true;
  }
  
  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("componentDidUpdate");
  }

  render () {
    return (
      <CricketerDetailsComponent 
        cricketerData={this.props.cricketerData}
        showCricketerInfoPanel={this.state.showCricketerInfoPanel}
        onCricketerInfoDismissClick={this.onCricketerInfoDismissClick.bind(this)}
        onCricketerInfoSaveClick={this.onCricketerInfoSaveClick.bind(this)}
        onEditDetailsClick={this.onEditDetailsClick} />
    )
  }
}

const mapStateToProps = (state) => ({
  cricketerData: state.dashboard.cricketerData
})

const mapDispatchToProps = (dispatch) => ({
  'dashboardAction': bindActionCreators(dashboardAction, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CricketerDetails))
