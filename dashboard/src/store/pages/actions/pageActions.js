import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPages = createAsyncThunk("pages/pagesFetching",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/page`)
      return data
    } catch (e) {
      return thunkApi.rejectWithValue(`${e}`)
    }
  }
)
