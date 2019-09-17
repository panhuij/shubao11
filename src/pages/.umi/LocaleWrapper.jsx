import React from "react";
import {
  _setIntlObject,
  addLocaleData,
  IntlProvider,
  intlShape,
  LangContext,
  _setLocaleContext
} from "umi-plugin-locale";

const InjectedWrapper = (() => {
  let sfc = (props, context) => {
    _setIntlObject(context.intl);
    return props.children;
  };
  sfc.contextTypes = {
    intl: intlShape
  };
  return sfc;
})();

import "moment/locale/pt-br";
import "moment/locale/zh-cn";
import "moment/locale/zh-tw";

const baseNavigator = true;
const baseSeparator = "-";
const useLocalStorage = true;

import { LocaleProvider, version } from "antd";
import moment from "moment";
import "moment/locale/zh-cn";
let defaultAntd = require("antd/lib/locale-provider/zh_CN");
defaultAntd = defaultAntd.default || defaultAntd;

const localeInfo = {
  "en-US": {
    messages: {
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/locales/en-US.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/account/settings/locales/en-US.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/dashboard/analysis/locales/en-US.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/dashboard/monitor/locales/en-US.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/editor/flow/locales/en-US.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/editor/koni/locales/en-US.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/editor/mind/locales/en-US.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/exception/403/locales/en-US.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/exception/404/locales/en-US.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/exception/500/locales/en-US.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/form/basic-form/locales/en-US.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/form/step-form/locales/en-US.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/result/fail/locales/en-US.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/result/success/locales/en-US.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/user/login/locales/en-US.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/user/register-result/locales/en-US.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/user/register/locales/en-US.js")
      )
    },
    locale: "en-US",
    antd: require("antd/lib/locale-provider/en_US"),
    data: require("react-intl/locale-data/en"),
    momentLocale: ""
  },
  "pt-BR": {
    messages: {
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/locales/pt-BR.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/dashboard/analysis/locales/pt-BR.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/dashboard/monitor/locales/pt-BR.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/exception/403/locales/pt-BR.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/exception/404/locales/pt-BR.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/exception/500/locales/pt-BR.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/form/basic-form/locales/pt-BR.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/form/step-form/locales/pt-BR.js")
      )
    },
    locale: "pt-BR",
    antd: require("antd/lib/locale-provider/pt_BR"),
    data: require("react-intl/locale-data/pt"),
    momentLocale: "pt-br"
  },
  "zh-CN": {
    messages: {
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/locales/zh-CN.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/account/settings/locales/zh-CN.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/dashboard/analysis/locales/zh-CN.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/dashboard/monitor/locales/zh-CN.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/editor/flow/locales/zh-CN.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/editor/koni/locales/zh-CN.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/editor/mind/locales/zh-CN.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/exception/403/locales/zh-CN.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/exception/404/locales/zh-CN.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/exception/500/locales/zh-CN.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/form/basic-form/locales/zh-CN.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/form/step-form/locales/zh-CN.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/result/fail/locales/zh-CN.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/result/success/locales/zh-CN.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/user/login/locales/zh-CN.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/user/register-result/locales/zh-CN.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/user/register/locales/zh-CN.js")
      )
    },
    locale: "zh-CN",
    antd: require("antd/lib/locale-provider/zh_CN"),
    data: require("react-intl/locale-data/zh"),
    momentLocale: "zh-cn"
  },
  "zh-TW": {
    messages: {
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/locales/zh-TW.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/account/settings/locales/zh-TW.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/dashboard/analysis/locales/zh-TW.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/dashboard/monitor/locales/zh-TW.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/exception/403/locales/zh-TW.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/exception/404/locales/zh-TW.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/exception/500/locales/zh-TW.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/form/basic-form/locales/zh-TW.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/form/step-form/locales/zh-TW.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/result/fail/locales/zh-TW.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/result/success/locales/zh-TW.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/user/login/locales/zh-TW.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/user/register-result/locales/zh-TW.js")
      ),
      ...(locale => (locale.__esModule ? locale.default : locale))(
        require("G:/实战演戏/antdPro/shubao11/src/pages/user/register/locales/zh-TW.js")
      )
    },
    locale: "zh-TW",
    antd: require("antd/lib/locale-provider/zh_TW"),
    data: require("react-intl/locale-data/zh"),
    momentLocale: "zh-tw"
  }
};

