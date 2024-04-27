# !/bin/bash

echo "Copying files to htdocs...."
cp -rf ./ ../htdocs/

echo "Enter your home assistant long live token: "
read ha_long_live_token

# Use sed to replace the string
sed -i "s/var hasspass = \"\";/var hasspass = \"$ha_long_live_token\";/" ../htdocs/js/setup.js
