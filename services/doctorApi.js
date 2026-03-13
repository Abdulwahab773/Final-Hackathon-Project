import { baseApi } from "./api";

export const doctorApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addDoctor: builder.mutation({
            query: (doctor) => ({
                url: "/doctor",
                method: "POST",
                body: doctor,
            }),
            invalidatesTags: ["Doctors"],
        }),
        
        
        getDoctors: builder.query({
            query: (params) => ({
              url: "/doctor",
              method: "GET",
              params,
            }),
            providesTags: ["Doctors"],
        }),
       
        
        updateDoctor: builder.mutation({
            query: ({ id, doctor }) => ({
                url: `/doctor/${id}`,
                method: "PUT",
                body: doctor,
            }),
            invalidatesTags: ["Doctors"],
        }),


        
        deleteDoctor: builder.mutation({
            query: (id) => ({
                url: `/doctor/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Doctors"],
        }),
    }),
    overrideExisting: false,
});

export const { 
    useAddDoctorMutation, 
    useGetDoctorsQuery,    
    useUpdateDoctorMutation, 
    useDeleteDoctorMutation 
} = doctorApi;