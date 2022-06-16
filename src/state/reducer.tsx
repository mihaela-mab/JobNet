import * as JobActions from './actions/job'
import { Job } from "../models/Job";
import { combineReducers } from 'redux';

interface JobsState {
    isGetJobsRequestReady: boolean;
    jobs: Job[];
}

const initialState: JobsState = {
    isGetJobsRequestReady: false,
    jobs: []
}

const jobsReducer  = (state = initialState, action) => {
    switch (action.type) {
        case JobActions.GET_JOBS:
            return {
                ...state,
                isGetJobsRequestReady: false
            }
        case JobActions.STORE_JOBS:
            return {
                isGetJobsRequestReady: true,
                jobs: action.payload
            }
        default:
            return state;
    }
}

export default jobsReducer;