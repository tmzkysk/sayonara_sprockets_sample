module ApplicationHelper
  def javascript_tag
    # "app/assets#{controller.controller_name}/#{controller.action_name}"

    javascript_include_tag "http://localhost:8090/assets/javascripts/tests/index.js"
  end
end
