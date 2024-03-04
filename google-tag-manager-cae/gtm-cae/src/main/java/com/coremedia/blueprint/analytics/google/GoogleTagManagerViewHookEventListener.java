package com.coremedia.blueprint.analytics.google;


import com.coremedia.blueprint.base.settings.SettingsService;
import com.coremedia.blueprint.common.contentbeans.Page;
import com.coremedia.objectserver.view.RenderNode;
import com.coremedia.objectserver.view.events.ViewHookEvent;
import com.coremedia.objectserver.view.events.ViewHookEventListener;
import jakarta.inject.Named;

import static com.coremedia.blueprint.base.cae.web.taglib.ViewHookEventNames.VIEW_HOOK_END;
import static com.coremedia.blueprint.base.cae.web.taglib.ViewHookEventNames.VIEW_HOOK_HEAD;

@Named
public class GoogleTagManagerViewHookEventListener implements ViewHookEventListener<Page> {

  public static final String HEAD_VIEW_NAME = "head";
  public static final String BODY_VIEW_NAME = "body";

  private final SettingsService settingsService;

  public GoogleTagManagerViewHookEventListener(SettingsService settingsService) {
    this.settingsService = settingsService;
  }

  @Override
  public RenderNode onViewHook(ViewHookEvent<Page> event) {
    if (VIEW_HOOK_HEAD.equals(event.getId())) {
      GoogleTagManager gtmProvider = new GoogleTagManager(event.getBean(), settingsService);
      if (gtmProvider.isEnabled()) {
        return new RenderNode(gtmProvider, HEAD_VIEW_NAME);
      }
    }

    if (VIEW_HOOK_END.equals(event.getId())) {
      GoogleTagManager gtmProvider = new GoogleTagManager(event.getBean(), settingsService);
      if (gtmProvider.isEnabled()) {
        return new RenderNode(gtmProvider, BODY_VIEW_NAME);
      }
    }

    return null;
  }

  @Override
  public int getOrder() {
    return DEFAULT_ORDER;
  }
}
