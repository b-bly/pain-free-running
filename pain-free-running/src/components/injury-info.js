import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import getInjuryInfo from '../actions/getInjuryInfo';
import { Link } from 'react-router-dom';

class InjuryInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { injuryList: [] };
    }
    componentWillMount() {
        this.props.getInjuryInfo('High Hamstring Tendonopathy');
    }
    render() {


        console.log('injury list props: ');
        console.log(this.props);
        const injuryInfo =
            <ol><li>Injury: {this.props.injuryInfo.title}</li>
                <li>Description: {this.props.injuryInfo.description}</li>
                <li>Treatments:
                    <li>Exercise</li>
                </li>
            </ol>;
        return (
            <div>
                <div className="card-container">
                    <div className="columns">
                        <div className="column col-md-6">
                            <div className="card">

                                <div className="card-header">

                                    <h4 className="card-title">{this.props.injuryInfo.title}</h4>
                                    
                                </div>
                                {/* <Note
          toggleEdit={this.toggleEdit}
          updatePerson={this.handleUpdatePerson}
          edit={this.state.editReason}
          handleReasonChange={this.handleReasonChange}
          content={this.state.reason} /> */}
                                <small className="">
                                {this.props.injuryInfo.description}
          </small>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to='/'>Injury List</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(InjuryInfo);