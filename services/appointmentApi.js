import { baseApi } from "./api";

export const appointmentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createAppointment: builder.mutation({
            query: (appointmentData) => ({
                url: "/appointment",
                method: "POST",
                body: appointmentData,
            }),
            invalidatesTags: ["Appointment", "Doctors"],
        }),
        getAppointments: builder.query({
            query: (params) => ({
                url: "/appointment",
                method: "GET",
                params,
            }),
            providesTags: ["Appointment"],
        }),
    }),
    overrideExisting: false,
});

export const {
    useCreateAppointmentMutation,
    useGetAppointmentsQuery,
} = appointmentApi;
