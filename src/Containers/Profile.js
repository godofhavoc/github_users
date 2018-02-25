import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUserProfile, fetchUserRepos } from "../actions"

class Profile extends Component {
    componentWillMount() {
        console.log(this.props)
        this.props.dispatch(fetchUserProfile('godofhavoc'))
        this.props.dispatch(fetchUserRepos('godofhavoc'))
    }

    render() {
        console.log(this.props)
        const {profile} = this.props
        return (
            Object.keys(profile) ?
            <div>
                <img src={profile.avatar_url} />
                <span>{profile.login}</span>
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
