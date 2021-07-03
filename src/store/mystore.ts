import _ from "lodash";
import Vue from "vue";

interface IMyState {
  name: string;
  age: number;
  location: {
    province: string;
    city: string;
  };
  hobbys: string[];
}

class StateHandler<T> {
  private state: T;
  constructor(state: T) {
    this.state = Vue.observable(state);
  }

  set(path: keyof T, value: unknown) {
    _.set(this.state as unknown as { [x: string]: unknown }, path, value);
  }

  /**
   * 操作状态下的数组
   * @param path
   * @param command
   * @param idx 下标
   * @returns
   */
  operateArr(path: keyof T, command: ArrayMethods, ...rest: unknown[]) {
    const target = _.get(this.state, path);
    if (!Array.isArray(target)) {
      console.error("the target you operate is not a array");
      return;
    }

    target[command](...rest);
  }
}

type ArrayMethods = keyof [];

const state = {
  name: "MyStore",
  age: 12,
  location: {
    province: "Beijing",
    city: "City"
  },
  hobbys: ["coding"]
};

export const stateHandler = new StateHandler<IMyState>(state);

export default () => state;
