const { jangarooConfig } = require("@jangaroo/core");

module.exports = jangarooConfig({
  type: "code",
  sencha: {
    name: "com.coremedia.blueprint__gtm-studio-plugin",
    namespace: "com.coremedia.blueprint.studio.gtm",
    css: [
      {
        path: "resources/css/gtm-ui.css",
        bundle: false,
        includeInBundle: false,
      },
    ],
    studioPlugins: [
      {
        mainClass: "com.coremedia.blueprint.studio.gtm.GTMStudioPlugin",
        name: "Google Tag Manager",
      },
    ],
  },
});
