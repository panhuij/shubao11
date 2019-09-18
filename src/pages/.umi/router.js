import React from "react";
import { Router as DefaultRouter, Route, Switch } from "react-router-dom";
import dynamic from "umi/dynamic";
import renderRoutes from "umi/lib/renderRoutes";
import history from "@tmp/history";
import RendererWrapper0 from "C:/Users/smn/Desktop/shubao11/src/pages/.umi/LocaleWrapper.jsx";

const Router = require("dva/router").routerRedux.ConnectedRouter;

const routes = [
  {
    path: "/",
    component: require("../../layouts/BlankLayout").default,
    routes: [
      {
        path: "/user",
        component: require("../../layouts/UserLayout").default,
        routes: [
          {
            path: "/user",
            redirect: "/user/login",
            exact: true
          },
          {
            name: "login",
            path: "/user/login",
            component: require("../user/login").default,
            exact: true
          },
          {
            name: "register-result",
            path: "/user/register-result",
            component: require("../user/register-result").default,
            exact: true
          },
          {
            name: "register",
            path: "/user/register",
            component: require("../user/register").default,
            exact: true
          },
          {
            component: require("../404").default,
            exact: true
          },
          {
            component: () =>
              React.createElement(
                require("C:/Users/smn/Desktop/shubao11/node_modules/umi-build-dev/lib/plugins/404/NotFound.js")
                  .default,
                { pagesPath: "src/pages", hasRoutesInConfig: true }
              )
          }
        ]
      },
      {
        path: "/",
        component: require("../../layouts/BasicLayout").default,
        Routes: [require("../Authorized").default],
        authority: ["admin", "user"],
        routes: [
          {
            path: "/dashboard",
            name: "dashboard",
            icon: "dashboard",
            routes: [
              {
                name: "analysis",
                path: "/dashboard/analysis",
                component: require("../dashboard/analysis").default,
                exact: true
              },
              {
                component: () =>
                  React.createElement(
                    require("C:/Users/smn/Desktop/shubao11/node_modules/umi-build-dev/lib/plugins/404/NotFound.js")
                      .default,
                    { pagesPath: "src/pages", hasRoutesInConfig: true }
                  )
              }
            ]
          },
          {
            name: "viper",
            icon: "table",
            path: "/viper",
            routes: [
              {
                name: "list",
                path: "/viper/list",
                component: require("../viper/list").default,
                exact: true
              },
              {
                name: "card",
                path: "/viper/card",
                component: require("../viper/card").default,
                exact: true
              },
              {
                component: () =>
                  React.createElement(
                    require("C:/Users/smn/Desktop/shubao11/node_modules/umi-build-dev/lib/plugins/404/NotFound.js")
                      .default,
                    { pagesPath: "src/pages", hasRoutesInConfig: true }
                  )
              }
            ]
          },
          {
            name: "partner",
            icon: "user",
            path: "/partner",
            routes: [
              {
                name: "add",
                path: "/partner/add",
                component: require("../partner/add").default,
                exact: true
              },
              {
                name: "list",
                path: "/partner/list",
                component: require("../partner/list").default,
                exact: true
              },
              {
                component: () =>
                  React.createElement(
                    require("C:/Users/smn/Desktop/shubao11/node_modules/umi-build-dev/lib/plugins/404/NotFound.js")
                      .default,
                    { pagesPath: "src/pages", hasRoutesInConfig: true }
                  )
              }
            ]
          },
          {
            name: "class",
            icon: "form",
            path: "/class",
            routes: [
              {
                name: "classify",
                path: "/class/classify",
                component: require("../class/classify").default,
                exact: true
              },
              {
                name: "support",
                path: "/class/support",
                component: require("../class/support").default,
                exact: true
              },
              {
                name: "all",
                path: "/class/all",
                component: require("../class/all").default,
                exact: true
              },
              {
                name: "before-verify",
                path: "/class/beforeVerify",
                component: require("../class/beforeVerify").default,
                exact: true
              },
              {
                component: () =>
                  React.createElement(
                    require("C:/Users/smn/Desktop/shubao11/node_modules/umi-build-dev/lib/plugins/404/NotFound.js")
                      .default,
                    { pagesPath: "src/pages", hasRoutesInConfig: true }
                  )
              }
            ]
          },
          {
            name: "product",
            icon: "profile",
            path: "/product",
            routes: [
              {
                name: "classify",
                path: "/product/classify",
                component: require("../product/classify").default,
                exact: true
              },
              {
                name: "support",
                path: "/product/support",
                component: require("../product/support").default,
                exact: true
              },
              {
                name: "all",
                path: "/product/all",
                component: require("../product/all").default,
                exact: true
              },
              {
                name: "before-verify",
                path: "/product/beforeVerify",
                component: require("../product/beforeVerify").default,
                exact: true
              },
              {
                component: () =>
                  React.createElement(
                    require("C:/Users/smn/Desktop/shubao11/node_modules/umi-build-dev/lib/plugins/404/NotFound.js")
                      .default,
                    { pagesPath: "src/pages", hasRoutesInConfig: true }
                  )
              }
            ]
          },
          {
            name: "order",
            icon: "highlight",
            path: "/order",
            routes: [
              {
                name: "product",
                path: "/order/product",
                component: require("../order/product").default,
                exact: true
              },
              {
                name: "class",
                path: "/order/class",
                component: require("../order/class").default,
                exact: true
              },
              {
                component: () =>
                  React.createElement(
                    require("C:/Users/smn/Desktop/shubao11/node_modules/umi-build-dev/lib/plugins/404/NotFound.js")
                      .default,
                    { pagesPath: "src/pages", hasRoutesInConfig: true }
                  )
              }
            ]
          },
          {
            name: "finance",
            icon: "check-circle-o",
            path: "/finance",
            routes: [
              {
                name: "dashboard",
                path: "/finance/dashboard",
                component: require("../finance/dashboard").default,
                exact: true
              },
              {
                name: "teacher",
                path: "/finance/teacher",
                component: require("../finance/teacher").default,
                exact: true
              },
              {
                name: "partner",
                path: "/finance/partner",
                component: require("../finance/partner").default,
                exact: true
              },
              {
                name: "support",
                path: "/finance/support",
                component: require("../finance/support").default,
                exact: true
              },
              {
                name: "withdraw",
                path: "/finance/withdraw",
                component: require("../finance/withdraw").default,
                exact: true
              },
              {
                name: "apply",
                path: "/finance/apply",
                component: require("../finance/apply").default,
                exact: true
              },
              {
                component: () =>
                  React.createElement(
                    require("C:/Users/smn/Desktop/shubao11/node_modules/umi-build-dev/lib/plugins/404/NotFound.js")
                      .default,
                    { pagesPath: "src/pages", hasRoutesInConfig: true }
                  )
              }
            ]
          },
          {
            name: "swiper",
            icon: "warning",
            path: "/swiper",
            routes: [
              {
                name: "add",
                path: "/swiper/add",
                component: require("../swiper/add").default,
                exact: true
              },
              {
                name: "list",
                path: "/swiper/list",
                component: require("../swiper/list").default,
                exact: true
              },
              {
                component: () =>
                  React.createElement(
                    require("C:/Users/smn/Desktop/shubao11/node_modules/umi-build-dev/lib/plugins/404/NotFound.js")
                      .default,
                    { pagesPath: "src/pages", hasRoutesInConfig: true }
                  )
              }
            ]
          },
          {
            path: "/",
            redirect: "/dashboard/analysis",
            authority: ["admin", "user"],
            exact: true
          },
          {
            component: require("../404").default,
            exact: true
          },
          {
            component: () =>
              React.createElement(
                require("C:/Users/smn/Desktop/shubao11/node_modules/umi-build-dev/lib/plugins/404/NotFound.js")
                  .default,
                { pagesPath: "src/pages", hasRoutesInConfig: true }
              )
          }
        ]
      },
      {
        component: () =>
          React.createElement(
            require("C:/Users/smn/Desktop/shubao11/node_modules/umi-build-dev/lib/plugins/404/NotFound.js")
              .default,
            { pagesPath: "src/pages", hasRoutesInConfig: true }
          )
      }
    ]
  },
  {
    component: () =>
      React.createElement(
        require("C:/Users/smn/Desktop/shubao11/node_modules/umi-build-dev/lib/plugins/404/NotFound.js")
          .default,
        { pagesPath: "src/pages", hasRoutesInConfig: true }
      )
  }
];
window.g_routes = routes;
const plugins = require("umi/_runtimePlugin");
plugins.applyForEach("patchRoutes", { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen = () => {};

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach("onRouteChange", {
        initialValue: {
          routes,
          location,
          action
        }
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
