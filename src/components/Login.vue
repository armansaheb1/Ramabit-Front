<template>
  <div>
          <div class="card login-card">
            <div class="card-header" :class="{'bannerbg-dark' :$store.state.isDark, 'bannerbg-light' :!$store.state.isDark}" style="padding:0">
              <button v-bind:class="{ 'active' : login}" class="login-btn" @click="login = true">Login</button>
              <button v-bind:class="{ 'active' : !login}" class="login-btn" @click="login = false"> Sign Up</button>
            </div>
            <div class="card-body" v-if="login">
              <a class="navbar-brand" href="/"><img style="height:60px" src="https://www.ramabit.com/media/settings/ramabit.jpg" alt=""></a><br><br>
              <div class="card">
                <div class="card-header" :class="{'bannerbg-dark' :$store.state.isDark, 'bannerbg-light' :!$store.state.isDark}">
                login
                </div>
                <div class="card-body" >
                  <form @submit.prevent="submitForm()"  >
                    <div id='form1'>
                  <input type="text" class="form-control" v-model="username" placeholder="Username" name="" id="">
                  <br>
                  <div class="form-group">
                    <div class="input-group" id="show_hide_password">
                      <input v-model="password" class="form-control" type="password">
                      <div class="input-group-addon">
                        <a class="input-group-text" @click.prevent="show" style="border-radius: 0 5px 5px 0" ><font-awesome-icon class="eye-slash" style="font-size:25px;display:none"  :icon="['far', 'eye-slash']" /><font-awesome-icon class="eye" style="font-size:25px"  :icon="['far', 'eye']" /></a>
                      </div>
                    </div>
                  </div>
                  
                  <p style="text-align:left; font-size:14px">Forgot password? <a >Click Here</a></p>
                  </div>
                  <input id="form2" hidden v-model="gcode" class="form-control" type="password"><br>
                  <button class="btn btn-dark form-control">LOGIN</button>
                  <br><br>
                  <p style="font-size:14px">Don’t have an account?  <a >Sign up</a></p>
                  
                 
                  </form>
                </div>
              </div>
            </div>




            <div class="card-body" v-if="!login">
              <a class="navbar-brand" href="#"><img style="height:60px" src="https://www.ramabit.com/media/settings/ramabit.jpg" alt=""></a><br><br>
              <div class="card">
                <div class="card-header" :class="{'bannerbg-dark' :$store.state.isDark, 'bannerbg-light' :!$store.state.isDark}">
                Sign Up
                </div>
                <div class="card-body">
                  <form @submit.prevent="RsubmitForm()">
                    <div class="alert alert-success" v-if="success">{{success}}</div>
                  <div class="form-group">
                    <div class="input-group mb-3" id="show_hide_passwords">
                      <input required class="form-control Rpass" v-model="Rfirst_name" placeholder="First Name" >
                      <input required class="form-control Rpass" v-model="Rlast_name" placeholder="Last Name" >
                    </div><br>
                  </div>
                  <input required type="text" v-model="Remail" class="form-control Remail" placeholder="Username" name="" id="">
                  <div class="invalid-tooltip">{{Retool}}</div>
                  <br>
                  <div class="form-group">
                    <div class="input-group" id="show_hide_passwords">
                      <input required class="form-control Rpass" v-model="Rpassword" placeholder="Password" type="password">
                      <div class="invalid-tooltip">{{Rptool}}</div>
                      
                      <div class="input-group-addon">
                        <a class="input-group-text" @click="show2" style="border-radius: 0 5px 5px 0" ><font-awesome-icon class="eyes-slash" style="font-size:25px;display:none"  :icon="['far', 'eye-slash']" /><font-awesome-icon class="eyes" style="font-size:25px"  :icon="['far', 'eye']" /></a>
                      </div>
                    </div>
                  </div><br>
                  <input v-if="sslash" class="form-control Rrepass" v-model="Rrepassword" placeholder="Confirm Password" type="password">
                  <div class="invalid-tooltip">{{Rreptool}}</div>
                  <p style="text-align:left; font-size:14px">Forgot password? <a >Click Here</a></p>
                  <button id="submit2" class="btn btn-dark form-control" type="submit">REGISTER</button>
                  </form>
                  <br><br>
                  <p style="font-size:14px">Don’t have an account?  <a >Sign up</a></p>
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
    gcode: false,
    password: '',
    isShow: false,
    Rerrors: [],
    Rerrors2: [],
    Remail: '',
    Retool: '',
    Rutool: '',
    Rpassword: '',
    Rptool: '',
    Rrepassword: '',
    Rlast_name: '',
    Rfirst_name: '',
    slash : true,
    sslash: true,
    login: true,
    success: false,
    Rreptool: '',
    RisShow: false
  }),
  mounted () {
    document.title = ' The My Exchange | ورود '
  },
  methods: {
    async  addinfo () {
      const formData = {
          username: this.Remail.toLowerCase(),
          first_name: this.Rfirst_name,
          last_name: this.Rlast_name
        }
        await axios
          .post('/createusersinfo/', formData)
          .then(response => {
             this.success = '. ثبت نام شما با موفقیت انجام شد . به صفحه ورود منتقل میشوید'
            setTimeout(() => {
              this.success = false
              this.$store.state.showloginindex = false
              this.$store.state.showloginnavbar = false
              this.login = true
            }, 2000)
          })
    },
    async  RsubmitForm () {
      this.Rerrors = []
      this.Rerrors2 = []
      this.Rutool = ''
      this.Rptool = ''
      this.Rreptool = ''
      this.Retool = ''
      document.querySelector('.Rpass').className = document.querySelector('.Rpass').className.replace(' is-invalid', '')
      if(this.sslash){
        document.querySelector('.Rrepass').className = document.querySelector('.Rrepass').className.replace(' is-invalid', '')
      }      
      document.querySelector('.Remail').className = document.querySelector('.Remail').className.replace(' is-invalid', '')
      axios.defaults.headers.common.Authorization = ''
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      this.$store.commit('removeToken')
      if (this.Rpassword === '' ) {
        document.querySelector('.Rpass').className += ' is-invalid'
        this.Rerrors2.push('1')
        this.Rptool = ' کلمه عبور را وارد نکرده اید'
      }
      if (this.Remail === '') {
        this.Rerrors2.push('1')
        document.querySelector('.Remail').className += ' is-invalid'
        this.Retool = ' ایمیل را وارد نکرده اید'
      } else {
        var x = this.Remail
        var atposition = x.indexOf('@')
        var dotposition = x.lastIndexOf('.')
        if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
          this.Rerrors2.push('1')
          document.querySelector('.Remail').className += ' is-invalid'
          this.Retool = 'فرمت ایمیل اشتباه است'
        } else {
          var horoof = /[\u0600-\u06FF]/
          if (horoof.test(this.username)) {
            this.errors2.push('1')
            document.querySelector('.Rusername').className += ' is-invalid'
            this.Rutool = 'ایمیل نمیتواند فارسی باشد'
          }
        }
      }
      if (this.Rrepassword === '' && this.sslash) {
        this.errors2.push('1')
        document.querySelector('.Rrepass').className += ' is-invalid'
        this.Rreptool = ' تکرار کلمه عبور را وارد نکرده اید'
      }
      if ((this.Rpassword !== '' && this.Rrepassword !== '' && this.Rpassword !== this.Rrepassword) && this.sslash) {
        this.errors2.push('1')
        document.querySelector('.Rpass').className += ' is-invalid'
        document.querySelector('.Rrepass').className += ' is-invalid'
        this.Rptool = ' کلمه عبور با تکرار یکسان نیست'
        this.Rreptool = ' کلمه عبور با تکرار یکسان نیست'
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
                  this.errors.push('این ایمیل قبلا برای ثبت نام دیگری استفاده شده است')
                } else if(property === 'password'){
                this.Rerrors.push(' کلمه عبور باید بیش از ۸ کاراکتر باشد ترکیبی از حروف و اعداد باشد و نمیتواند مشابه نام کاربری باشد')
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
    async  submitForm () {
      axios.defaults.headers.common.Authorization = ''
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      this.$store.commit('removeToken')
      if (this.errors2.length === 0) {
         this.username = this.username.replace(' ' , '').replace(' ' , '').replace(' ' , '').replace(' ' , '')
      var formData
      if(this.gcode){
        formData = {
          username: this.username.toLowerCase(),
          password: this.password,
          code: this.gcode
        }
      }else{
        formData = {
          username: this.username.toLowerCase(),
          password: this.password
        }
      }
        await axios
          .post('/login', formData)
          .then(response => {
            if (response.data == 1){
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
              this.errors.push(`${error.response.data}`)
              for (const property in error.response.data) {
                if (property === 'non_field_errors') {
                  this.errors.push('نام کاربری یا کلمه عبور اشتباه است')
                } else {
                  this.$swal(error.response.data[property])
                }
              }
            } else if (error.message) {
              this.errors.push(error.message)
            }
          })
      }
      if (this.errors.length) {
        console.log(this.errors)
        var errors = this.errors
        var error = '<div class="swal2-icon swal2-error swal2-icon-show" style="display: flex;"><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span></div><h5>'
        for (var er = 0; er < errors.length; er++) {
          error += '\n' + errors[er]
        }
        error += '</h5>'
        this.$swal(error)
      }
    }
  }
}
</script>
<style>
.invalid-tooltip{
  position: relative;
  top:0;
  background-color: rgba(0, 0, 0, 0);
  color: red;
  text-align: left;
}
.login-card{
  position: absolute;
  width:40% ; left: 30% ; top:5% 
}
.login-btn{
  width:50% ; 
  float:left ; 
  background: none; 
  border-style: none;
  padding: 10px;
  color : grey!important
}
.login-btn:hover{
  background: white;
}
.active{
  background: #bcbcbc;
}

</style>
