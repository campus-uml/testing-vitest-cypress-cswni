const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "k9h2i7",
  e2e: {
    baseUrl: 'http://localhost:5173',
  },
})