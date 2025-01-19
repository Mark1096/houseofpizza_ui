#!/bin/sh
# Replacing variable set by default with dynamic variable
sed -i "s|default-url|${REACT_APP_API_URL}|g" /usr/share/nginx/html/config.js
exec "$@"