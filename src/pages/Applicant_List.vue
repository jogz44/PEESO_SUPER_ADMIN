<template>
  <q-page>
    <q-card class="q-pa-md q-mb-md">
      <q-card-section>
        <div class="text-h6">Applicant List</div>
        <q-input
          filled
          debounce="300"
          v-model="searchTerm"
          placeholder="Search Data..."
          class="q-mt-md"
          @input="filterTable"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <div class="export__file q-mt-md">
          <!-- <q-btn flat label="Export File" @click="toggleExportOptions">
            <q-icon name="download" />
          </q-btn> -->
        </div>
      </q-card-section>
    </q-card>

    <q-table
      :rows="filteredRows"
      :columns="columns"
      row-key="id"
      flat
      square
      dense
    >
      <template v-slot:body-cell-Surname="props">
        <q-td :props="props">
          <img
            :src="
              props.row.Company_Logo ? props.row.logo : 'public/defaultpic.jpg'
            "
            class="customer-img"
          />
          <q-strong
            >{{ props.row.Surname }} {{ props.row.Firstname }}
            {{ props.row.MIddlename }}</q-strong
          >
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { userCompany } from "src/stores/Company_List";
export default {
  data() {
    return {
      searchTerm: "",
      exportMenu: false,
      columns: [
        {
          name: "Surname",
          label: "Full Name",
          align: "left",
          field: "Surname",
        },

        {
          name: "Address",
          label: "Address",
          align: "left",
          field: "Address",
        },

        {
          name: "BirthDate",
          label: "BirthDate",
          align: "left",
          field: "BirthDate",
        },

        {
          name: "ContactNo",
          label: "Cotact No.",
          align: "left",
          field: "ContactNo",
        },

        {
          name: "Email",
          label: "Email",
          align: "left",
          field: "Email",
        },
      ],
      ApplicantList: [],
    };
  },

  created() {
    const store = userCompany();

    store.GetApplicantList_Store().then((res) => {
      this.ApplicantList = store.Applicant_List.data;
      console.log("GET Applicant:", this.ApplicantList);
    });
  },

  computed: {
    filteredRows() {
      return this.ApplicantList.filter((row) => {
        const searchData = this.searchTerm.toLowerCase();
        return (
          row.Surname.toLowerCase().includes(searchData) ||
          row.Firstname.toLowerCase().includes(searchData) ||
          row.MIddlename.toLowerCase().includes(searchData) ||
          row.BirthPlace.toLowerCase().includes(searchData)
        );
      });
    },
  },
  methods: {
    toggleExportOptions() {
      this.exportMenu = !this.exportMenu;
    },
    getStatusColor(status) {
      switch (status.toLowerCase()) {
        case "delivered":
          return "green";
        case "cancelled":
          return "red";
        case "shipped":
          return "green";
        case "pending":
          return "orange";
        default:
          return "grey";
      }
    },
    filterTable() {
      // Logic for filtering the table
    },
    exportToPDF() {
      // Logic for exporting to PDF
    },
    exportToJSON() {
      // Logic for exporting to JSON
    },
    exportToCSV() {
      // Logic for exporting to CSV
    },
    exportToExcel() {
      // Logic for exporting to Excel
    },
  },
};
</script>

<style scoped>
.customer-img {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-right: 8px;
}

.export__file {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.q-table {
  width: 100%;
}

.q-strong {
  font-weight: bold;
}
</style>
