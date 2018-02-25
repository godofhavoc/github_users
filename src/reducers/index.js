const initialState = {
    isLoading: false,
    isLoadingProfile: false,
    isLoadingRepo: false,
    users: {},
    profile: {},
    repos: {}
}

const reducer = function(state=initialState, payload={}) {
    switch (payload.type) {
        case 'FETCH_USERS':
            return {
                ...state,
                isLoading: true
            }
        case 'FETCH_USERS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                users: payload.res
            }
        case 'FETCH_PROFILE':
            return {
                ...state,
                isLoadingProfile: true
            }
        case 'FETCH_PROFILE_SUCCESS':
            return {
                ...state,
                isLoadingProfile: false,
                profile: payload.res
            }
        case 'FETCH_REPO':
            return {
                ...state,
                isLoadingRepo: true
            }
        case 'FETCH_REPO_SUCCESS':
            let repos = {...state.repos}
            repos[payload.user] = payload.res
            return {
                ...state,
                isLoadingRepo: false,
                repos: repos
            }
        default:
            return {
                ...state
            }

    }
}

export default reducer
