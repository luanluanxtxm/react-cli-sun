import { lazy } from "react";
import Home from "@/page/Home";
import About from "@/page/About";

// 正常路由
// {
//   type: "route",
//   path: "/xxx",
//   component: import('xxxxxxxxxx') 或者  lazy(()=>import('xxxxxxxxxxxxxx')),
// }

// 重定向路由
// {
//   type: "redirect",
//   from: "xxxxxx",
//   to: "xxxxxxx",
// }

// 路由嵌套
// {
//   type: "route",
//   path: "xxxxxxx",
//   component: import('xxxxxxxxxx') 或者  lazy(()=>import('xxxxxxxxxxxxxx')),
//   children: [
//     {
//       type: "route",
//       path: "xxxxxxxxxxxx",
//       component: import('xxxxxxxxxx') 或者  lazy(()=>import('xxxxxxxxxxxxxx')),
//     },
//     {
//       type: "route",
//       path: "xxxxxxxxxxxx",
//       component: import('xxxxxxxxxx') 或者  lazy(()=>import('xxxxxxxxxxxxxx')),
//     },
//   ],
// }

const routes = [
  {
    type: "route",
    path: "/index",
    component: lazy(() => import("@/component/MyLayout")),
    children: [
      {
        type: "route",
        path: "/index/home",
        component: Home,
      },
      {
        type: "route",
        hidden: true,
        path: "/index/about",
        component: About,
      },
    ],
  },
  {
    type: "redirect",
    from: "/",
    to: "/index",
  },
];
export default routes;
