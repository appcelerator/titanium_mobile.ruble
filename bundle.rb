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
    main_menu.command 'Ti.include()'
    main_menu.command 'Ti.API.debug'
    main_menu.command 'Ti.API.info'
    main_menu.command 'Ti.API.log'
    main_menu.command 'Ti.App.fireEvent'
    main_menu.command 'Ti.App.addEventListener'
  end
  
  project_template "Single Window Application" do |t|
    t.type = :titanium_mobile
    t.location = "staging/SingleWindow.zip"
    t.description = "A single window application with a single view - a mostly blank canvas."
    puts t
  end
  
  project_template "Master/Detail Application" do |t|
    t.type = :titanium_mobile
    t.location = "staging/MasterDetail.zip"
    t.description = "A master detail view, utilizing a native table view component and platform-specific UI and navigation.  A starting point for a navigation-based application with hierarchical data, or a stack of windows."
    puts t
  end
  
  project_template "Tabbed Application" do |t|
    t.type = :titanium_mobile
    t.location = "staging/Tabbed.zip"
    t.description = "A tabbed application, consisting of multiple stacks of windows associated with tabs in a tab group.  A starting point for tab-based application with multiple top-level windows."
    puts t
  end
end
