import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUserProfile, fetchUserRepos } from "../actions"
import styles from '../css/style.css'

class Profile extends Component {
    componentWillMount() {
        console.log(this.props)
        this.props.dispatch(fetchUserProfile('godofhavoc'))
        this.props.dispatch(fetchUserRepos('godofhavoc'))
    }

    render() {
        console.log(styles)
        const {profile} = this.props

        return (
            Object.keys(profile) ?
            <div className="container">
                <div className="col-md-2">
                    <img src={profile.avatar_url} className="profile-image"/>

                    <span>{profile.login}</span>
                </div>

                <div className="col-md-10">
                    {
                        this.props.repos['godofhavoc'] ?
                        this.props.repos['godofhavoc'].map(rep => {
                            return (
                                <div>
                                    {rep.name}
                                </div>
                            )
                        })
                        :
                        <div>Loading...</div>
                    }
                </div>
            </div>
            :
            <div>Loading...</div>
        )
    }
}

function mapStateToProps(store) {
    return {
        profile: store.profile,
        isLoading: store.isLoadingProfile,
        repos: store.repos
    }
}

export default connect(mapStateToProps)(Profile)
