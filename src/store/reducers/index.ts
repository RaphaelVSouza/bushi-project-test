import { combineReducers } from 'redux';
import { animes, animesHaveError, animesAreLoading } from './animesReducer';

export default combineReducers({
    animes,
    animesHaveError,
    animesAreLoading
});