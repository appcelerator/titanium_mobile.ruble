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
  end
end
