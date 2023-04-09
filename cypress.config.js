const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://demoqa.com/elements",
    testIsolation: false,
    types: ["cypress-plugin-steps"],
    // video: false,
    blockHosts:[
      "*.google-analytics.com",
      "www.googletagmanager.com",
      "www.googletagservices.com",
      "www.google-analytics.com",
      "www.gstatic.com",
      "*pagead2.googlesyndication.com",
      "*partner.googleadservices.com",
      "*ad.service.google.com",
      "*ad.service.google.com.ph",
      "*serving.stat-rock.com",
    ]
  },
});
