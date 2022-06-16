import { Job } from "../../models/Job";

export const GET_JOBS = 'GET_JOBS';
export const STORE_JOBS = 'STORE_JOBS';

export const getJobsAction = () => ({ type: GET_JOBS });

export const storeJobsAction = (jobs: Job[]) => ({
    type: STORE_JOBS,
    payload: jobs
});