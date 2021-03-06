# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

Rails.application.config.assets.webpack_js_manifest =
  if File.exist?(Rails.root.join('public', 'assets', 'javascripts', 'webpack-manifest.json'))
    JSON.parse(File.read(Rails.root.join('public', 'assets', 'javascripts', 'webpack-manifest.json')))
  end

Rails.application.config.assets.webpack_css_manifest =
  if File.exist?(Rails.root.join('public', 'assets', 'stylesheets', 'webpack-manifest.json'))
    JSON.parse(File.read(Rails.root.join('public', 'assets', 'stylesheets', 'webpack-manifest.json')))
  end
# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )
