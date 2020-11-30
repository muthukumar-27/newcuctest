$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefiles/test1.feature");
formatter.feature({
  "line": 1,
  "name": "This is to test cucmber",
  "description": "",
  "id": "this-is-to-test-cucmber",
  "keyword": "Feature"
});
formatter.before({
  "duration": 175100,
  "status": "passed"
});
formatter.before({
  "duration": 58300,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "This is background class",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "thisi is back test",
  "keyword": "Given "
});
formatter.match({
  "location": "test1step.thisi_is_back_test()"
});
formatter.result({
  "duration": 77183200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Cucumber testing",
  "description": "",
  "id": "this-is-to-test-cucmber;cucumber-testing",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@positive"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "users is on google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "usesr enters serach term",
  "rows": [
    {
      "cells": [
        "ar1",
        "ar2"
      ],
      "line": 8
    },
    {
      "cells": [
        "123",
        "goole"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Users hits enter",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User see the resulst",
  "keyword": "Then "
});
formatter.match({
  "location": "test1step.users_is_on_google_com()"
});
formatter.result({
  "duration": 25400,
  "status": "passed"
});
formatter.match({
  "location": "test1step.usesr_enters_serach_term(DataTable)"
});
formatter.result({
  "duration": 2488100,
  "status": "passed"
});
formatter.match({
  "location": "test1step.users_hits_enter()"
});
formatter.result({
  "duration": 23500,
  "status": "passed"
});
formatter.match({
  "location": "test1step.user_see_the_resulst()"
});
formatter.result({
  "duration": 35500,
  "status": "passed"
});
formatter.after({
  "duration": 89200,
  "status": "passed"
});
formatter.before({
  "duration": 127200,
  "status": "passed"
});
formatter.before({
  "duration": 64400,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "This is background class",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "thisi is back test",
  "keyword": "Given "
});
formatter.match({
  "location": "test1step.thisi_is_back_test()"
});
formatter.result({
  "duration": 107100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Cucumber testing",
  "description": "",
  "id": "this-is-to-test-cucmber;cucumber-testing",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@negative"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "users is on google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "usesr enters serach term",
  "rows": [
    {
      "cells": [
        "ar1",
        "ar2"
      ],
      "line": 16
    },
    {
      "cells": [
        "hello",
        "goole"
      ],
      "line": 17
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Users hits enter",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User see the resulst",
  "keyword": "Then "
});
formatter.match({
  "location": "test1step.users_is_on_google_com()"
});
formatter.result({
  "duration": 14400,
  "status": "passed"
});
formatter.match({
  "location": "test1step.usesr_enters_serach_term(DataTable)"
});
formatter.result({
  "duration": 136800,
  "status": "passed"
});
formatter.match({
  "location": "test1step.users_hits_enter()"
});
formatter.result({
  "duration": 9200,
  "status": "passed"
});
formatter.match({
  "location": "test1step.user_see_the_resulst()"
});
formatter.result({
  "duration": 7800,
  "status": "passed"
});
formatter.after({
  "duration": 55400,
  "status": "passed"
});
formatter.after({
  "duration": 44700,
  "status": "passed"
});
});