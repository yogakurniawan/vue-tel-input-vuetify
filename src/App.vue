<template>
  <v-app>
    <v-content>
      <Example/>
    </v-content>
  </v-app>
</template>

<script>
import Example from './components/Example';

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
