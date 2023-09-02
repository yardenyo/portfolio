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
          <div class="form-group">
            <div class="form-group-wrapper">
              <div class="form-group-wrapper-fname">
                <label for="first-name"><h3>First Name</h3></label>
                <input type="text" id="first-name" name="first-name" required />
              </div>
              <div class="form-group-wrapper-lname">
                <label for="last-name"><h3>Last Name</h3></label>
                <input type="text" id="last-name" name="last-name" required />
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="email"><h3>Email</h3></label>
            <input type="email" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="message"><h3>Message</h3></label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" class="submit-button">Send Message</button>
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
import { ref, onMounted, computed } from "vue";
import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
  delay: 200,
  duration: 800,
  distance: "50px",
  origin: "top",
  easing: "ease-out",
  reset: true,
});

onMounted(() => {
  sr.reveal(".contact-title", { interval: 200 });
});
</script>

<style scoped lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $container-background;
  padding: 2rem;

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
