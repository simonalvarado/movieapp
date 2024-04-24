<template>
  <div class="login-container">
    <form @submit.prevent="login">
      <h2 class="login-title">Sign in</h2>
      <div
        v-if="errorMessage"
        id="error-message"
        class="error-message-container"
      >
        <p class="error-message">{{ errorMessage }}</p>
      </div>
      <div class="form-group">
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="Email"
          required
          :class="{ 'invalid-input': isInvalidEmail }"
          aria-describedby="email-error error-message"
          @keyup="validateEmail"
        />
        <p v-if="isInvalidEmail" id="email-error" class="validation-message">
          Please enter a valid email.
        </p>
      </div>
      <div class="form-group">
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Password"
          required
          aria-describedby="error-message"
        />
      </div>
      <button type="submit" class="login-button">Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      email: '',
      password: '',
      emailTouched: false,
    }
  },
  computed: {
    // Check if the email is valid
    isInvalidEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return this.emailTouched && !re.test(this.email.toLowerCase())
    },
  },
  methods: {
    // Validate the email when the user types
    validateEmail() {
      this.emailTouched = true
    },
    // Emit the login event with the email and password
    login() {
      if (this.isInvalidEmail) {
        return
      }
      this.$emit('login', { email: this.email, password: this.password })
    },
  },
}
</script>

<style lang="scss" scoped>
@import'~@/assets/scss/_variables.scss';

.login-container {
  max-width: 400px;
  color: $main-font-color;
  width: 100%;
  margin: 32px auto;
}

.login-title {
  margin-bottom: 20px;
}

.error-message-container {
  background-color: rgb(216, 157, 49);
  color: #000;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  font-weight: 400;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(128, 128, 128, 0.7);
  border-radius: 4px;
  height: 48px;
  background-color: rgba(22, 22, 22, 0.7);
  color: $main-font-color;

  &:focus {
    outline: none;
  }
}

.invalid-input {
  border-color: rgb(229, 9, 20);

  &:focus {
    border-color: rgb(229, 9, 20);
  }
}

.validation-message {
  color: rgb(229, 9, 20);
  margin-top: 5px;
  font-size: 0.8rem;
}

.login-button {
  width: 100%;
  height: 48px;
  padding: 10px;
  background-color: rgb(229, 9, 20);
  color: $main-font-color;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rgb(189, 8, 17);
  }
}
</style>
