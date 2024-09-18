<template>
    <the-navbar :visible="isAuth"></the-navbar>
    <div class="container with-nav">
      <!--Наше приложение само как бы не знает куда ему рендерить страницы, указанные в роутере, и ему надо указать на это-->
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import TheNavbar from './components/TheNavbar'

  
  export default {
    data() {
        return {
            isAuth: false,
        }
    },
    methods: {
        login() {
            this.isAuth = true;
            //так как сразу после логина мы переходим на главную
            this.$router.push("/dashboard")
        },
        logout() {
            this.isAuth = false;
            this.$router.push("/login")

        },
    },
    components: {
        'the-navbar': TheNavbar, 
    },
    provide() {
      return {
        login: this.login,
        logout: this.logout,
        emails: [
          {id: 1, theme: 'Купил себе PlayStation 5'},
          {id: 2, theme: 'Выучил Vue Router'},
          {id: 3, theme: 'Хочу изучить весь Vue'},
          {id: 4, theme: 'А следующий блок про Vuex!'},
          {id: 5, theme: 'А что там на счет Vue Hooks?'}
        ]
      }
    }
  }
  </script>
  
  <style>
  </style>