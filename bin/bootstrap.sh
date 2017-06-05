#!/usr/bin/env bash

# Version 0.1.0 [2017-03-13]
#
#   Project     : Darkstar Vagrant Boilerplate
#   Markup      : bootstrap.sh
#   Author      : Rye Miller
#   Version     : v0.1.0 (beta)
#   License     : MIT
#   License URI : http://github.com/iods/vagrant/LICENSE
#
# Website:   http://github.com/iods/vagrant/bootstrap.sh (public)
# Copyright: (c) 2017 Rye Miller, DRKSTR

# Update/Upgrade the Repository
sudo apt-get update
sudo apt-get -y upgrade

# Install Apache
sudo apt-get -y install apache2

# Add the vagrant and www-data users
sudo usermod -a -G vagrant www-data

# Install PHP and dependencies
sudo apt-get -y install php5 libapache2-mod-php5 curl php5-curl php5-gd php5-mcrypt

# Install Composer for PHP
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer

# Setup VirtualHosts file
cat /var/config/apache2/default | tee /etc/apache2/sites-available/default

# Enable Rewrite (mod_rewrite)
sudo a2enmod rewrite

# Restart Apache
sudo service apache2 restart