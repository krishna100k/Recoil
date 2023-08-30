import { atom, selector } from "recoil";

export const count = atom({
  key: "count",
  default: 0
});

export const counter = selector({
  key: "counter",
  get: ({ get }) => {
    const state = get(count);

    return state;
  }
});
