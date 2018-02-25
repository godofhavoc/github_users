import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUsers } from "../actions"
import { Link } from 'react-router-dom'

class Search extends Component {
    state = {
        query: ''
    }

    onSubmit = () => {
        if (this.state.query.length > 0) {
            this.props.dispatch(fetchUsers(this.state.query))
        }
    }

    onChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onChange} value={this.state.query} />
                <button onClick={this.onSubmit}>Submit</button>

                {
                    this.props.isLoading ?
                    <div>Loading...</div>
                    :
                    null
                }

                <div>
                    {
                        Object.keys(this.props.users).length ?
                        this.props.users.items.map(user => {
                            return (
                                <Link to={"/users/" + user.login}>
                                    <div className="container" style={{
                                            margin: '10px'
                                        }}>
                                        <div className="user-card" style={{
                                                boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                                                marginTop: '20px',
                                                position: 'relative'
                                            }}>
                                            <div className="left-side">
                                                <img src={user.avatar_url} className="user-gravatar" style={{
                                                        height: '60px'
                                                    }}/>
                                                <span style={{
                                                        fontSize: '21px',
                                                        marginLeft: '15px',
                                                        position: 'absolute',
                                                        top: '13px'
                                                    }}>{user.login}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                        :
                        null
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        users: store.users,
        isLoading: store.isLoading
    }
}

export default connect(mapStateToProps)(Search)
