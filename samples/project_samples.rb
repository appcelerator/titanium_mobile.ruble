require 'ruble'

project_sample "Kitchen Sink" do |s|
  s.id = "com.appcelerator.titanium.mobile.samples.kitchensink"
  s.category = "com.appcelerator.titanium.mobile.samples.category"
  s.location = "git://github.com/appcelerator/KitchenSink.git"
  s.description = "A sample Titanium Mobile project that demonstrates a variety of APIs available in Titanium Mobile"
  s.natures = ["com.appcelerator.titanium.mobile.nature", "com.aptana.projects.webnature"]
end

project_sample "Kitchen Sink iPad" do |s|
  s.id = "com.appcelerator.titanium.mobile.samples.kitchensink.ipad"
  s.category = "com.appcelerator.titanium.mobile.samples.category"
  s.location = "git://github.com/appcelerator/KitchenSinkiPad.git"
  s.description = "A sample Titanium Mobile project that demonstrates a variety of APIs available in Titanium Mobile (For iPad)"
  s.natures = ["com.appcelerator.titanium.mobile.nature", "com.aptana.projects.webnature"]
end
