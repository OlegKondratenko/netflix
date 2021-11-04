import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { memoLink } from '../../redux/appReducer';

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<Header {...this.props} />)
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authentication.isAuth,
        login: state.authentication.login,
        id: state.authentication.id,
        email: state.authentication.email,
        sectionList: state.header.sectionList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        memoLink: (link) => {
            dispatch(memoLink(link))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)