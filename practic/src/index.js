import store from './customStore';
import * as actions from './actionTypes';

store.subscribe(() => {
  console.log('Store Changed! ');
});

store.dispatch(actions.BUG_ADDED('Bug 1'));
