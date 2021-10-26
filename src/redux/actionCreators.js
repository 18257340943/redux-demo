import * as ActionTypes from "./actionTypes";

const mockList = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: [
          {
            id: 1,
            text: "zhangsan",
          },
          {
            id: 2,
            text: "lisi",
          },
          {
            id: 3,
            text: "wangwu",
          },
        ],
      });
    }, 1000);
  });

const actionCreators = {
  increment: {
    type: ActionTypes.INCREMENT,
  },
  decrement: {
    type: ActionTypes.DECREMENT,
  },
  getList: async (dispatch, getState) => {
    const data = await mockList();
    dispatch({
      type: ActionTypes.INIT_LIST,
      payload: data.data,
    });
  },
};

export default actionCreators;
