import { createAction } from "@reduxjs/toolkit";

const addToList = createAction("list/addToList");
const deletedItem = createAction("list/deletedItem");
const filterChange = createAction("filter/filterChange", (payload) => ({
  payload: payload.target.value,
}));

export { addToList, deletedItem, filterChange };
