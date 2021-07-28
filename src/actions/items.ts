import apiAnime from "services/apiAnime";

export function itemsHaveError(bool: boolean) {
    return {
        type: 'ITEMS_HAVE_ERROR',
        hasError: bool
    };
}

export function itemsAreLoading(bool: boolean) {
    return {
        type: 'ITEMS_ARE_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items: any) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url: string) {
    return (dispatch: any) => {
        dispatch(itemsAreLoading(true));

        apiAnime.get(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(itemsAreLoading(false));

                return response;
            })
            .then((response) => dispatch(itemsFetchDataSuccess(response.data.data)))
            .catch(() => dispatch(itemsHaveError(true)));
    };
}