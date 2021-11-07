#!/bin/sh
# 
# 

# Fetch install to use from first provided parameter,
# Otherwise request the user to input their install
INSTALL=$1
if [ -z $1 ]
then
echo ""
printf "Enter the install name you want to DELETE and press [ENTER]\nExamples: beaker or kermit\n"
read INSTALL
fi

# remove up database
mysql -u root -pRp0U0V5Ubvkc --execute="DROP DATABASE wp_$INSTALL;"
mysql -u root -pRp0U0V5Ubvkc --execute="REVOKE ALL PRIVILEGES, GRANT OPTION FROM '$INSTALL'@'localhost';"
mysql -u root -pRp0U0V5Ubvkc --execute="DROP USER '$INSTALL'@'localhost';"



sudo rm /etc/nginx/sites-available/$INSTALL
sudo rm /etc/nginx/sites-enabled/$INSTALL
sudo systemctl reload nginx


sudo rm /etc/apache2/sites-available/$INSTALL.conf 
sudo rm /etc/apache2/sites-enabled/$INSTALL.conf

sudo systemctl restart apache2

