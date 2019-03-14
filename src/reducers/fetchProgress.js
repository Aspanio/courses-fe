const initialState = {
  themes: 10,
  themesDone: 0,
};

initialState.progress = function () {
  return Math.floor((initialState.themesDone / initialState.themes) * 100);
};

export default function fetchProgress(state = initialState) {
  // fetch('htp://text.js')
  //   .then((res) => {
  //     state = res;
  //     return state;
  //   });

  return state;
}
