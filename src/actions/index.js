export const FETCH_USERS = "FETCH_USERS"
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
export const FETCH_PROFILE = "FETCH_PROFILE"
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS"
export const FETCH_REPO = "FETCH_REPO"
export const FETCH_REPO_SUCCESS = "FETCH_REPO_SUCCESS"

export function fetchUsers(query) {

    return (dispatch) => {
        dispatch({ type: FETCH_USERS })

        fetch('https://api.github.com/search/users?q=' + query)
        .then(res => {
            return res.json();
        }).then((j) => {
            dispatch({ type: FETCH_USERS_SUCCESS, res: j })
        }).catch((err) => {
            return err
        })
    }
}

export function fetchUserProfile(user) {

    return (dispatch) => {
        dispatch({ type: FETCH_PROFILE })

        fetch('https://api.github.com/users/' + user)
        .then(res => {
            return res.json();
        }).then((j) => {
            dispatch({ type: FETCH_PROFILE_SUCCESS, res: j })
        }).catch((err) => {
            return err
        })
    }
}

export function fetchUserRepos(user) {

    return (dispatch) => {
        dispatch({ type: FETCH_REPO })

        fetch('https://api.github.com/users/' + user + '/repos')
        .then(res => {
            return res.json();
        }).then((j) => {
            dispatch({ type: FETCH_REPO_SUCCESS, res: j, user })
        }).catch((err) => {
            return err
        })
    }
}
