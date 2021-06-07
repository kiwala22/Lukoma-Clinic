# config valid for current version and patch releases of Capistrano
lock "~> 3.16.0"

set :application, "lukoma-clinic"
set :repo_url, "git@bitbucket.org:kiwala22/lukoma-clinic.git"

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/var/www/html/lukoma-clinic"

# set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')

# set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system', 'public/uploads')

set :passenger_restart_with__touch, true

set :rvm_type, :system
set :rvm_ruby_version, '2.7.0'
# set :rvm_custom_path, "/home/ivan/.rvm" 



# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
 set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
 append :linked_files, "config/database.yml"
 append :linked_files, "config/secrets.yml"

# Default value for linked_dirs is []
 append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"


# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
# set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure
