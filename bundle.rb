require 'ruble'
require 'ruble/platform'

bundle 'Appcelerator Titanium Mobile' do |bundle|
  bundle.author = 'Thomas Aylott/Appcelerator'
  bundle.copyright = "Copyright 2011 Thomas Aylott/Appcelerator. Distributed under the MIT license."
  bundle.contact_email_rot_13 = 'null'
  bundle.description =  'Support for Appcelerator Titanium Mobile'
  bundle.display_name = 'Titanium Mobile'
  bundle.repository = "git@github.com:aptana/titanium.ruble.git"

  bundle.menu 'Titanium Mobile' do |main_menu|
    main_menu.command 'Titanium Mobile Developer Center'
    main_menu.command 'Xcode Debug' if Ruble.is_mac?

    main_menu.command 'Ti.include()'
    main_menu.command 'Ti.API.debug'
    main_menu.command 'Ti.API.info'
    main_menu.command 'Ti.API.log'
    main_menu.command 'Ti.App.fireEvent'
    main_menu.command 'Ti.App.addEventListener'
    
    main_menu.command 'createAnimation'
    main_menu.command 'createButton'
    main_menu.command 'createCamera'
    main_menu.command 'createContact'
    main_menu.command 'createHttpClientBinary'
    main_menu.command 'createHttpClientXml'
    main_menu.command 'createImageView'
    main_menu.command 'createLabel'
    main_menu.command 'createPickerMulti'
    main_menu.command 'createPickerSimple'
    main_menu.command 'createProgressBar'
    main_menu.command 'createSlider'
    main_menu.command 'createSound'
    main_menu.command 'createSwitch'
    main_menu.command 'createTabbedBar'
    main_menu.command 'createTableView'
    main_menu.command 'createTextField'
    main_menu.command 'createWebView'
    
    main_menu.command 'appBadge'
    main_menu.command 'base64'
    main_menu.command 'clipboard'
    main_menu.command 'md5'
    main_menu.command 'properties'
    main_menu.command 'tabBadge'
    main_menu.command 'vibrate'
  end
end
