import { combineReducers } from 'redux';

import kanbanprocReducer from './slices/kanbanproc';

const rootReducer = combineReducers({
  kabnanproc: kanbanprocReducer
});

export { rootReducer };
