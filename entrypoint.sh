#!/bin/sh
set -e

# Cada vez que haya un push a main
npx sequelize-cli db:seed:undo:all

npx sequelize-cli db:migrate:undo:all

npx sequelize-cli db:migrate

npx sequelize-cli db:seed:all