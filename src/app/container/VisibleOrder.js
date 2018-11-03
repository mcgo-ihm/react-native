import * as actions from '../state/actions.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Order } from '../components/orders'

const mapStateToProps = (state) => {return {cart: state.cart}};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    remove: (meal) => actions.removeItem(meal)
}, dispatch);

export const VisibleOrder = connect(mapStateToProps, mapDispatchToProps)(Order);