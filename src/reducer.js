export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    token: null
    // REMOVE AFTER DONE DEVELOPING
    // token: "BQBlQn8S9h2iUCjvTVYXgFEOYoMy0YsU5PIcBl_j10xrJ29U4Kx3a_LTXn_MCKKkgjbxAdRWw64KATnEGZUW1BigyUGojZzcHL1Mgd7W35WCEZPIQe24B-ONUwbpTg7WM3tTy8bKRu-lwkOqWKauCrPk9BUDZh1h-ya-w1U"
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            };

        default:
            return state;
    }
}

export default reducer;