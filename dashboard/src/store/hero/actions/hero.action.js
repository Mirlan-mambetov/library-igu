import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const updateHero = createAsyncThunk("hero/updateHero",
  async (hero, thunkApi) => {
    try {
      if (hero.background && hero.title === "") {
        await axios.put(`${process.env.REACT_APP_BASE_URL}/hero/update/${hero.updateId}`, {
          background: hero.background
        }, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
      } else if (!hero.background && hero.title !== "") {
        await axios.put(`${process.env.REACT_APP_BASE_URL}/hero/update/${hero.updateId}`, {
          title: hero.title
        }, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
      } else {
        await axios.put(`${process.env.REACT_APP_BASE_URL}/hero/update/${hero.updateId}`, {
          title: hero.title,
          background: hero.background
        }, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
      }
    } catch (e) {
      return new thunkApi.rejectWithValue(e.response.data.message.toString())
    }
  }
)