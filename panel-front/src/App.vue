<template>
  <v-app>
    <AppTopNavBar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppTopNavBar from './components/AppTopNavBar.vue';

export default {
  name: 'App',
  components: { AppTopNavBar }
};
</script>
