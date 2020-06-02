import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from "@/views/Home";
import About from "@/views/About";
import Message from "@/views/Message";
import News from "@/views/News";
import MessageDetail from "@/views/MessageDetail";
import NewsDetail from "@/views/NewsDetail";
export default new VueRouter({
  // 路由模式
  mode: "history",
  // 定义路由
  routes: [
    {
      // 给要显示的组件定义的路由路径
      path: "/home",
      // 要显示的组件
      component: Home,
      children: [
        {
          path: "/home/message",
          component: Message,
          children: [
            {
              path: "/home/message/info:msgId",
              component: MessageDetail,
              // props: true, // 把路由接收到的paiams参数作为子组件属性去使用
              // props:{username:'嘻嘻'}  自能传递默认的静态值（几乎不用）
              props(route) {
                //route就是当前的路由对象
                // 把路由对象中的参数全部作为子组件的属性使用
                return {
                  msgId: route.params.msgId,
                  msgContent: route.query.msgContent,
                };
              },
              name: "msgInfo", // 标识     命名路由
            },
          ],
        },
        {
          path: "/home/news",
          component: News,
          children: [
            {
              path: "/home/news/info:newsId",
              component: NewsDetail,
              props(route) {
                return {
                  newsId: route.params.newsId,
                  newsContent: route.query.newsContent,
                };
              },
              name: "newsInfo",
            },
          ],
        },
        {
          path: "/",
          // 重定向到另外一个路径
          redirect: "/home/message",
        },
      ],
    },
    {
      // 给要显示的组件定义的路由路径
      path: "/about",
      // 要显示的组件
      component: About,
    },
    {
      path: "/",
      // 重定向到另外一个路径
      redirect: "/home",
    },
  ],
});
