import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api",
     baseUrl: "https://library-management-backend-b5-a4-steel.vercel.app/api",
  }),
  endpoints: () => ({}),
  tagTypes: ["Books", "BorrowBooks"],
});
