<template>
  <div>
    <div class="card login-card">
      <div class="card-header" :class="{ 'bannerbg-dark': $store.state.isDark, 'bannerbg-light': !$store.state.isDark }"
        style="padding:0">
        <button v-bind:class="{ 'active': login }" class="login-btn" @click="login = true">Login</button>
        <button v-bind:class="{ 'active': !login }" class="login-btn" @click="login = false"> Sign Up</button>
      </div>
      <div class="card-body" v-if="login">
        <a class="navbar-brand" href="/"><img style="height:60px"
            src="https://www.ramabit.com/media/settings/ramabit.jpg" alt=""></a><br><br>
        <div class="card">
          <div class="card-header"
            :class="{ 'bannerbg-dark': $store.state.isDark, 'bannerbg-light': !$store.state.isDark }">
            login
          </div>
          <div class="card-body">
            <form @submit.prevent="submitForm()">
              <div id='form1'>
                <input type="text" class="form-control" v-model="username" placeholder="Username" name="">
                <br>
                <div class="form-group">
                  <div class="input-group">
                    <input v-model="password" class="form-control" type="password">
                    <div class="input-group-addon">
                      <a class="input-group-text" @click.prevent="show"
                        style="border-radius: 0 5px 5px 0"><font-awesome-icon class="eye-slash"
                          style="font-size:25px;display:none" :icon="['far', 'eye-slash']" /><font-awesome-icon
                          class="eye" style="font-size:25px" :icon="['far', 'eye']" /></a>
                    </div>
                  </div>
                </div>

                <p style="text-align:left; font-size:14px">Forgot password? <a>Click Here</a></p>
              </div>
              <div id="form2" hidden>
                <label for="">Google Authenticator Code</label>
                <input v-model="gcode" class="form-control" type="text"><br>
              </div>

              <button class="btn btn-dark form-control">LOGIN</button>
              <br><br>
              <p style="font-size:14px">Don’t have an account? <a>Sign up</a></p>


            </form>
          </div>
        </div>
      </div>




      <div class="card-body" v-if="!login">
        <a class="navbar-brand" href="#"><img style="height:60px"
            src="https://www.ramabit.com/media/settings/ramabit.jpg" alt=""></a><br><br>
        <div class="card">
          <div class="card-header"
            :class="{ 'bannerbg-dark': $store.state.isDark, 'bannerbg-light': !$store.state.isDark }">
            Sign Up
          </div>
          <div class="card-body">
            <form @submit.prevent="RsubmitForm()">
              <div class="alert alert-success" v-if="success">{{ success }}</div>
              <div class="form-group">
                <div class="input-group mb-3">
                  <input required class="form-control Rpass" v-model="Rfirst_name" placeholder="First Name">
                  <input required class="form-control Rpass" v-model="Rlast_name" placeholder="Last Name">
                </div><br>
              </div>
              <input required type="text" v-model="Remail" class="form-control Remail" placeholder="Username" name="">
              <div class="invalid-tooltip">{{ Retool }}</div>
              <br>
              <div class="form-group">
                <div class="input-group">
                  <input required class="form-control Rpass" v-model="Rpassword" placeholder="Password" type="password">
                  <div class="invalid-tooltip">{{ Rptool }}</div>

                  <div class="input-group-addon">
                    <a class="input-group-text" @click="show2" style="border-radius: 0 5px 5px 0"><font-awesome-icon
                        class="eyes-slash" style="font-size:25px;display:none"
                        :icon="['far', 'eye-slash']" /><font-awesome-icon class="eyes" style="font-size:25px"
                        :icon="['far', 'eye']" /></a>
                  </div>
                </div>
              </div><br>
              <input v-if="sslash" class="form-control Rrepass" v-model="Rrepassword" placeholder="Confirm Password"
                type="password">
              <div class="invalid-tooltip">{{ Rreptool }}</div>
              <p style="text-align:left; font-size:14px">Forgot password? <a>Click Here</a></p>
              <button id="submit2" class="btn btn-dark form-control" type="submit">REGISTER</button>
            </form>
            <br><br>
            <p style="font-size:14px">Don’t have an account? <a>Sign up</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Vcode from "vue3-puzzle-vcode";
