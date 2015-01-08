# A sample Guardfile
# More info at https://github.com/guard/guard#readme

group :development do
  guard 'sass', :input => 'stylesheets'

  guard :livereload do
    watch(%r{.+\.(css|js|html?)$})
  end

end

guard 'sass', :input => 'stylesheets'

require 'autoprefixer-rails'
 
guard :sass, {
  input: 'stylesheets',
  output: 'stylesheets',
  style: :compressed,
  smart_partials: true,
  all_on_start: true
} do
  callback(:run_on_changes_end) do |_, _, files|
    Array(files).each do |file|
      time = Benchmark.realtime { autoprefix_file(file) }
      benchmark = "[\e[33m%2.2fs\e[0m] " % time
      ::Guard::UI.info("\t\e[1;37mAutoprefixer\e[0m %s%s" % [benchmark, file])
    end
  end
end
 
def autoprefix_file(file)
  original_css = File.read(file)
  File.open(file, 'w') do |io|
    io << ::AutoprefixerRails.process(original_css, browsers: ['> 1%', 'ie >= 7'])
  end
end