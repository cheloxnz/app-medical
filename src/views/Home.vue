<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <v-divider color="white" class="mt-1" dark></v-divider>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <v-toolbar flat color="rgba(0,0,0,0)" class="mt-n5">
            <v-toolbar-title>Dashboard</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <v-row class="px-5 mt-n6 ml-5">
            <v-col cols="12" sm="3" v-for="list in lists" :key="list">
              <v-card
                align="center"
                color="#F9FAFC"
                class="rounded-circle border pt-10"
                width="200"
                height="200"
                flat
              >
                <v-icon size="60" color="#093b5b">
                  {{ list.icon }}
                </v-icon>

                <v-card-text class="grey--text text-lg-h6">
                  {{ list.title }}
                </v-card-text>

                <v-btn
                  absolute
                  color="#093b5b"
                  class="white--text"
                  fab
                  left
                  top
                >
                  <h2>{{ list.count }}</h2>
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="mt-n5">
            <v-col cols="12" sm="7">
            </v-col>
          </v-row>
          <v-row class="mt-n12">
            <v-col cols="12" sm="12">
             <Table />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Table from "../components/Table.vue";
export default {
  name: "Home",
  components: {
    Table,
  },
  data: () => ({
   
    lists: [
      {
        icon: "fas fa-user-md",
        title: "Doctors",
        count: 21,
      },
      {
        icon: "fas fa-procedures",
        title: "Patients",
        count: 41,
      },
      {
        icon: "fas fa-user-nurse",
        title: "Nurses",
        count: 35,
      },
      {
        icon: "fas fa-hospital",
        title: "Directors",
        count: 4,
      },
    ],
  }),
};
</script>
<style scoped>
.border {
  border: 3px solid #dcebec !important;
}
.v-btn--fab.v-size--default.v-btn--absolute.v-btn--top {
  top: 65px !important;
}
.v-btn--absolute.v-btn--left,
.v-btn--fixed.v-btn--left {
  left: -26px !important;
}
</style>