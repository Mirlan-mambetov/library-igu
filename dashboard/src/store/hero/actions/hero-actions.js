import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateHero = createAsyncThunk("hero/updateHero",
  async (data, thunkApi) => {
    try {
      if (data.title !== "" && data.background === null) {
        const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/hero/update/${data.id}`,
          {
            title: data.title
          }
        )
        return response.data
      } else if (data.background !== null && data.title === "") {
        const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/hero/update/${data.id}`,
          {
            background: data.background,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        )
        return response.data
      } else {
        const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/hero/update/${data.id}`,
          {
            title: data.title,
            background: data.background,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        )
        return response.data
      }
    } catch (e) {
      return new thunkApi.rejectWithValue(`${e.response.data.message}`)
    }
  }
)