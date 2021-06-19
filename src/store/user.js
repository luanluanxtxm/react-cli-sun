import { observable, action } from "mobx";

export default observable(
  {
    userName: "",
    setUserName(userName) {
      this.userName = userName;
    },
  },
  {
    setUserName: action,
  }
);
