import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const updateHero = createAsyncThunk("hero/updateHero",
  async (hero, thunkApi) => {
    try {
      const { data } = await axios.put(`${process.env.REACT_APP_BASE_URL}/hero/update/${hero.updateId}`, {
        title: hero.title,
        subtitle: hero.subtitle,
        background: hero.background
      }, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      return data
    } catch (e) {
      return thunkApi.rejectWithValue(e)
    }
  }
)