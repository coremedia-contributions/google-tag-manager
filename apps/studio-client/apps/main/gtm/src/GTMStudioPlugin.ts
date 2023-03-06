import csfService from "@coremedia-blueprint/studio-client.main.custom-settings-forms/csfService";
import ContentTypes_properties from "@coremedia/studio-client.cap-base-models/content/ContentTypes_properties";
import CopyResourceBundleProperties from "@coremedia/studio-client.main.editor-components/configuration/CopyResourceBundleProperties";
import StudioPlugin from "@coremedia/studio-client.main.editor-components/configuration/StudioPlugin";
import IEditorContext from "@coremedia/studio-client.main.editor-components/sdk/IEditorContext";
import Config from "@jangaroo/runtime/Config";
import ConfigUtils from "@jangaroo/runtime/ConfigUtils";
import resourceManager from "@jangaroo/runtime/l10n/resourceManager";
import GTMLabels_properties from "./GTMLabels_properties";
import GoogleTagManagerSettingsForm from "./forms/GoogleTagManagerSettingsForm";

interface GTMStudioPluginConfig extends Config<StudioPlugin> {
}

class GTMStudioPlugin extends StudioPlugin {
  declare Config: GTMStudioPluginConfig;

  constructor(config: Config<GTMStudioPlugin> = null) {
    super(ConfigUtils.apply(Config(GTMStudioPlugin, {

      configuration: [
        new CopyResourceBundleProperties({
          destination: resourceManager.getResourceBundle(null, ContentTypes_properties),
          source: resourceManager.getResourceBundle(null, GTMLabels_properties),
        }),
      ],

    }), config));
  }

  override init(editorContext: IEditorContext) {
    super.init(editorContext);
    csfService._.registerCustomSettingsForm(Config(GoogleTagManagerSettingsForm, { pattern: "Google Tag Manager" }));
  }
}

export default GTMStudioPlugin;
