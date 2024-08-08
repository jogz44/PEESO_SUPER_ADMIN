import { defineStore } from "pinia";
import axios from "axios";

export const useJobpost = defineStore("JobPostStore", {
  state: () => ({
    jobpost_Array: [],
    RetrieveJobs_Array: [],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async SaveToDatabase_jobPost(payload) {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/jobs/admin/createjobs.php`,
        payload
      );
      this.jobpost_Array = res.data;
      console.log("Job Post Save to Database", res.data);
    },

    async Retrieve_Jobs(payload) {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/jobs/admin/getjobs.php`,
        payload
      );
      this.RetrieveJobs_Array = res.data;
      console.log("Retrieve Job Post", res.data);
    },
  },
  persist: true,
});
