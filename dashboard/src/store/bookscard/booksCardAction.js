import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const UpdateBooksCard = createAsyncThunk("booksCard/updateBooksCard",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/arrivals/image/update/${data.id}`, {
        image: data.image
      },
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      )
      return response.data
    } catch (e) {
      return new rejectWithValue(`${e.response.data}`)
    }
  }
)