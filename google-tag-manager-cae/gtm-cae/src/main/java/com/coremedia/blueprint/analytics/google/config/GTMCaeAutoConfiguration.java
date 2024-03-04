package com.coremedia.blueprint.analytics.google.config;

import com.coremedia.blueprint.analytics.google.GoogleTagManagerViewHookEventListener;
import com.coremedia.blueprint.base.settings.SettingsService;
import com.coremedia.blueprint.base.settings.impl.BlueprintSettingsServiceConfiguration;
import com.coremedia.springframework.customizer.Customize;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.core.annotation.Order;

@AutoConfiguration
@Import({
        BlueprintSettingsServiceConfiguration.class
})
public class GTMCaeAutoConfiguration {

  @Bean
  public GoogleTagManagerViewHookEventListener googleTagManagerViewHookEventListener(SettingsService settingsService) {
    return new GoogleTagManagerViewHookEventListener(settingsService);
  }

  @Order(1500)
  @Customize(value = "viewRepositories", mode = Customize.Mode.PREPEND)
  @Bean(autowireCandidate = false)
  public String addGoogleTagManagerRepositoryName() {
    return "googletagmanager";
  }

}
