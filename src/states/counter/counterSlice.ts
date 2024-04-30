import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, actions: PayloadAction<number>) => {
      state.value += actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log("pending");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      );
  },
});

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);
export const { increment, decrement, incrementByAmount } = CounterSlice.actions;
export default CounterSlice.reducer;
{
  /*
      import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "../states/counter/counterSlice";
      const count = useSelector((state: RootState) => state.counter.value);
  const dispach = useDispatch<AppDispatch>();
      <h2>Counter : {count}</h2>
      <button onClick={() => dispach(increment())}>Increment</button>
      <button onClick={() => dispach(decrement())}>Decrement</button>
      <button onClick={() => dispach(incrementByAmount(10))}>By Amount</button>
      <button onClick={() => dispach(incrementAsync(20))}>
        By Amount Async
  </button>*/
}
