require 'rubygems' 
require 'rake'
require 'zip/zip'
require 'fileutils'

rake = Rake::Application.new

task :default => [:build] do
end

desc "Build all Titanium template projects"
task :build do
  #clear out old .zip files
  FileUtils.mkdir 'staging' unless File.exists? 'staging'
  FileUtils.rm_rf Dir.glob('staging/*')
  
  # Package up a .zip file for each of the project templates
  Dir.foreach('templates') do |template|
    next if template == '.' or template == '..'
    
    puts "Packaging #{template}..."
    
    # Grab all files/subfolders and throw them in a zip that Studio can use
    Zip::ZipFile.open("staging/#{template}.zip", Zip::ZipFile::CREATE) do |zipfile|
      Dir["templates/#{template}/**/*"].each do |file|
        next if File.directory? file
        zipfile.add(file.sub("templates/#{template}/",''),file)
      end
    end
  end
  
  puts "done!"
end