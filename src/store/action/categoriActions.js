import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verb';
import {ALL_CATEGORİES, ALL_PRODUCTS} from '../../service/url';

const getCategories = createAsyncThunk(
  'categories/getCategories',
  async params => {
    const url = `${ALL_PRODUCTS}/${ALL_CATEGORİES}`;
    const response = await getRequest(url, params);

    // Sadece serileştirilebilir verileri döndürüyoruz
    return response.data;
  },
);

export {getCategories};
