import { bindActionCreators } from 'redux'
import * as actions from '../state/actions.js'
import { connect } from 'react-redux'
import { ShakeListener } from '../components/listener/ShakeListener.js';

const mapStateToProps = (state) => {return {cart: state.cart} };

const mapDispatchToProps = (dispatch, props) => bindActionCreators({
    addFaveToCart: () => actions.addItem(props.meal)
}, dispatch);

export const FavoriteShakeListener = connect(mapStateToProps, mapDispatchToProps)(ShakeListener);