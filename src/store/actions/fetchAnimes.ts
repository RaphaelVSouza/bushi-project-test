import apiAnime from "services/apiAnime";

export function animesHaveError(hasError: boolean) {
    return {
        type: 'ANIMES_HAVE_ERROR',
        hasError
    };
}

export function animesAreLoading(isLoading: boolean) {
    return {
        type: 'ANIMES_ARE_LOADING',
        isLoading
    };
}

export function animesFetchDataSuccess(animes: Array<object | undefined>) {
    return {
        type: 'ANIMES_FETCH_DATA_SUCCESS',
        animes
    };
}

type action = {
    type: string
    [key: string]: unknown
}

type animesDispatchFn = (action: action) => void

export function animesFetchData(url: string) {
    return (dispatch: animesDispatchFn) => {
        dispatch(animesAreLoading(true));
        apiAnime.get(url)
            .then((response) => {
                if (response.status !== 200) throw Error(response.statusText) 
                dispatch(animesAreLoading(false));

                return response;
            })
            .then((response) => dispatch(animesFetchDataSuccess(response.data)))
            .catch(() => dispatch(animesHaveError(true)));
    };
}