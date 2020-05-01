<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <vue-tel-input-vuetify
          :preferred-countries="['us', 'gb', 'ua']"
          :valid-characters-only="true"
          @input="onInput"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Example"
};
</script>
