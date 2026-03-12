import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000/api/",
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  tagTypes: ["User", "Doctor", "Appointment"],
  endpoints: () => ({}),
});
