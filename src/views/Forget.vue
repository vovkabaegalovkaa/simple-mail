<template>
    <div class="card">
      <h2>Забыл пароль? Так вспоминай!</h2>
  
      <button class="btn" @click="goToLogin">Обратно к логину</button>
    </div>
</template>

<script>
export default {
    methods: {
        goToLogin(){
            // так как роутер у нас зареган по сути так же как и плагин, то мы может обращаться к нему через знак доллара
            this.$router.push("/login")//push() используется для перехода на указанный адрес
        }
    }
}
</script>