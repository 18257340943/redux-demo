const INIT_USER = "init_user";

const mockUser = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: {
          name: "renzejun",
          age: 18,
          sex: "m",
        },
      });
    }, 1000);
  });

const actionCreators = {
  getUser: async (dispatch, getState) => {
    const data = await mockUser();
    dispatch({
      type: INIT_USER,
      payload: data.data,
    });
  },
};

const initState = {
  userInfo: {},
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case INIT_USER:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
