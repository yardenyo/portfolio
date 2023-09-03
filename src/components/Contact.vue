<template>
  <div class="contact">
    <div class="title-container">
      <div class="contact-title">
        <h1>Contact Me</h1>
      </div>
      <div class="title-underline"></div>
    </div>
    <div class="wrapper">
      <div class="contact-form">
        <form>
          <div class="form-group-wrapper">
            <FormField
              name="first-name"
              label="First Name"
              type="text"
              :value="state.firstName"
              :error="v$?.firstName?.$error"
              :dirty="v$?.firstName?.$dirty"
              :errorMessage="v$?.firstName?.$silentErrors[0]?.$message"
              @update:modelValue="state.firstName = $event"
            />
            <FormField
              name="last-name"
              label="Last Name"
              type="text"
              :value="state.lastName"
              :error="v$?.lastName?.$error"
              :dirty="v$?.lastName?.$dirty"
              :errorMessage="v$?.lastName?.$silentErrors[0]?.$message"
              @update:modelValue="state.lastName = $event"
            />
          </div>
          <FormField
            name="email"
            label="Email"
            type="email"
            :value="state.email"
            :error="v$?.email?.$error"
            :dirty="v$?.email?.$dirty"
            :errorMessage="v$?.email?.$silentErrors[0]?.$message"
            @update:modelValue="state.email = $event"
          />
          <FormField
            name="message"
            label="Message"
            type="text"
            :value="state.message"
            :error="v$?.message?.$error"
            :dirty="v$?.message?.$dirty"
            :errorMessage="v$?.message?.$silentErrors[0]?.$message"
            @update:modelValue="state.message = $event"
          />
          <button type="submit" class="submit-button" @click="sendMessage">
            Send Message
          </button>
          <small class="form-text">* All fields are required</small>
        </form>
      </div>
      <div class="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.7826921219435!2d34.8071768595719!3d31.96679157412086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b44655cc1c51%3A0xd09dee5e4f6f53c1!2z16rXqNeeIteRIDEsINeo15DXqdeV158g15zXpteZ15XXnw!5e0!3m2!1siw!2sil!4v1693668753843!5m2!1siw!2sil"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <div class="message success" v-if="state.messageSent && !state.isWarning">
      <h3>Message sent successfully!</h3>
    </div>
    <div class="message warning" v-if="state.messageSent && state.isWarning">
      <h3>Message failed to send!</h3>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import emailjs from "@emailjs/browser";
import ScrollReveal from "scrollreveal";
import ScrollRevealObject from "@/shared/scrollRevealObject";
import FormField from "@/components/FormField.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

const state = reactive({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  messageSent: false,
  isWarning: false,
});

const validations = {
  firstName: {
    required: helpers.withMessage("First name is required", required),
  },
  lastName: {
    required: helpers.withMessage("Last name is required", required),
  },
  email: {
    required: helpers.withMessage("Email is required", required),
    email: helpers.withMessage("Email must be valid", email),
  },
  message: { required: helpers.withMessage("Message is required", required) },
};

const v$ = useVuelidate(validations, state);

function sendMessage(event) {
  event.preventDefault();

  v$.value.$touch();

  if (v$.value.$invalid) return;

  state.messageSent = true;

  const templateParams = {
    from_name: `${state.firstName} ${state.lastName}`,
    from_email: state.email,
    message: state.message,
  };

  emailjs
    .send(
      "service_u4kd7xc",
      "template_ix2d06a",
      templateParams,
      "TIqwvU0rBitO4MN8t"
    )
    .then(
      (response) => {
        state.isWarning = false;
        setTimeout(() => {
          resetForm();
        }, 3000);
      },
      (err) => {
        state.isWarning = true;
        setTimeout(() => {
          resetForm();
        }, 3000);
      }
    );
}

function resetForm() {
  state.firstName = "";
  state.lastName = "";
  state.email = "";
  state.message = "";
  state.messageSent = false;
  v$.value.$reset();
}

onMounted(() => {
  ScrollReveal().reveal(".contact-title", ScrollRevealObject);
  ScrollReveal().reveal(".contact-form", ScrollRevealObject);
  ScrollReveal().reveal(".contact-map", ScrollRevealObject);
});
</script>

<style scoped lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $container-background;
  padding: 2rem;

  .message {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 4rem;
    margin-bottom: 1rem;
  }

  .success {
    h3 {
      color: $success;
    }
  }

  .warning {
    h3 {
      color: $danger;
    }
  }

  .title-container {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;

    .contact-title {
      font-size: 1rem;
      font-weight: 500;
      color: $accent;
    }

    .title-underline {
      content: "";
      display: block;
      width: 25%;
      height: 2px;
      background-color: $primary;
      margin: 0.5rem auto;
    }
  }

  .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    gap: 2rem;
    padding: 0 4rem;

    .contact-form {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;

      form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .form-group-wrapper {
          width: 100%;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .submit-button {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid $primary;
          border-radius: 0.25rem;
          outline: none;
          font-size: 1rem;
          font-weight: 500;
          color: $black;
          background-color: $primary;
          cursor: pointer;
          transition: all 0.2s ease-in-out;

          &:hover {
            background-color: $accent;
            border: 1px solid $accent;
            color: $white;
          }
        }
      }
    }

    .contact-map {
      width: 50%;
      height: 25rem;
      border: 1px solid $accent;
      border-radius: 0.25rem;
      overflow: hidden;
    }
  }
}

@media screen and (max-width: $desktop-width) {
  .title-container {
    width: 100% !important;
  }

  .wrapper {
    flex-direction: column-reverse !important;
    padding: 0 2rem !important;

    .contact-form {
      width: 100% !important;
      margin-bottom: 2rem !important;
    }

    .contact-map {
      width: 100% !important;
      height: 25rem !important;
    }
  }
}

@media screen and (max-width: $tablet-width) {
  .title-container {
    width: 100% !important;
  }

  .wrapper {
    .contact-form {
      form {
        .form-group-wrapper {
          flex-direction: column !important;
          gap: 0 !important;
        }
      }
    }
  }
}

@media screen and (max-width: $mobile-width) {
  .title-container {
    width: 100% !important;
  }
}
</style>
