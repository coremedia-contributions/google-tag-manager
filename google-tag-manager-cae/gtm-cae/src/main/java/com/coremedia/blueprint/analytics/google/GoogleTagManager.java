package com.coremedia.blueprint.analytics.google;


import com.coremedia.blueprint.analytics.AnalyticsProvider;
import com.coremedia.blueprint.base.settings.SettingsService;
import com.coremedia.blueprint.common.contentbeans.Page;

public class GoogleTagManager extends AnalyticsProvider {

  /**
   * The Google Tag Manager service key.
   */
  public static final String GOOGLE_TAG_MANAGER_SERVICE_KEY = "googleTagManager";

  /**
   * Container Id to be used when integrating the Google Tag Manager snippets.
   * Example: GTM-XXXX
   */
  private static final String GTM_CONTAINER_ID = "containerId";


  public GoogleTagManager(Page page, SettingsService settingsService) {
    super(GOOGLE_TAG_MANAGER_SERVICE_KEY, page, settingsService);
  }

  @Override
  protected boolean isConfigValid() {
    return isNonEmptyString(getContainerId(), GTM_CONTAINER_ID);
  }

  public String getContainerId() {
    return (String) getSettings().get(GTM_CONTAINER_ID);
  }

}
