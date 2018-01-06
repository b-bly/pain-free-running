import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import getInjuryInfo from '../actions/getInjuryInfo';

class InjuryList extends Component {
    constructor(props) {
        super(props);
        this.state = { injuryList: [] };
    }
    componentWillMount() {
       // this.props.getInjuryInfo('High Hamstring Tendonopathy');
    }
    render() {
        console.log('injury list props: ');
        console.log(this.props);
        const injuryInfo =
            <ol><li>Injury: {this.props.injuryInfo.title}</li>
                <li>Description: {this.props.injuryInfo.description}</li></ol>;
        return (
            <div>
                <p>Injury Info</p>

                {injuryInfo}

            </div>
        );
    }
}

// InjuryList.propTypes = {
//     injuryList: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, title: PropTypes.string, description: PropTypes.string }))

// }

function mapStateToProps(state) {
    console.log('InjuryList mapStateToProps called, state: ');
    console.log(state);

    return {
        injuryInfo: state.injuryInfo
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getInjuryInfo: getInjuryInfo
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InjuryList);