import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://65ac244efcd1c9dcffc7a555.mockapi.io/cars';
export const getFavoriteCars = createAsyncThunk(
  'cars/getFavoriteCars',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("");
      const filteredCars = response.data.filter(car => payload.includes(car.id) )
      return filteredCars;
    } catch (error) {
      alert(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFilteredCars = createAsyncThunk(
  'cars/getFilteredCars',
  async (payload, thunkAPI) => {
    try {
      const { brand, price, mileage } = payload;
      const responseTotal = await axios.get(`?search=${brand}`);
      const response = await axios.get(`?page=1&limit=12&search=${brand}`);
console.log(response.data);
      return [response.data, responseTotal.data.length - response.data.length];
    } catch (error) {
      alert(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loadMore = createAsyncThunk(
  'cars/loadMore',
  async (payload, thunkAPI) => {
    try {
      const { brand, price, mileage } = payload; 
            const state = thunkAPI.getState();
      const response = await axios.get(`?page=${state.cars.page + 1}&limit=12&search=${brand}`);
      return response.data
    } catch (error) {
      alert(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getTotalFilteredCars = createAsyncThunk(
//   'cars/getTotalFilteredCars',
//   async (payload, thunkAPI) => {
//     try {
//       const { brand, price, mileage } = payload;
//       const response = await axios.get(`?search=${brand}`);
//       return response.data.length;
//     } catch (error) {
//       alert(error.message);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// const setAuthToken = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// export const signUp = createAsyncThunk("auth/signingUp", async (payload, thunkAPI) => {
//   try {
//     const response = await axios.post("/users/signup", payload)
//     await setAuthToken(response.data.token)
//     return response.data
//   } catch (error) {
//     alert(error.message)
//     return thunkAPI.rejectWithValue(error.message);
//   }
// })
// export const logIn = createAsyncThunk("auth/logining", async (payload, thunkAPI) => {
//   try {
//     const response = await axios.post("/users/login", payload)
//     await setAuthToken(response.data.token)
//     return response.data
//   } catch (error) {
//     alert(error.message)
//     return thunkAPI.rejectWithValue(error.message)
//   }
// })
// export const logout = createAsyncThunk("auth/loginingOut", async (payload, thunkAPI) => {
//   try {
//     await axios.post("/users/logout")
//   return setAuthToken()
//   } catch (error) {
//     alert(error.message)
//     return thunkAPI.rejectWithValue(error.message)
//   }
// })
// export const userLocalStorage = createAsyncThunk("auth/userLocalStorage", async (_, thunkAPI) => {
//   try {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token
//   console.log(state);
//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue();
//     }
//     setAuthToken(persistedToken)
//   } catch (error) {
//     alert(error.message)
//     return thunkAPI.rejectWithValue(error.message);
//   }

// })
// export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
//     try {
//       const response = await axios.get("/contacts");
//     return response.data;
//     } catch (error) {
//       alert(error.message)
//         return thunkAPI.rejectWithValue(error.message)
//     }
//   });
//   export const addContact = createAsyncThunk("contacts/addContact", async (payload, thunkAPI) => {
//     try {
//         await axios.post("/contacts", payload)
//         console.log(payload);
//     } catch (error) {
//       alert(error.message)
//         return thunkAPI.rejectWithValue(error.message)
//     }
//   });
//   export const deleteContact = createAsyncThunk("contacts/deleteContact", async (payload, thunkAPI) => {
//     try {
//       await axios.delete(`/contacts/${payload}`);
//     return payload;
//     } catch (error) {
//       alert(error.message)
//         return thunkAPI.rejectWithValue(error.message)
//     }
//   });
