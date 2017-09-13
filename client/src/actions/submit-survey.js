import axios from 'axios';
import { FETCH_USER } from './types';

export default (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);
  
  history.push('/surveys');
  
  dispatch({ type: FETCH_USER, payload: res.data });
};

