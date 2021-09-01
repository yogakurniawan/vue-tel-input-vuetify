<template>
  <div :class="['vue-tel-input-vuetify', wrapperClasses]">
    <div class="country-code">
      <v-select
        v-model="countryCode"
        :class="selectClasses"
        :label="selectLabel"
        @change="onChangeCountryCode"
        :items="sortedCountries"
        :disabled="disabled"
        :outlined="outlined"
        :filled="filled"
        :flat="flat"
        :light="light"
        :readonly="readonly"
        :shaped="shaped"
        :rounded="rounded"
        :background-color="backgroundColor"
        :dense="dense"
        :menu-props="menuProps"
        :height="inputHeight"
        item-text="name"
        item-value="iso2"
        return-object
      >
        <template v-slot:selection>
          <div :class="activeCountry.iso2.toLowerCase()" class="vti__flag" />
        </template>
        <template v-slot:item="data">
          <span :class="data.item.iso2.toLowerCase()" class="vti__flag" />
          <span>{{ data.item.name }} {{ `+${data.item.dialCode}` }}</span>
        </template>
      </v-select>
    </div>
    <v-text-field
      ref="input"
      type="tel"
      :class="textFieldClasses"
      :messages="messages"
      :error-messages="errorMessages"
      :success-messages="successMessages"
      :hint="hint"
      :suffix="suffix"
      :prefix="prefix"
      :background-color="backgroundColor"
      :rules="rules"
      :loader-height="loaderHeight"
      :loading="loading"
      :hide-details="hideDetails"
      :clearable="clearable"
      :filled="filled"
      :full-width="fullWidth"
      :flat="flat"
      :light="light"
      :validate-on-blur="validateOnBlur"
      :outlined="outlined"
      :dense="dense"
      :persistent-hint="persistentHint"
      :readonly="readonly"
      :error="error"
      :success="success"
      :shaped="shaped"
      :single-line="singleLine"
      :rounded="rounded"
      :value="value"
      :label="label"
      :disabled="disabled"
      :placeholder="placeholder"
      v-model="phone"
      :autofocus="autofocus"
      :name="name"
      :required="required"
      :autocomplete="autocomplete"
      :id="inputId"
      :maxlength="maxLen"
      :tabindex="inputOptions && inputOptions.tabindex ? inputOptions.tabindex : 0"
      :height="inputHeight"
      @input="onInput"
      @blur="onBlur"
      @focus="onFocus"
      @click="onClick"
      @change="onChange"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp"
      @keydown="onKeyDown"
      @keyup.enter="onEnter"
      @keyup.space="onSpace"
    >
      <template #append>
        <slot name="append"/>
      </template>
      <template #append-outer>
        <slot name="append-outer"/>
      </template>
      <template #label>
        <slot name="label"/>
      </template>
      <template #message="{ key, message }">
        <slot name="label" v-bind="{ key, message }"/>
      </template>
      <template #prepend>
        <slot name="prepend"/>
      </template>
      <template #prepend-inner>
        <slot name="prepend-inner"/>
      </template>
      <template #progress>
        <slot name="progress"/>
      </template>
    </v-text-field>
  </div>
</template>

<script>
import PhoneNumber from 'awesome-phonenumber';
import utils, { getCountry, setCaretPosition } from './utils';

function getDefault(key) {
  return utils.options[key];
}

// Polyfill for Event.path in IE 11: https://stackoverflow.com/a/46093727
function getParents(node, memo) {
  const parsedMemo = memo || [];
  const { parentNode } = node;
  if (!parentNode) {
    return parsedMemo;
  }
  return getParents(parentNode, parsedMemo.concat(parentNode));
}

