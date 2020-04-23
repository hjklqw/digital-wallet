// Fakes server latency
export async function load<T>(onBeginAction: Function, onSuccessAction: Function, onFailureAction: Function, fakeServerResponse: () => T | Error) {
  return (dispatch: Function) => {
    dispatch(onBeginAction());
    setTimeout(() => {
      const res = fakeServerResponse();
      if (res instanceof Error) {
        dispatch(onFailureAction(res));
      }
      else {
        dispatch(onSuccessAction(res));
      }
    }, 1000);
  }
}