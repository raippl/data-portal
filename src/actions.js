import fetch from 'isomorphic-fetch'
import page from './data/dataset'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const DELETE_POSTS = 'DELETE_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

function receiveDataset(subreddit, json) {
  console.log('receiveDataset');
  return {
    type: RECEIVE_POSTS,
    subreddit,
    //posts: json.data.children.map(child => child.data),
    datasets: page,
    receivedAt: Date.now()
  }
}


function cleanDataset(subreddit, json) {
  console.log('cleanDataset');
  return {
    type: DELETE_POSTS,
    subreddit,
    datasets: null,
    receivedAt: Date.now()
  }
}

function fetchDataset(subreddit) {
  console.log('fetchDataset');
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveDataset(subreddit, json)))
  }
 
}

export function loadDatasets(subreddit) {
  console.log('Load Dataset action');
  return (dispatch, getState) => {
      return dispatch(fetchDataset(subreddit))
  }
 
}

export function unloadDatasets(subreddit) {
  console.log('Unload Dataset action');
  return (dispatch, getState) => {
      return dispatch(cleanDataset(subreddit))
  }
}
