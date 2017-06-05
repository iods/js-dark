# -*- mode: ruby -*-
# vi: set ft=ruby :

# Version 0.1.0 [2017-03-13]
#
#   Project     : Darkstar Vagrant Boilerplate
#   Markup      : Vagrantfile
#   Author      : Rye Miller
#   Version     : v0.1.0 (beta)
#   License     : MIT
#   License URI :  http://github.com/iods/vagrant/LICENSE
#
# Based on a lean LAMP server with Apache, MySQL, and
# PHP 5.5 installed on top and includes the following
# flavors for environment replication:
#
# Debian :: "debian/jessie64"
#        :: "debian/wheezy64"
#
# Ubuntu :: "ubuntu/trusty64" - "https://vagrantcloud.com/ubuntu/trusty64/version/1/provider/virtualbox.box"
#        :: "ubuntu/precise32" - "http://files.vagrantup.com/precise32.box"
#        :: "ubuntu/precise64" - "http://files.vagrantup.com/precise64.box"
#        :: "ubuntu/xenial64"
#
# Centos :: "wholebits/centos-5-64"
#        :: "centos/6"
#        :: "centos/7"
#
# Website:   http://github.com/iods/vagrant/Vagrantfile (public)
# Copyright: (c) 2017 Rye Miller, DRKSTR

# Sets Vagrant's API/Syntax Version
VAGRANT_API_VERSION = "2"

# Sets the local directory to sync
VAGRANT_LOCAL_DIRECTORY = "./"
VAGRANT_LOCAL_CONFIG_DIRECTORY = "./config"
VAGRANT_LOCAL_PROVISION_SCRIPT = "bin/bootstrap.sh"

# Sets the environment and box to build from (see above)
VAGRANT_BOX = "ubuntu/trusty64"
VAGRANT_BOX_URL = "https://vagrantcloud.com/ubuntu/trusty64/version/1/provider/virtualbox.box"
VAGRANT_BOX_NAME = "darkjs-lamp"
VAGRANT_BOX_HOSTNAME = "darkjs.local"
VAGRANT_BOX_PRIVATE_IP = "192.168.33.16" # keep it within the IPv4 private network range

Vagrant.configure(VAGRANT_API_VERSION) do |config|

  # Define box to use
  config.vm.box = VAGRANT_BOX
  # config.vm.box_url = VAGRANT_BOX_URL

  # Define network settings for box
  config.vm.network :forwarded_port, guest: 80, host: 8080, auto_correct: true
  config.vm.network :private_network, ip: VAGRANT_BOX_PRIVATE_IP

  # Define folder sharing/sync for box
  config.vm.synced_folder VAGRANT_LOCAL_DIRECTORY, "/var/www/html", :nfs => true
  config.vm.synced_folder VAGRANT_LOCAL_CONFIG_DIRECTORY, "/var/config", create: true

  # Define the script to use for provisioning
  config.vm.provision :shell, path: VAGRANT_LOCAL_PROVISION_SCRIPT

end