export default {
  name: 'VueTelInputVuetify',
  directives: {
    // Click-outside by BosNaufal: https://github.com/BosNaufal/vue-click-outside
    'click-outside': {
      bind(el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== 'function') {
          const compName = vNode.context.name;
          let warn = `[Vue-click-outside:] provided expression ${binding.expression} is not a function, but has to be`;
          if (compName) {
            warn += `Found in component ${compName}`;
          }
          console.warn(warn);
        }
        // Define Handler and cache it on the element
        const { bubble } = binding.modifiers;
        const handler = (e) => {
          // Fall back to composedPath if e.path is undefined
          const path = e.path
            || (e.composedPath ? e.composedPath() : false)
            || getParents(e.target);
          if (
            bubble
            || (path.length && !el.contains(path[0]) && el !== path[0])
          ) {
            binding.value(e);
          }
        };
        el.__vueClickOutside__ = handler;
        // add Event Listeners
        document.addEventListener('click', handler);
      },
      unbind(el) {
        // Remove Event Listeners
        document.removeEventListener('click', el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      },
    },
  },
  props: {
    messages: {
      type: [Array, String],
    },
    errorMessages: {
      type: [Array, String],
    },
    successMessages: {
      type: [Array, String],
    },
    hint: {
      type: String,
    },
    suffix: {
      type: String,
    },
    prefix: {
      type: String,
    },
    backgroundColor: {
      type: String,
    },
    rules: {
      type: Array,
      default: () => [],
    },
    loaderHeight: {
      type: [Number, String],
      default: 2,
    },
    loading: {
      type: [Boolean, String],
      default: false,
    },
    hideDetails: {
      type: [Boolean, String],
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    filled: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    validateOnBlur: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    dense: {
      type: Boolean,
      default: false,
    },
    persistentHint: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    shaped: {
      type: Boolean,
      default: false,
    },
    singleLine: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    inputHeight: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: () => getDefault('label'),
    },
    selectLabel: {
      type: String,
      default: '',
    },
    menuProps: {
      type: [String, Array, Object],
      default: () => {},
    },
    placeholder: {
      type: String,
      default: () => getDefault('placeholder'),
    },
    disabledFetchingCountry: {
      type: Boolean,
      default: () => getDefault('disabledFetchingCountry'),
    },
    disabled: {
      type: Boolean,
      default: () => getDefault('disabled'),
    },
    mode: {
      type: String,
      default: () => getDefault('mode'),
    },
    invalidMsg: {
      type: String,
      default: () => getDefault('invalidMsg'),
    },
    required: {
      type: Boolean,
      default: () => getDefault('required'),
    },
    allCountries: {
      type: Array,
      default: () => getDefault('allCountries'),
    },
    defaultCountry: {
      // Default country code, ie: 'AU'
      // Will override the current country of user
      type: String,
      default: () => getDefault('defaultCountry'),
    },
    preferredCountries: {
      type: Array,
      default: () => getDefault('preferredCountries'),
    },
    onlyCountries: {
      type: Array,
      default: () => getDefault('onlyCountries'),
    },
    ignoredCountries: {
      type: Array,
      default: () => getDefault('ignoredCountries'),
    },
    autocomplete: {
      type: String,
      default: () => getDefault('autocomplete'),
    },
    autofocus: {
      type: Boolean,
      default: () => getDefault('autofocus'),
    },
    name: {
      type: String,
      default: () => getDefault('name'),
    },
    wrapperClasses: {
      type: [String, Array, Object],
      default: () => getDefault('wrapperClasses'),
    },
    textFieldClasses: {
      type: [String, Array, Object],
      default: () => '',
    },
    selectClasses: {
      type: [String, Array, Object],
      default: () => '',
    },
    inputClasses: {
      type: [String, Array, Object],
      default: () => '',
    },
    inputId: {
      type: String,
      default: () => getDefault('inputId'),
    },
    inputOptions: {
      type: Object,
      default: () => getDefault('inputOptions'),
    },
    maxLen: {
      type: Number,
      default: () => getDefault('maxLen'),
    },
  },
  data() {
    return {
      phone: '',
      activeCountry: { iso2: '' },
      open: false,
      finishMounted: false,
      selectedIndex: null,
      typeToFindInput: '',
      typeToFindTimer: null,
      cursorPosition: 0,
      countryCode: null,
    };
  },
  computed: {
    parsedMode() {
      if (this.mode) {
        if (!['international', 'national'].includes(this.mode)) {
          console.error('Invalid value of prop "mode"');
        } else {
          return this.mode;
        }
      }
      if (!this.phone || this.phone[0] !== '+') {
        return 'national';
      }
      return 'international';
    },
    filteredCountries() {
      // List countries after filtered
      if (this.onlyCountries.length) {
        return this.getCountries(this.onlyCountries);
      }
      if (this.ignoredCountries.length) {
        return this.allCountries.filter(
          ({ iso2 }) => !this.ignoredCountries.includes(iso2.toUpperCase())
            && !this.ignoredCountries.includes(iso2.toLowerCase()),
        );
      }
      return this.allCountries;
    },
    sortedCountries() {
      // Sort the list countries: from preferred countries to all countries
      const preferredCountries = this.getCountries(
        this.preferredCountries,
      ).map(country => ({ ...country, preferred: true }));
      return [...preferredCountries, ...this.filteredCountries];
    },
    phoneObject() {
      const result = PhoneNumber(this.phone || '', this.activeCountry.iso2).toJSON();
      Object.assign(result, {
        isValid: result.valid,
        country: this.activeCountry,
      });
      if (!this.phone) {
        return {
          ...result,
          number: {
            input: '',
          },
        };
      }
      return result;
    },
    phoneText() {
      let key = 'input';
      if (this.phoneObject.valid) {
        key = this.parsedMode;
      }
      return this.phoneObject.number[key] || '';
    },
  },
  watch: {
    // eslint-disable-next-line func-names
    'phoneObject.valid': function (value) {
      if (value) {
        this.phone = this.phoneText;
      }
      this.$emit('validate', this.phoneObject);
      this.$emit('onValidate', this.phoneObject); // Deprecated
    },
    value() {
      this.phone = this.value;
    },
    open(isDropdownOpened) {
      // Emit open and close events
      if (isDropdownOpened) {
        this.$emit('open');
      } else {
        this.$emit('close');
      }
    },
    phone(newValue, oldValue) {
      if (newValue) {
        if (newValue[0] === '+') {
          const code = PhoneNumber(newValue).getRegionCode();
          if (code) {
            this.activeCountry = this.findCountry(code) || this.activeCountry;
          }
        }
      }
      // Reset the cursor to current position if it's not the last character.
      if (oldValue && this.cursorPosition < oldValue.length) {
        this.$nextTick(() => {
          setCaretPosition(this.$refs.input, this.cursorPosition);
        });
      }

      this.$emit('input', this.phoneText, this.phoneObject);
    },
    activeCountry(value) {
      if (value && value.iso2) {
        this.$emit('country-changed', value);
      }
    },
  },
  mounted() {
    this.initializeCountry()
      .then(() => {
        if (
          !this.phone
          && this.inputOptions
          && this.inputOptions.showDialCode
          && this.activeCountry.dialCode
        ) {
          this.phone = `+${this.activeCountry.dialCode}`;
        }
        this.countryCode = this.activeCountry;
        this.$emit('validate', this.phoneObject);
        this.$emit('onValidate', this.phoneObject); // Deprecated
      })
      .catch(console.error)
      .finally(() => {
        this.finishMounted = true;
      });
  },
  created() {
    if (this.value) {
      this.phone = this.value.trim();
    }
  },
  methods: {
    initializeCountry() {
      return new Promise((resolve) => {
        /**
         * 1. If the phone included prefix (+12), try to get the country and set it
         */
        if (this.phone && this.phone[0] === '+') {
          const activeCountry = PhoneNumber(this.phone).getRegionCode();
          if (activeCountry) {
            this.choose(activeCountry);
            resolve();
            return;
          }
        }
        /**
         * 2. Use default country if passed from parent
         */
        if (this.defaultCountry) {
          const defaultCountry = this.findCountry(this.defaultCountry);
          if (defaultCountry) {
            this.choose(defaultCountry);
            resolve();
            return;
          }
        }
        const fallbackCountry = this.findCountry(this.preferredCountries[0])
          || this.filteredCountries[0];
        /**
         * 3. Check if fetching country based on user's IP is allowed, set it as the default country
         */
        if (!this.disabledFetchingCountry) {
          getCountry()
            .then((res) => {
              if (this.phone === '') {
                this.activeCountry = this.findCountry(res) || this.activeCountry;
              }
            })
            .catch((error) => {
              console.warn(error);
              /**
               * 4. Use the first country from preferred list (if available) or all countries list
               */
              this.choose(fallbackCountry);
            })
            .finally(() => {
              resolve();
            });
        } else {
          /**
           * 4. Use the first country from preferred list (if available) or all countries list
           */
          this.choose(fallbackCountry);
          resolve();
        }
      });
    },
    /**
     * Get the list of countries from the list of iso2 code
     */
    getCountries(list = []) {
      return list
        .map(countryCode => this.findCountry(countryCode))
        .filter(Boolean);
    },
    findCountry(iso = '') {
      return this.allCountries.find(
        country => country.iso2 === iso.toUpperCase(),
      );
    },
    getItemClass(index, iso2) {
      const highlighted = this.selectedIndex === index;
      const lastPreferred = index === this.preferredCountries.length - 1;
      const preferred = this.preferredCountries.some(
        c => c.toUpperCase() === iso2,
      );
      return {
        highlighted,
        'last-preferred': lastPreferred,
        preferred,
      };
    },
    choose(country, toEmitInputEvent = false) {
      this.activeCountry = country || this.activeCountry || {};
      if (
        this.phone
        && this.phone[0] === '+'
        && this.activeCountry.iso2
        && this.phoneObject.number.significant
      ) {
        // Attach the current phone number with the newly selected country
        this.phone = PhoneNumber(
          this.phoneObject.number.significant,
          this.activeCountry.iso2,
        ).getNumber('international');
      } else if (
        this.inputOptions
        && this.inputOptions.showDialCode
        && country
      ) {
        // Reset phone if the showDialCode is set
        this.phone = `+${country.dialCode}`;
      }
      if (toEmitInputEvent) {
        this.$emit('input', this.phoneText, this.phoneObject);
        this.$emit('onInput', this.phoneObject); // Deprecated
      }
    },
    onInput(e) {
      // this.$refs.input.setCustomValidity(
      //   this.phoneObject.valid ? "" : this.invalidMsg
      // );
      // Returns response.number to assign it to v-model (if being used)
      // Returns full response for cases @input is used
      // and parent wants to return the whole response.
      this.$emit('input', this.phoneText, this.phoneObject);
      this.$emit('onInput', this.phoneObject); // Deprecated
      // Keep the current cursor position just in case the input reformatted
      // and it gets moved to the last character.
      if (e && e.target) {
        this.cursorPosition = e.target.selectionStart;
      }
    },
    onBlur() {
      this.$emit('blur');
      this.$emit('onBlur'); // Deprecated
    },
    onFocus(event) {
      this.$emit('focus', event);
    },
    onClick(event) {
      this.$emit('click', event);
    },
    onChange(value) {
      this.$emit('change', value);
    },
    onMouseUp(event) {
      this.$emit('mouseup', event);
    },
    onMouseDown(event) {
      this.$emit('mousedown', event);
    },
    onKeyDown(event) {
      this.$emit('keydown', event);
    },
    onEnter() {
      this.$emit('enter');
      this.$emit('onEnter'); // Deprecated
    },
    onSpace() {
      this.$emit('space');
      this.$emit('onSpace'); // Deprecated
    },
    focus() {
      this.$refs.input.focus();
    },
    toggleDropdown() {
      if (this.disabled) {
        return;
      }
      this.open = !this.open;
    },
    clickedOutside() {
      this.open = false;
    },
    keyboardNav(e) {
      if (e.keyCode === 40) {
        // down arrow
        e.preventDefault();
        this.open = true;
        if (this.selectedIndex === null) {
          this.selectedIndex = 0;
        } else {
          this.selectedIndex = Math.min(
            this.sortedCountries.length - 1,
            this.selectedIndex + 1,
          );
        }
        const selEle = this.$refs.list.children[this.selectedIndex];
        if (
          selEle.offsetTop + selEle.clientHeight
          > this.$refs.list.scrollTop + this.$refs.list.clientHeight
        ) {
          this.$refs.list.scrollTop = selEle.offsetTop
            - this.$refs.list.clientHeight
            + selEle.clientHeight;
        }
      } else if (e.keyCode === 38) {
        // up arrow
        e.preventDefault();
        this.open = true;
        if (this.selectedIndex === null) {
          this.selectedIndex = this.sortedCountries.length - 1;
        } else {
          this.selectedIndex = Math.max(0, this.selectedIndex - 1);
        }
        const selEle = this.$refs.list.children[this.selectedIndex];
        if (selEle.offsetTop < this.$refs.list.scrollTop) {
          this.$refs.list.scrollTop = selEle.offsetTop;
        }
      } else if (e.keyCode === 13) {
        // enter key
        if (this.selectedIndex !== null) {
          this.choose(this.sortedCountries[this.selectedIndex]);
        }
        this.open = !this.open;
      } else {
        // typing a country's name
        this.typeToFindInput += e.key;
        clearTimeout(this.typeToFindTimer);
        this.typeToFindTimer = setTimeout(() => {
          this.typeToFindInput = '';
        }, 700);
        // don't include preferred countries so we jump to the right place in the alphabet
        const typedCountryI = this.sortedCountries
          .slice(this.preferredCountries.length)
          .findIndex(c => c.name.toLowerCase().startsWith(this.typeToFindInput));
        if (typedCountryI >= 0) {
          this.selectedIndex = this.preferredCountries.length + typedCountryI;
          const selEle = this.$refs.list.children[this.selectedIndex];
          const needToScrollTop = selEle.offsetTop < this.$refs.list.scrollTop;
          const needToScrollBottom = selEle.offsetTop + selEle.clientHeight
            > this.$refs.list.scrollTop + this.$refs.list.clientHeight;
          if (needToScrollTop || needToScrollBottom) {
            this.$refs.list.scrollTop = selEle.offsetTop - this.$refs.list.clientHeight / 2;
          }
        }
      }
    },
    reset() {
      this.selectedIndex = this.sortedCountries
        .map(c => c.iso2)
        .indexOf(this.activeCountry.iso2);
      this.open = false;
    },
    onChangeCountryCode() {
      this.choose(this.countryCode, true);
    },
  },
};
</script>

<style src="./sprite.css"></style>
<style lang="scss">
.vti__flag {
  margin-right: 8px;
}

.vue-tel-input-vuetify {
  display: flex;
  align-items: center;

  .country-code {
    width: 75px;
  }

  li.last-preferred {
    border-bottom: 1px solid #cacaca;
  }

  .v-text-field {
    .v-select__selections {
      position: relative;
      .vti__flag {
        position: absolute;
        margin-left: 18px;
      }
    }
    &--outlined {
      .v-select__selections {
        .vti__flag {
          margin-left: auto;
        }
      }
    }
  }
}
</style>
