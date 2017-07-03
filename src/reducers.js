import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import {
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  DELETE_POSTS
} from './actions'

function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

function datasets(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.datasets,
        lastUpdated: action.receivedAt
      })
    case DELETE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: null,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function postsBySubreddit(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case DELETE_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: datasets(state[action.subreddit], action)
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: datasets(state[action.subreddit], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  form: reduxFormReducer,
  postsBySubreddit,
  selectedSubreddit
})

export default rootReducer