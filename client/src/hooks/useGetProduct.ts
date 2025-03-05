/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useGetToken } from "./useGetToken";
import { IProduct } from "../models/interface";

export const useGetProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const {headers} = useGetToken();

  const fetchProducts = async () => {
    const products = await axios.get("http://localhost:3001/product", {
      headers,
    });
    setProducts(products.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, fetchProducts };
};