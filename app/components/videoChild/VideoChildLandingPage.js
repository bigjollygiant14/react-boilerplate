import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as accountActions from '../../../actions/AccountActions';

export class VideoChildLandingPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    render() {
      /* const {
        accountData
      } = this.props; */

      return (
        <div>
          <h1>You Have Reached Video Child Landing Page</h1>
        </div>
      );
    }
}

/*AccountLandingPage.propTypes = {
    actions : PropTypes.object.isRequired,
    accountData : PropTypes.object.isRequired
};

AccountLandingPage.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state) {
  return {
    accountData: state.accountData
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(accountActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountLandingPage);*/
export default VideoChildLandingPage;
