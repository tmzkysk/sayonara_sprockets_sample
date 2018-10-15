module ApplicationHelper
  def javascript_tag
    return javascript_include_tag "http://localhost:8090/assets/javascripts/tests/index.js" if ENV['DEBUG']

    manifest = Rails.application.config.assets.webpack_manifest
    path     = "javascripts/#{controller.controller_name}/#{controller.action_name}.js"
    path     = manifest[path] if manifest && manifest[path].present?
    host     = Rails.application.config.action_controller.asset_host
    javascript_include_tag "#{compute_asset_host}/#{path}"
  end

  def stylesheet_tag
    # "app/assets#{controller.controller_name}/#{controller.action_name}"

    # return stylesheet_link_tag "http://localhost:8090/assets/stylesheets/tests/index.css"if ENV['DEBUG']
    host = Rails.application.config.action_controller.asset_host
    # stylesheet_link_tag "#{host}/assets/stylesheets/tests/index.css"
  end
end
