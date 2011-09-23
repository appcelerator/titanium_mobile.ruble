require 'ruble'
require 'ruble/platform'

if Ruble.is_mac?
  command 'Xcode Debug' do |cmd|
    cmd.key_binding = 'M1+R'
    cmd.scope = 'source.js'
    cmd.output = :discard
    cmd.input = :none
    cmd.invoke =<<-EOF
  osascript -e 'tell the application "Xcode" to debug' &>/dev/null &
  EOF
  end
end
