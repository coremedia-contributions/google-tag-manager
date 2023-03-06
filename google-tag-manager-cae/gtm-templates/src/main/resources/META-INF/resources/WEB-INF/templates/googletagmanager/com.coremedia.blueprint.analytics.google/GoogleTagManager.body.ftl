<#-- @ftlvariable name="self" type="com.coremedia.blueprint.analytics.google.GoogleTagManager" -->

<#-- google analytics -->
<#if self.enabled>
  <#assign containerId = self.containerId/>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${containerId}"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
</#if>
