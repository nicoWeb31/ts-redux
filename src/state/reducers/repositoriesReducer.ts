import ActionType from '../type/type';

interface Repositoriesstate {
    loading: boolean;
    error: string | null;
    data: string[];
}


interface SearchRepoAction {
    type: ActionType.SEARCH_REPO;
}

interface SearchRepoSuccessAction {
    type: ActionType.SEARCH_REPO_SUCCESS;
    payload: string[];
}

interface SearchRepoErrorAction {
    type: ActionType.SEARCH_REPO_ERROR;
    payload: string;
}

type Action = SearchRepoAction | SearchRepoSuccessAction | SearchRepoErrorAction;


const reducer = (
    state: Repositoriesstate,
    action: Action
): Repositoriesstate => {
    switch (action.type) {
        case ActionType.SEARCH_REPO:
            return { loading: true, error: null, data: [] };
        case ActionType.SEARCH_REPO_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionType.SEARCH_REPO_ERROR:
            return { loading: false, error: action.payload, data: [] };

        default:
            return state;
    }
};

export default reducer;
