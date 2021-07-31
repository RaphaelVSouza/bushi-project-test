import apiAnime from "services/apiAnime";

export function animesHaveError(bool: boolean) {
    return {
        type: 'ANIMES_HAVE_ERROR',
        hasError: bool
    };
}

export function animesAreLoading(bool: boolean) {
    return {
        type: 'ANIMES_ARE_LOADING',
        isLoading: bool
    };
}

export function animesFetchDataSuccess(animes: any) {
    return {
        type: 'ANIMES_FETCH_DATA_SUCCESS',
        animes
    };
}

export function animesFetchData(url: string) {
    return (dispatch: any) => {
        dispatch(animesAreLoading(true));

        apiAnime.get(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(animesAreLoading(false));

                return response;
            })
            .then((response) => dispatch(animesFetchDataSuccess(response.data)))
            .catch(() => dispatch(animesHaveError(true)));
    };
}