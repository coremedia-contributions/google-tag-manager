import CustomSettingsForm from "@coremedia-blueprint/studio-client.main.custom-settings-forms/CustomSettingsForm";
import CoreIcons_properties from "@coremedia/studio-client.core-icons/CoreIcons_properties";
import ButtonSkin from "@coremedia/studio-client.ext.ui-components/skins/ButtonSkin";
import BooleanPropertyField from "@coremedia/studio-client.main.editor-components/sdk/premular/fields/BooleanPropertyField";
import FormSpacerElement from "@coremedia/studio-client.main.editor-components/sdk/premular/fields/FormSpacerElement";
import StringPropertyField from "@coremedia/studio-client.main.editor-components/sdk/premular/fields/StringPropertyField";
import Button from "@jangaroo/ext-ts/button/Button";
import Container from "@jangaroo/ext-ts/container/Container";
import DisplayField from "@jangaroo/ext-ts/form/field/Display";
import HBoxLayout from "@jangaroo/ext-ts/layout/container/HBox";
import { bind } from "@jangaroo/runtime";
import Config from "@jangaroo/runtime/Config";
import ConfigUtils from "@jangaroo/runtime/ConfigUtils";
import GTMLabels_properties from "../GTMLabels_properties";

interface GoogleTagManagerSettingsFormConfig extends Config<CustomSettingsForm> {
}

class GoogleTagManagerSettingsForm extends CustomSettingsForm {
  declare Config: GoogleTagManagerSettingsFormConfig;

  constructor(config: Config<GoogleTagManagerSettingsForm> = null) {
    // @ts-expect-error Ext JS semantics
    const this$ = this;
    super(ConfigUtils.apply(Config(GoogleTagManagerSettingsForm, {
      title: "Google Tag Manager",
      items: [
        Config(DisplayField, { cls: "csf-banner gtm-settings-banner" }),

        Config(StringPropertyField, { propertyName: "settings.googleTagManager.accountId" }),
        Config(StringPropertyField, { propertyName: "settings.googleTagManager.containerId" }),

        Config(FormSpacerElement, { height: 20 }),
        Config(BooleanPropertyField, {
          propertyName: "settings.googleTagManager.disabled",
          dontTransformToInteger: true,
        }),

        Config(Container, {
          items: [
            Config(Container, { flex: 1 }),
            Config(Button, {
              itemId: "analyticsHelp",
              ui: ButtonSkin.SIMPLE.getSkin(),
              iconCls: CoreIcons_properties.help,
              text: GTMLabels_properties.GoogleTagManagerSettingsForm_showHelp,
              listeners: { click: bind(this$, this$.#$on_click_41_23) },
            }),
          ],
          layout: Config(HBoxLayout, { align: "stretch" }),
        }),
      ],
    }), config));
  }

  #$on_click_41_23(): void {

    window.open(GTMLabels_properties.GoogleTagManagerSettingsForm_help_link, "_blank");

  }
}

export default GoogleTagManagerSettingsForm;
