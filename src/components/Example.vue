<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <vue-tel-input-vuetify
          v-model="myPhone"
          :preferred-countries="['id', 'gb', 'ua', 'us']"
          :valid-characters-only="true"
          select-label="Code"
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
     <v-row justify="center">
      <v-col cols="6">
        <v-btn @click="myPhone = '+503 7703 4643'">Set phone</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueTelInputVuetify from '../lib/vue-tel-input-vuetify.vue';

export default {
  name: 'Example',
  components: {
    VueTelInputVuetify,
  },
  data() {
    return {
      myPhone: '',
      phone: {
        number: '',
        valid: false,
        country: undefined,
      },
    };
  },
  methods: {
    onInput(formattedNumber, { number, valid, country }) {
      this.phone.number = number.international;
      this.phone.valid = valid;
      this.phone.country = country && country.name;
    },
  },
};
</script>
