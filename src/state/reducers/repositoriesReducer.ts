interface Repositoriesstate {
    loading: boolean;
    error: string | null;
    data: string[];
}


interface SearchRepoAction {
    type: "SEARCH_REPO";
}

interface SearchRepoSuccessAction {
    type: "SEARCH_REPO_SUCCESS";
    payload: string[];
}

interface SearchRepoErrorAction {
    type: "SEARCH_REPO_ERROR";
    payload: string;
}

const reducer = (
    state: Repositoriesstate,
    action: SearchRepoAction | SearchRepoSuccessAction | SearchRepoErrorAction
): Repositoriesstate => {
    switch (action.type) {
        case "SEARCH_REPO":
            return { loading: true, error: null, data: [] };
        case "SEARCH_REPO_SUCCESS":
            return { loading: false, error: null, data: action.payload };
        case "SEARCH_REPO_ERROR":
            return { loading: false, error: action.payload, data: [] };

        default:
            return state;
    }
};

export default reducer;
