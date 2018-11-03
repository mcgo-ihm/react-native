import { connect } from 'react-redux'
import { CartIcon } from '../components/orders'

const mapStateToProps = (state, props) => { return {...props, count: state.cart.length} };

export const VisibleCartIcon = connect(mapStateToProps)(CartIcon);