const ANIMES_HAVE_ERROR = 'ANIMES_HAVE_ERROR';
const ANIMES_ARE_LOADING = 'ANIMES_ARE_LOADING';
const ANIMES_FETCH_DATA_SUCCESS = 'ANIMES_FETCH_DATA_SUCCESS';

export function animesHaveError(state = false, action: any) {
  switch (action.type) {
      case ANIMES_HAVE_ERROR:
          return action.hasError;

      default:
          return state;
  }
}

export function animesAreLoading(state = false, action: any) {
  switch (action.type) {
      case ANIMES_ARE_LOADING:
          return action.isLoading;

      default:
          return state;
  }
}

export function animes(state = [], action: any) {
  switch (action.type) {
      case ANIMES_FETCH_DATA_SUCCESS:
          return action.animes.data;

      default:
          return state;
  }
}