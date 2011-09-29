with_defaults :scope => 'source.js' do
  snippet 'Ti.include()' do |s|
    s.trigger = 'inc'
    s.expansion = 'Ti.include($0);'
  end
  
  snippet 'Ti.API.debug' do |s|
    s.trigger = 'd'
    s.expansion = 'Ti.API.debug(${0:${TM_SELECTED_TEXT}})'
  end
  
  snippet 'Ti.API.info' do |s|
    s.trigger = 'i'
    s.expansion = 'Ti.API.info(${0:${TM_SELECTED_TEXT}})'
  end
  
  snippet 'Ti.API.log' do |s|
    s.trigger = 'l'
    s.expansion = 'Ti.API.log(\'${1:info}\',${0:${TM_SELECTED_TEXT}})'
  end
  
  snippet 'Ti.App.addEventListener' do |s|
    s.trigger = 'ae'
    s.expansion = 'Ti.App.addEventListener(\'${1:event}\', $0);'
  end
  
  snippet 'Ti.App.fireEvent' do |s|
    s.trigger = 'fe'
    s.expansion = 'Ti.App.fireEvent(\'${1:event}\'$0)'
  end
end