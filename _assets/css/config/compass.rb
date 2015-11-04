require 'compass/import-once/activate'
# Require any additional compass plugins here.

module Sass::Script::Functions
    def timestamp()
        return Sass::Script::String.new(Time.now.strftime('%Y-%m-%d %H:%M:%S'))
    end
end

http_path = "/"
css_dir = "."
sass_dir = "./sass"
images_dir = "images"
javascripts_dir = "javascripts"

output_style = :compact

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass ./sass scss && rm -rf sass && mv scss sass
