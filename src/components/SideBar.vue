<template>
    <nav>
        <v-navigation-drawer app dark color="#dcebec">
            <div class="text-center mt-5">
                <h1 class="text-lg-h5 font-weight-bold">CHL MEDICAL</h1>
                <v-divider color="white" class="mt-4"></v-divider>
                <v-avatar class="my-5" size="100">
                    <v-img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" class="image"></v-img>
                </v-avatar>

                <h1 class="black--text mb-2">Doctor Charles</h1>
                <h6 class="grey--text mb-2">admin@admin.com</h6>
                <v-btn rounded color="#093b5b" outlined>Book Appointment</v-btn>
            </div>
            <v-divider class="mx-10 mt-3"></v-divider>
            <v-list dense class="mt-5">
                <v-list-item-group v-model="selectedItem" color="white">
                    <v-list-item v-for="(item, i) in items" :key="i" v-slot="{ active }" @click="listPersons()">
                        <v-list-item-icon class="ml-6">
                            <v-icon v-text="item.icon" :color="active ? 'black' : 'grey'"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"
                                :class="active ? 'black--text' : 'grey--text'"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="mt-16" v-slot="{ active }">
                        <v-list-item-icon class="ml-6">
                            <v-icon :color="active ? 'black' : 'grey'">mdi-exit-to-app</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content @click="$router.push('login')">
                            <v-list-item-title
                                :class="active ? 'black--text' : 'grey--text'">Logout</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app color="#F5F6FA" flat>
            <v-text-field dense label="Search..." color="black" class="mt-4"></v-text-field>
            <v-spacer></v-spacer>
            <v-btn class="ml-2" icon small>
                <v-icon dark>
                    mdi-bell
                </v-icon>
            </v-btn>
            <v-btn class="ml-2" icon small>
                <v-icon dark>
                    mdi-email
                </v-icon>
            </v-btn>
            <v-btn class="ml-3" fab small color="#6B6B6E">
                <v-icon dark large color="white">
                    mdi-account
                </v-icon>
            </v-btn>
        </v-app-bar>
        <Home />
    </nav>
</template>

<script>
import Home from "../views/Home.vue";

export default {
    components: {
        Home,
    },
    data: () => ({
        doctor: null,
        selectedItem: 0,
        items: [
            { icon: 'mdi-finance', text: 'Dashboard' },
            { icon: 'mdi-calendar-outline', text: 'Appointment' },
            { icon: 'mdi-account-outline', text: 'Doctors' },
            { icon: 'mdi-content-paste', text: 'Patients' },
            { icon: 'mdi-map-marker-outline', text: 'Location' },
            { icon: 'mdi-cogs', text: 'Settings' },
        ]
    }),
    methods: {
        listPersons() {
            this.items.filter((e) => {
               return this.doctor = e.text == "Doctors";
            });
            if(this.doctor) {
                this.$router.push('/doctors')
            }
        }
    },
}
</script>

<style>
.image {
    border: 2px solid #2EBFAF
}
</style>