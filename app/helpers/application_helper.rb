module ApplicationHelper
  def javascript_tag
    return javascript_include_tag "http://localhost:8090/assets/javascripts/tests/index.js"

    manifest = Rails.application.config.assets.webpack_js_manifest
    path     = "javascripts/#{controller.controller_name}/#{controller.action_name}.js"
    path     = manifest[path] if manifest && manifest[path].present?
    host     = Rails.application.config.action_controller.asset_host
    javascript_include_tag "#{compute_asset_host}/#{path}"
  end

  def stylesheet_tag
    return stylesheet_link_tag "http://localhost:8090/assets/stylesheets/tests/index.css"

    manifest = Rails.application.config.assets.webpack_css_manifest
    path     = "stylesheets/#{controller.controller_name}/#{controller.action_name}.css"
    path     = manifest[path] if manifest && manifest[path].present?
    host     = Rails.application.config.action_controller.asset_host
    stylesheet_link_tag "#{compute_asset_host}/#{path}"
  end
end
