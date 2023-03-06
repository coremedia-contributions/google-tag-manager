
/**
 * Interface values for ResourceBundle "GTMLabels".
 * @see GTMLabels_properties#INSTANCE
 */
interface GTMLabels_properties {

  GoogleTagManagerSettingsForm_title: string;
  GoogleTagManagerSettingsForm_showHelp: string;
  GoogleTagManagerSettingsForm_help_link: string;
  "CMSettings_settings.googleTagManager.accountId_text": string;
  "CMSettings_settings.googleTagManager.accountId_toolTip": string;
  "CMSettings_settings.googleTagManager.accountId_emptyText": string;
  "CMSettings_settings.googleTagManager.containerId_text": string;
  "CMSettings_settings.googleTagManager.containerId_toolTip": string;
  "CMSettings_settings.googleTagManager.containerId_emptyText": string;
  "CMSettings_settings.googleTagManager.disabled_text": string;
  "CMSettings_settings.googleTagManager.disabled_true_text": string;
}

/**
 * Singleton for the current user Locale's instance of ResourceBundle "GTMLabels".
 * @see GTMLabels_properties
 */
const GTMLabels_properties: GTMLabels_properties = {
  GoogleTagManagerSettingsForm_title: "Google Tag Manager",
  GoogleTagManagerSettingsForm_showHelp: "Google Tag Manager Help",
  GoogleTagManagerSettingsForm_help_link: "https://support.google.com/tagmanager",
  "CMSettings_settings.googleTagManager.accountId_text": "Account ID",
  "CMSettings_settings.googleTagManager.accountId_toolTip": "Your numeric Google Tag Manager account ID.",
  "CMSettings_settings.googleTagManager.accountId_emptyText": "Enter account ID here.",
  "CMSettings_settings.googleTagManager.containerId_text": "Container ID",
  "CMSettings_settings.googleTagManager.containerId_toolTip": "Your numeric Google Tag Manager account ID.",
  "CMSettings_settings.googleTagManager.containerId_emptyText": "Enter container ID here. (example: GTM-XXXXX)",
  "CMSettings_settings.googleTagManager.disabled_text": "Disable",
  "CMSettings_settings.googleTagManager.disabled_true_text": "Disable Google Tag Manager Integration",
};

export default GTMLabels_properties;
