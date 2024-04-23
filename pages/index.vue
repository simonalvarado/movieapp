<template>
  <div class="login-page">
    <div class="title-container">
      <MovieAppTitle />
    </div>
    <MovieAppLogin
      :error-message="loginError ? 'Invalid email or password.' : ''"
      aria-label="Login form"
      @login="handleLogin"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginError: false,
    }
  },
  head() {
    return {
      title: 'Log in - Movies App',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Log in to access the movies app.',
        },
      ],
    }
  },
  methods: {
    // This method handles the login logic
    handleLogin({ email, password }) {
      // Dummy login logic
      if (email === 'test@example.com' && password === 'password') {
        // Redirect to movies page
        this.$router.push('/movies')
      } else {
        this.loginError = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  @media (max-width: 450px) {
    padding: 0 16px;
  }
}
.title-container {
  display: block;
  text-align: center;
  color: #f5f5f7;
  padding: 60px 0 60px;
}
</style>
