<script setup>
  import {RouterLink,RouterView} from 'vue-router'
  import router from "@/router";
  import { ref,reactive,computed } from 'vue'

  const reg  = reactive({
    uName  : '',
    email     : '',
    pass  : '',
    conPass : '',
    isRegist  : true  
  });

  const regError = reactive({
    uNameError  : false,
    emailError     : false,
    passError  : false,
    conPassError : false,
    passIsMatch : true
  });

  const login = reactive({
    uName  : '',
    pass  : '',
    isLogin   : false
  });


  const loginError = reactive({
    uNameError  : false,
    passError  : false,
  });


  function regOk(){
    reg.uName == '' ? regError.uNameError = true : ''
    reg.email == '' ? regError.emailError = true : ''
    reg.pass == '' ? regError.passError = true : ''
    reg.conPass == '' ? regError.conPassError = true : ''

    if(reg.uName != '' && reg.email != '' && reg.pass != '' && reg.conPass != ''){
      if(reg.pass == reg.conPass){
        reg.isRegist = true
      }else{
        regError.passIsMatch = false
      }
    }
  }


  function log(){
    if(reg.uName == login.uName && reg.pass == login.pass && login.uName != '' && login.pass != ''){
      login.isLogin = true
      if(login.isLogin == true){
        console.log('login')
        router.push({name:'welcome'})
      }
    }else{
      loginError.uNameError = true
      loginError.passError = true
    }
  }

</script>

<template>
  <section v-if="true == reg.isRegist">
    <div class="container-fluid px-0">
      <div class="wraper">
        <div class="login-form">
          <div class="row">
    

            <div class="title text-center text-white ">
              <h4>Log In</h4>
            </div>
            <div class="col-12">
              <form class="form">

                <div class="formreg mb-3">
                  <input class="form-control user-name" type="text" placeholder="User Name" v-model="login.uName" required>
                  <p class=" text-small" v-if="loginError.uNameError == true">Enter valid user name</p>
                </div>

                <div class="formreg mb-3">
                  <input class="form-control pass" type="pass" placeholder="pass" v-model="login.pass" required>
                  <p class=" text-small" v-if="loginError.passError == true">Enter valid pass</p>
                </div>

                <div class="button mb-4">
                  <button type="button" class="btn form-btn" @click="log()">Login </button>
                </div>
              </form>
                <div class="forgot-pass  text-light ">
                  <a href="javascript:void(0)" @click="reg.isRegist = false">
                    <h4 style="text-align: center;">Click for Registration </h4>
                  </a>
                </div>

              
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <section v-if="false == reg.isRegist">
    <div class="container-fluid px-0">
      <div class="wraper">
        <div class="login-form">

          <div class="row">


            <div class="title mb-3 text-center text-white text-capitalize">
              <h3>User Registration</h3>
            </div>
            <div class="col-12">
              <form class="form">
              
                <div class="formreg mb-3">
                  <input class="form-control user-name" type="text" placeholder="User Name" v-model="reg.uName" required>
                  <p class="text-light" v-if="regError.uNameError == true">Please Enter User Name</p>
                </div>
                <div class="formreg mb-3">
                  <input class="form-control user-name" type="email" placeholder="Email" v-model="reg.email" required>
                  <p class="text-light" v-if="regError.emailError == true">Please Enter Email</p>
                </div>

                <div class="formreg mb-3">
                  <input class="form-control pass" type="pass" placeholder="pass" v-model="reg.pass" required>
                  <p class="text-light" v-if="regError.passError == true">Please Enter Password</p>
                </div>
                <div class="formreg mb-3">
                  <input class="form-control pass" type="pass" placeholder="Confirm pass" v-model="reg.conPass" required>
                  <p class="text-light" v-if="regError.conPass == true">Please Enter Email</p>
                  <p class="text-light" v-if="regError.passIsMatch == false">Password not match</p>
                </div>

                <div class="button mb-4">
                  <button type="button" class="btn form-btn" @click="regOk()">Submit & Login</button>
                </div>

              </form>
               
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
