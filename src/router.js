//настройка роутера производится в отдельном файле
import { createRouter, createWebHistory } from "vue-router"
import Login from "./views/Login.vue"
import Forget from "./views/Forget.vue"
import Mail from "./views/Mail.vue"
import Dashboard from "./views/Dashboard.vue"

export default createRouter({//в функцию передается объект, содержащий все роуты
    history: createWebHistory(),//нужна для отслеживания переходов, чтобы можно было по кнопкам в браузере перемещатся по страницам
    routes: [
        {path: "/login", component: Login, alias: "/"/*alias добавляет еще пути для отображения*/},//localhost:8080(port)/login
        {path: "/forget", component: Forget},
        {path: "/mail", component: Mail},
        {path: "/dashboard", component: Dashboard},
    ]
})