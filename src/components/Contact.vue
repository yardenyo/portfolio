<template>
  <div class="contact">
    <div class="title-container">
      <div class="contact-title">
        <h1>Contact Me</h1>
      </div>
      <div class="title-underline"></div>
    </div>
    <div class="message success" v-if="state.messageSent && !state.isWarning">
      <h3>Message sent successfully!</h3>
    </div>
    <div class="message warning" v-if="state.messageSent && state.isWarning">
      <h3>Message failed to send!</h3>
    </div>
    <div class="wrapper">
      <div class="contact-form">
        <form>
          <div class="form-group">
            <div class="form-group-wrapper">
              <div class="form-group-wrapper-fname">
                <label for="first-name"><h3>First Name</h3></label>
                <input
                  v-model="state.firstName"
                  type="text"
                  id="first-name"
                  name="first-name"
                  required
                />
              </div>
              <div class="form-group-wrapper-lname">
                <label for="last-name"><h3>Last Name</h3></label>
                <input
                  v-model="state.lastName"
                  type="text"
                  id="last-name"
                  name="last-name"
                  required
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="email"><h3>Email</h3></label>
            <input
              v-model="state.email"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div class="form-group">
            <label for="message"><h3>Message</h3></label>
            <textarea
              v-model="state.message"
              id="message"
              name="message"
              rows="5"
              required
            ></textarea>
          </div>
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
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import emailjs from "@emailjs/browser";
import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
  delay: 200,
  duration: 800,
  distance: "50px",
  origin: "top",
  easing: "ease-out",
  reset: true,
});

const state = reactive({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  messageSent: false,
  isWarning: false,
});

function sendMessage(event) {
  event.preventDefault();

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
}

onMounted(() => {
  sr.reveal(".contact-title", { interval: 200 });
  sr.reveal(".contact-form", { delay: 200 });
  sr.reveal(".contact-map", { delay: 200 });
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

        .form-group {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 1rem;

          .form-group-wrapper {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
            gap: 1rem;

            .form-group-wrapper-fname,
            .form-group-wrapper-lname {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              text-align: left;
              margin-bottom: 1rem;
            }
          }
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
}

textarea {
  resize: none;
  height: auto;
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

    .contact-form {
      form {
        .form-group {
          .form-group-wrapper {
            .form-group-wrapper-fname,
            .form-group-wrapper-lname {
              width: 100% !important;
            }
          }
        }
      }
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
        .form-group {
          .form-group-wrapper {
            flex-direction: column !important;
            .form-group-wrapper-fname,
            .form-group-wrapper-lname {
              width: 100% !important;
            }
          }
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
