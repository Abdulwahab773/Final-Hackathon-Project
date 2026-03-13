import { baseApi } from "./api";

export const receptionistApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getReceptionists: builder.query({
            query: (params) => ({
                url: "/receptionist",
                method: "GET",
                params,
            }),
            providesTags: ["Receptionists"],
        }),

        addReceptionist: builder.mutation({
            query: (receptionist) => ({
                url: "/receptionist",
                method: "POST",
                body: receptionist,
            }),
            invalidatesTags: ["Receptionists"],
        }),

        updateReceptionist: builder.mutation({
            query: ({ id, receptionist }) => ({
                url: `/receptionist/${id}`,
                method: "PUT",
                body: receptionist,
            }),
            invalidatesTags: ["Receptionists"],
        }),

        deleteReceptionist: builder.mutation({
            query: (id) => ({
                url: `/receptionist/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Receptionists"],
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetReceptionistsQuery,
    useAddReceptionistMutation,
    useUpdateReceptionistMutation,
    useDeleteReceptionistMutation
} = receptionistApi;
