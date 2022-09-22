<template>
    <v-app-bar app color="primary darken-4" dark elevate-on-scroll width="100%">
      <v-app-bar-title>Tech<b>Store</b></v-app-bar-title>
      
      <v-spacer></v-spacer>
      
      <v-icon dark large @click="changeTheme = !changeTheme">mdi-theme-light-dark</v-icon>
    </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    changeTheme: false,
  }),

  watch: {
    changeTheme(newValue) {
      this.$vuetify.theme.dark = newValue;
    }
  }
}
</script>