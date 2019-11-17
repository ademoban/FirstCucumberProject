$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\fleet\\vehicles\\CreateCar.feature");
formatter.feature({
  "name": "Create a Car",
  "description": "  As user I want to be able to create a car",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@create_a_car"
    }
  ]
});
formatter.scenario({
  "name": "Create a regular car",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@create_a_car"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Fleet\" and \"Vehicles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"All Cars\" page name is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_page_name_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the create a car button",
  "keyword": "Then "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_clicks_on_the_create_a_car_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters car information:",
  "rows": [
    {
      "cells": [
        "License Plate",
        "Cybertek"
      ]
    },
    {
      "cells": [
        "Driver",
        "Spartan"
      ]
    },
    {
      "cells": [
        "Location",
        "Alaska"
      ]
    },
    {
      "cells": [
        "Model Year",
        "2019"
      ]
    },
    {
      "cells": [
        "Color",
        "Black"
      ]
    },
    {
      "cells": [
        "Power",
        "500"
      ]
    },
    {
      "cells": [
        "Vehicle Make",
        "BMW"
      ]
    },
    {
      "cells": [
        "Vehicle Model",
        "X5M"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_enters_car_information(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks save and close",
  "keyword": "Then "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_clicks_save_and_close()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that general information is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_verifies_that_general_information_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Create a regular car (with list of maps)",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@create_a_car"
    },
    {
      "name": "@create_a_car_with_list_of_maps"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Fleet\" and \"Vehicles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"All Cars\" page name is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_page_name_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the create a car button",
  "keyword": "Then "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_clicks_on_the_create_a_car_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters car information to create a car",
  "rows": [
    {
      "cells": [
        "License Plate",
        "Driver",
        "Location",
        "Model Year",
        "Color",
        "Power",
        "Vehicle Make",
        "Vehicle Model"
      ]
    },
    {
      "cells": [
        "Cybertek",
        "Spartan",
        "Alaska",
        "2019",
        "Black",
        "500",
        "BMW",
        "X5M"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_enters_car_information_to_create_a_car(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks save and close",
  "keyword": "Then "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_clicks_save_and_close()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"submit\" class\u003d\"btn btn-success action-button\" data-action\u003d\"{\u0026quot;route\u0026quot;:\u0026quot;oro_entity_view\u0026quot;,\u0026quot;params\u0026quot;:{\u0026quot;entityName\u0026quot;:\u0026quot;Extend_Entity_Carreservation\u0026quot;,\u0026quot;id\u0026quot;:\u0026quot;$id\u0026quot;}}\"\u003e...\u003c/button\u003e is not clickable at point (974, 127). Other element would receive the click: \u003cdiv class\u003d\"loader-mask shown\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d77.0.3865.75)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-O903K93\u0027, ip: \u002710.0.0.42\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.75, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\ademo\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58602}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 915cf7bd05bc3340760446aa49ba15c3\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.vytrack.pages.fleet.VehiclesPage.clickSaveAndClose(VehiclesPage.java:70)\r\n\tat com.vytrack.step_definitions.VehiclesStepDefinitions.user_clicks_save_and_close(VehiclesStepDefinitions.java:47)\r\n\tat ✽.user clicks save and close(src\\test\\resources\\features\\fleet\\vehicles\\CreateCar.feature:32)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user verifies that general information is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_verifies_that_general_information_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.uri("src\\test\\resources\\features\\fleet\\vehicles\\Vehicles.feature");
formatter.feature({
  "name": "Vehicles",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@vehicles"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as driver and navigate to the Vehicles",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@vehicles"
    }
  ]
});
formatter.step({
  "name": "user logs in as a \"driver\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Fleet\" and \"Vehicles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"Cars\" page name is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_page_name_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user  verifies that default page number is 1",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Access Vehicle page as admin",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@vehicles"
    },
    {
      "name": "@VYT"
    }
  ]
});
formatter.step({
  "name": "user logs in as a \"driver\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Fleet\" and \"Vehicle Contracts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"All Vehicle Contract\" page name is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_page_name_is_displayed(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[All Vehicle Contract]\u003e but was:\u003c[Quick Launchpad]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.vytrack.step_definitions.LoginStepDefinitions.user_verifies_that_page_name_is_displayed(LoginStepDefinitions.java:33)\r\n\tat ✽.user verifies that \"All Vehicle Contract\" page name is displayed(src\\test\\resources\\features\\fleet\\vehicles\\Vehicles.feature:17)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
});