<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <vue-tel-input-vuetify
          :preferred-countries="['id', 'gb', 'ua']"
          :valid-characters-only="true"
          @input="onInput"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="6">
        <div v-if="phone.number" style="color: #e83e8c">
          <span>
            Number:
            <strong>{{ phone.number }}</strong
            >,&nbsp;
          </span>
          <span>
            Is valid:
            <strong>{{ phone.valid }}</strong
            >,&nbsp;
          </span>
          <span>
            Country:
            <strong>{{ phone.country }}</strong>
          </span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Example",
  data() {
    return {
      phone: {
        number: "",
        valid: false,
        country: undefined
      }
    };
  },
  methods: {
    onInput(formattedNumber, { number, valid, country }) {
      this.phone.number = number.international;
      this.phone.valid = valid;
      this.phone.country = country && country.name;
    }
  }
};
</script>
