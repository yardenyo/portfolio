<template>
  <div class="form-group">
    <label :for="name"
      ><h3>{{ label }}</h3></label
    >
    <input
      :value="value"
      :type="type"
      :id="name"
      :name="name"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <small class="form-error" v-if="error && dirty">
      {{ errorMessage }}
    </small>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  error: {
    type: Boolean,
    required: true,
  },
  dirty: {
    type: Boolean,
    required: true,
  },
  errorMessage: {
    type: String,
  },
});
</script>

<style scoped lang="scss">
.form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;

  .form-error {
    color: $danger;
    font-size: 0.75rem;
    font-weight: 500;
    margin-top: 0.25rem;
  }

  label {
    h3 {
      color: $accent;
      margin-bottom: 0.5rem;
    }
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-bottom: 1px solid rgba(7, 22, 58, 0.2);
    outline: none;
    font-size: 1rem;
    font-weight: 500;
    color: $accent;
    background: none;
    height: auto;
    position: relative;
  }

  textarea {
    resize: none;
    height: auto;
  }
}
</style>