export default {
  name: 'pages-authentication-login-v1',
  metaInfo: {
    title: 'Login v1 - Pages'
  },
  components: {
    Vcode
  },
  data: () => ({
    errors: [],
    errors2: [],
    ptool: '',
    utool: '',
    username: '',
    password: '',
    isShow: false,
    Rerrors: [],
    Rerrors2: [],
    Remail: '',
    Retool: '',
    gcode: false,
    Rutool: '',
    Rpassword: '',
    Rptool: '',
    Rrepassword: '',
    Rlast_name: '',
    Rfirst_name: '',
    slash: true,
    sslash: true,
    login: true,
    success: false,
    Rreptool: '',
    RisShow: false
  }),
  mounted() {
    document.title = ' The My Exchange | Login '
  },
  methods: {
    async addinfo() {
      const formData = {
        username: this.Remail.toLowerCase(),
        first_name: this.Rfirst_name,
        last_name: this.Rlast_name
      }
      await axios
        .post('/createusersinfo/', formData)
        .then(response => {
          this.success = 'your account has been successfully created , you will be redirected to the login page'
          setTimeout(() => {
            this.success = false
            this.$store.state.showloginindex = false
            this.$store.state.showloginnavbar = false
            this.login = true
          }, 2000)
        })
    },
    async RsubmitForm() {
      this.Rerrors = []
      this.Rerrors2 = []
      this.Rutool = ''
      this.Rptool = ''
      this.Rreptool = ''
      this.Retool = ''
      document.querySelector('.Rpass').className = document.querySelector('.Rpass').className.replace(' is-invalid', '')
      if (this.sslash) {
        document.querySelector('.Rrepass').className = document.querySelector('.Rrepass').className.replace(' is-invalid', '')
      }
      document.querySelector('.Remail').className = document.querySelector('.Remail').className.replace(' is-invalid', '')
      axios.defaults.headers.common.Authorization = ''
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      this.$store.commit('removeToken')
      if (this.Rpassword === '') {
        document.querySelector('.Rpass').className += ' is-invalid'
        this.Rerrors2.push('1')
        this.Rptool = ' Password is required'
      }
      if (this.Remail === '') {
        this.Rerrors2.push('1')
        document.querySelector('.Remail').className += ' is-invalid'
        this.Retool = ' Email is required'
      } else {
        var x = this.Remail
        var atposition = x.indexOf('@')
        var dotposition = x.lastIndexOf('.')
        if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
          this.Rerrors2.push('1')
          document.querySelector('.Remail').className += ' is-invalid'
          this.Retool = 'Invalid email format'
        }
      }
      if (this.Rrepassword === '' && this.sslash) {
        this.errors2.push('1')
        document.querySelector('.Rrepass').className += ' is-invalid'
        this.Rreptool = ' Password confirm is required'
      }
      if ((this.Rpassword !== '' && this.Rrepassword !== '' && this.Rpassword !== this.Rrepassword) && this.sslash) {
        this.errors2.push('1')
        document.querySelector('.Rpass').className += ' is-invalid'
        document.querySelector('.Rrepass').className += ' is-invalid'
        this.Rptool = ' Password confirm failed'
        this.Rreptool = ' Password confirm failed'
      }
      if (this.Rerrors2.length === 0) {
        const formData = {
          username: this.Remail.toLowerCase(),
          email: this.Remail.toLowerCase(),
          password: this.Rpassword
        }
        await axios
          .post('/users/', formData)
          .then(response => {
            this.addinfo()
          })
          .catch(error => {
            if (error.response) {
              for (const property in error.response.data) {
                if (property === 'username') {
                  this.errors.push('Account with this email is already exist')
                } else if (property === 'password') {
                  this.Rerrors.push(' Your password should be more than 8 characters')
                } else {
                  this.Rerrors.push(`${property}: ${error.response.data[property]}`)
                }
              }
            } else if (error.message) {
              this.Rerrors.push(error.message)
            }
          })
      }
      if (this.Rerrors.length) {
        var errors = this.errors
        var error = '<div class="swal2-icon swal2-error swal2-icon-show" style="display: flex;"><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span></div><h5>'
        for (var er = 0; er < errors.length; er++) {
          error += '\n' + errors
        }
        error += '</h5>'
        this.$swal(error)
      }
    },
    async submitForm() {
      this.errors = []
      axios.defaults.headers.common.Authorization = ''
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      this.$store.commit('removeToken')
      if (this.errors2.length === 0) {
        this.username = this.username.replace(' ', '').replace(' ', '').replace(' ', '').replace(' ', '')
        var formData
        if (this.gcode) {
          formData = {
            username: this.username.toLowerCase(),
            password: this.password,
            code: this.gcode
          }
        } else {
          formData = {
            username: this.username.toLowerCase(),
            password: this.password
          }
        }
        await axios
          .post('/token/login', formData)
          .then(response => {
            if (response.data == 1) {
              document.getElementById('form1').hidden = true
              document.getElementById('form2').hidden = false
              return
            }
            const token = response.data.auth_token
            this.$store.commit('setToken', token)
            axios.defaults.headers.common.Authorization = 'Token ' + token
            this.$store.state.isAuthenticated = true
            localStorage.setItem('token', token)
            const toPath = this.$route.go || '/dashboard'
            this.$router.push(toPath)
          })
          .catch(error => {
            if (error.response) {
              console.log(error.response)
              if (error.response.data[0] === 'non_field_errors') {
                this.$swal(`<div class="swal2-icon swal2-error swal2-icon-show" style="display: flex;"><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span></div><h5>Incorrect Username Or Password</h5>`)
              } else {
                this.$swal(`<div class="swal2-icon swal2-error swal2-icon-show" style="display: flex;"><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span></div><h5>${error.response.data[0]}</h5>`)
              }
            } else if (error.message) {
              this.$swal(`<div class="swal2-icon swal2-error swal2-icon-show" style="display: flex;"><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span></div><h5>${error.message}</h5>`)
            }
          })
      }
    }
  }
}
</script>
<style>
#passfld {
  text-security: disc;
  -webkit-text-security: disc;
  -mox-text-security: disc;
}

.invalid-tooltip {
  position: relative;
  top: 0;
  background-color: rgba(0, 0, 0, 0);
  color: red;
  text-align: left;
}

.login-card {
  position: absolute;
  width: 40%;
  left: 30%;
  top: 5%
}

.login-btn {
  width: 50%;
  float: left;
  background: none;
  border-style: none;
  padding: 10px;
  color: grey !important
}

.login-btn:hover {
  background: grey;
  color: black !important
}

.active {
  background: #bcbcbc;
}

@media only screen and (max-width: 700px) {
  .login-card {
    position: absolute;
    width: 80%;
    left: 10%;
    top: 5%
  }
}
</style>