class LocaleWrapper extends React.Component {
  state = {
    locale: "zh-CN"
  };
  getAppLocale() {
    let appLocale = {
      locale: "zh-CN",
      messages: {},
      data: require("react-intl/locale-data/zh"),
      momentLocale: "zh-cn"
    };

    const runtimeLocale =
      require("umi/_runtimePlugin").mergeConfig("locale") || {};
    const runtimeLocaleDefault =
      typeof runtimeLocale.default === "function"
        ? runtimeLocale.default()
        : runtimeLocale.default;
    if (
      useLocalStorage &&
      typeof localStorage !== "undefined" &&
      localStorage.getItem("umi_locale") &&
      localeInfo[localStorage.getItem("umi_locale")]
    ) {
      appLocale = localeInfo[localStorage.getItem("umi_locale")];
    } else if (
      typeof navigator !== "undefined" &&
      localeInfo[navigator.language] &&
      baseNavigator
    ) {
      appLocale = localeInfo[navigator.language];
    } else if (localeInfo[runtimeLocaleDefault]) {
      appLocale = localeInfo[runtimeLocaleDefault];
    } else {
      appLocale = localeInfo["zh-CN"] || appLocale;
    }
    window.g_lang = appLocale.locale;
    window.g_langSeparator = baseSeparator || "-";
    appLocale.data && addLocaleData(appLocale.data);

    // support dynamic add messages for umi ui
    // { 'zh-CN': { key: value }, 'en-US': { key: value } }
    const runtimeLocaleMessagesType = typeof runtimeLocale.messages;
    if (
      runtimeLocaleMessagesType === "object" ||
      runtimeLocaleMessagesType === "function"
    ) {
      const runtimeMessage =
        runtimeLocaleMessagesType === "object"
          ? runtimeLocale.messages[appLocale.locale]
          : runtimeLocale.messages()[appLocale.locale];
      Object.assign(appLocale.messages, runtimeMessage || {});
    }

    return appLocale;
  }
  reloadAppLocale = () => {
    const appLocale = this.getAppLocale();
    this.setState({
      locale: appLocale.locale
    });
  };

  render() {
    const appLocale = this.getAppLocale();
    // react-intl must use `-` separator
    const reactIntlLocale = appLocale.locale.split(baseSeparator).join("-");
    const LangContextValue = {
      locale: reactIntlLocale,
      reloadAppLocale: this.reloadAppLocale
    };
    let ret = this.props.children;
    ret = (
      <IntlProvider locale={reactIntlLocale} messages={appLocale.messages}>
        <InjectedWrapper>
          <LangContext.Provider value={LangContextValue}>
            <LangContext.Consumer>
              {value => {
                _setLocaleContext(value);
                return this.props.children;
              }}
            </LangContext.Consumer>
          </LangContext.Provider>
        </InjectedWrapper>
      </IntlProvider>
    );
    // avoid antd ConfigProvider not found
    let AntdProvider = LocaleProvider;
    const [major, minor] = `${version || ""}`.split(".");
    // antd 3.21.0 use ConfigProvider not LocaleProvider
    const isConfigProvider =
      Number(major) > 3 || (Number(major) >= 3 && Number(minor) >= 21);
    if (isConfigProvider) {
      try {
        AntdProvider = require("antd/lib/config-provider").default;
      } catch (e) {}
    }

    return (
      <AntdProvider
        locale={
          appLocale.antd
            ? appLocale.antd.default || appLocale.antd
            : defaultAntd
        }
      >
        {ret}
      </AntdProvider>
    );
    return ret;
  }
}
export default LocaleWrapper;
