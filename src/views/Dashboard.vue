<template>
    <div class="card">
      <h1>Привет на главной</h1>
  
      <p>Тут ты можешь перейти на любую страницу и почитать заранее заготовленные письма :)</p>
  
      <router-link :to="{name: 'mail'}">Почта</router-link>
      <!-- осуществили переход не по пути, а по имени роута -->
    </div>
  </template>
  
  <script>
  export default {
    beforeRouteEnter(){//метод запускающийся перед переходом на роут
      console.log("beforeRouterEnter")
    },
    beforeRouteLeave(to, from, next){/*вызывающийся перед переходом на другой роут, например если мы заполняем форму и ее не заполнили, 
      надо спросить точно ли перенсти, так как данные не сохранятся и типо того*/
      let answer = confirm("Точно перейти?");
      if(answer){
        next()
      }
      else {
        next(false);
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>