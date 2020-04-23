import { connect } from 'react-redux';
import Link from '../../components/link';
import * as filterActions from '../../state/visibilityFilter/actions';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(filterActions.setVisibilityFilter(ownProps.filter)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Link);
