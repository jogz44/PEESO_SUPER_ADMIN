import { defineStore } from "pinia";
import axios from "axios";

export const userCompany = defineStore("CompanyStore", {
  state: () => ({
    Company_List: [],
    Applicant_List: [],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async GetCompanyList_Store() {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.get(
        `http://10.0.1.26:82/peesoportal/peesoadmin/company/getcompanies.php`
      );
      this.Company_List = res.data;
      /*   console.log("GET SERVER DATE TIME", res.data); */
    },

    async GetApplicantList_Store() {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.get(
        `http://10.0.1.26:82/peesoportal/peesoadmin/client/getclients.php`
      );
      this.Applicant_List = res.data;
      /*   console.log("GET SERVER DATE TIME", res.data); */
    },
  },
  persist: true,
});
