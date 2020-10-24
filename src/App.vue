<template>
  <v-app>
    <v-main>
      <Example/>
    </v-main>
  </v-app>
</template>

<script>
import Example from './components/Example.vue';

export default {
  name: 'App',
  components: {
    Example,
  },
  data: () => ({
    //
  }),
};
</script>
