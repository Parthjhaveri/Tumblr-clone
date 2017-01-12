import store from 'store';

export function actionTest(data) {
  store.dispatch({
    type: 'ACTION_TEST',
    data
  })
}