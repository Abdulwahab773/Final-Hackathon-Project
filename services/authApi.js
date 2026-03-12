import { baseApi } from "./api";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),
    signup: builder.mutation({
      query: (userData) => ({
        url: "auth/signup",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),
    getProfile: builder.query({
      query: () => "auth/profile",
      providesTags: ["User"],
    }),
  }),
  overrideExisting: false,
});

export const { 
  useLoginMutation, 
  useSignupMutation, 
  useGetProfileQuery 
} = authApi;
