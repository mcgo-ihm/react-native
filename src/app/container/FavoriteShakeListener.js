import { bindActionCreators } from 'redux'
import * as actions from '../state/actions.js'
import { connect } from 'react-redux'
import { ShakeListener } from '../components/listener';

const mapStateToProps = (state) => {return {cart: state.cart} };

const mapDispatchToProps = (dispatch, props) => bindActionCreators({
    execute: () => actions.addItem(props.meal)
}, dispatch);

export const FavoriteShakeListener = connect(mapStateToProps, mapDispatchToProps)(ShakeListener);