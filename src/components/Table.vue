<template>
  <div>
    <v-toolbar color="rgba(0, 0, 0, 0)" flat class="pt-2">
        <v-toolbar-title>Doctor List</v-toolbar-title>
    </v-toolbar>
    <v-simple-table class="transparent mt-2">
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">#</th>
                    <th class="text-left">First Name</th>
                    <th class="text-left">Last Name</th>
                    <th class="text-left">Expert</th>
                    <th class="text-left">Appointment</th>
                </tr>
            </thead>
            <tbody>
                    <tr v-for="item in doctors" :key="item.id">
                      <td>{{ item.id }}</td>
                      <td>{{ item.first }}</td>
                      <td>{{ item.last }}</td>
                      <td>{{ item.expert }}</td>
                      <td>{{ item.date }}</td>
                    </tr>
                  </tbody>
        </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
    data: () => ({
        doctors: [
      {
        id: 1,
        first: "Robert",
        last: "Lewandosky",
        expert: "Deseases",
        date: "05:30 pm - 11:00 pm",
      },
      {
        id: 2,
        first: "Alexander",
        last: "Mitrovic",
        expert: "Pediatrician",
        date: "05:30 pm - 12:00 pm",
      },
      {
        id: 3,
        first: "Jonh",
        last: "Terry",
        expert: "Pediatrician",
        date: "05:30 pm - 12:00 pm",
      },
      {
        id: 4,
        first: "Roman",
        last: "Riquelme",
        expert: "Pediatrician",
        date: "05:30 pm - 12:00 pm",
      },
    ],
    })
}
</script>

<style>

</style>