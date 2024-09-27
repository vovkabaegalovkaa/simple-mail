//настройка роутера производится в отдельном файле
import { createRouter, createWebHistory } from "vue-router"
import Login from "./views/Login.vue"
import Forget from "./views/Forget.vue"
import Mail from "./views/Mail.vue"
import Dashboard from "./views/Dashboard.vue"
import AppEmailBody from "./components/AppEmailBody.vue"
import NotFound from "./views/NotFound.vue"

//я щас не уверен что это что-то крутое, но типо мы можем загружить страницу не сразу, а только когда она будет вызвана
//const Mail = () => import("./views/Mail.vue")

const router = createRouter({//в функцию передается объект, содержащий все роуты
    history: createWebHistory(),//нужна для отслеживания переходов, чтобы можно было по кнопкам в браузере перемещатся по страницам
    routes: [
        {path: "/login", component: Login, alias: "/"/*alias добавляет еще пути для отображения*/},//localhost:8080(port)/login
        {path: "/forget", component: Forget, meta: {cantEnter: true}},//к каждому пути мы можем добавить мета данные
        //(внизу)указание динамического url через символ ":", "?" – параметр необязательный, щас еще сюда бахнем дочерние поддомены
        //по типу mail/inbox/123, делается это с помощью children
        {path: "/mail", component: Mail, name: "mail",children: [
            {path: ":mailId?", component: AppEmailBody}
        ],
        }, 
        {path: "/dashboard", component: Dashboard, name: "home"},//так же для каждого роута можно добавить имя, которое останется неизменным даже если в будущем поменяется путь
        //создание 404 и редиректа
        {path: "/:notFound(.*)", /*redirect: "/login"*/component: NotFound},//"path: '/:notFound(.*)'" – заготовленный синаткиси для несуществующей страницы
        
    ],
    //по дэфолту при переходе по ссылку router-link этой ссылку присваиваится класс router-link-active, мы можем изменить его на свой
    linkActiveClass: "active",
    linkExactActiveClass: "active",//теперь выбранная ссылка стилизуется
})

router.beforeEach((to, from, next) => {//по названию функции становится понятно, что она выполняется перед каждым переходом на новый роут
//to – объект $route, содержащий инфу у том роуте куда мы переходим
//from – объект $route, содержащий инфу у том роуте откуда мы переходим
//next – функция, позволяющая либо остановить либо продолжить переход по роуту
// console.log(to);
// console.log(from);
// next();
    if(to.meta.cantEnter){//проверка есть ли у роута куда мы переходим мета-данные указывающие на то, что  туда нельзя попасть
        next(false);
        //next({name: "home"}) – так же можно просто сделать редирект на другую страницу
    }
    else{
        next();
    }
    //теперь после такой шняги мы больше не можем перейти по пути "/forget"
})

router.afterEach((to, from) => {//метод afterEach работает когда мы уже перешли на какую-то страницу, нужен например для сбора информации по переходам

})


export default router;