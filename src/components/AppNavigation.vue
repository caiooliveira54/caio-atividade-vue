<template>
   <v-content>
        <v-navigation-drawer
            persistent
            :mini-variant="miniVariant"
            :clipped="clipped"
            v-model="drawer"
            enable-resize-watcher
            fixed
            app>

            <v-btn icon @click.stop="miniVariant = !miniVariant">
                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>
        
            <v-list>
                <v-list-tile
                    value="true"
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.to">

                    <v-list-tile-action>
                    <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                    <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                
                </v-list-tile>
            </v-list>
        
        </v-navigation-drawer>

        <v-toolbar
            app
            :clipped-left="clipped" color="#F9F9FC" height="48">
            <v-toolbar-side-icon @click.stop="drawer = !drawer" v-if="isAuthenticated"></v-toolbar-side-icon>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
                <v-btn flat to="/sign-in" data-cy="signinBtn">SIGN IN</v-btn>
            </div>
             <div v-else>
                <v-btn  @click="logout" data-cy="logout">Logout</v-btn>
            </div>
        </v-toolbar>

    </v-content>
</template>

<script>
export default {
    data () {
        return {
            title : "Vue",
            clipped: true,
            drawer: false,
            fixed: true,
            items: [
                {
                    icon: 'bubble_chart',
                    title: 'Menu 1',
                    to: '/repor'
                },
                {
                    icon: 'bubble_chart',
                    title: 'Menu 2',
                    to: '/teste1'
                },
                {
                    icon: 'bubble_chart',
                    title: 'Menu 3',
                     to: '/teste2'
                }
            ],
            miniVariant: true,
            right: true,
            rightDrawer: true,
        }
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut');
        }
    },
}
</script>