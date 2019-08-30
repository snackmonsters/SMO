<template>
    <v-layout>
        <v-toolbar fixed id="Header">
            <v-toolbar-side-icon @click.stop="drawer = !drawer">
                <v-icon>menu</v-icon>
            </v-toolbar-side-icon>
            <router-link to="/" exact style="text-decoration:none; cursor:pointer;">
                <img src="../../assets/logo.png" class="logo">
            </router-link>
        </v-toolbar>
    </v-layout>
</template>

<script>
export default {
    name: 'main-header',
    data() {
        return {
            drawer: null,
        }
    }
}
</script>

<style>
    #Header .logo {
        margin-left: 1.5em;
        margin-top: 0.3em;
        float: left;
        height: 35px;
    }
</style>