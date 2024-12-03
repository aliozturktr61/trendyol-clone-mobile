import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verb';
import {ALL_PRODUCTS, CATEGORY_URL} from '../../service/url';

const getProducts = createAsyncThunk('products/getProducts', async params => {
  let url = params.category
    ? `${ALL_PRODUCTS}/${CATEGORY_URL}/${params.category}`
    : ALL_PRODUCTS;
  const response = await getRequest(url, params);

  // Sadece serileştirilebilir verileri döndürüyoruz
  return response.data;
});
const getProductInfo = createAsyncThunk(
  'products/getProductInfo',
  async params => {
    let url = `${ALL_PRODUCTS}/${params.id}`;
    const response = await getRequest(url, params);

    // Sadece serileştirilebilir verileri döndürüyoruz
    return response.data;
  },
);
export {getProducts, getProductInfo};
