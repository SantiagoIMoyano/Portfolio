#!/bin/sh
set -e

# Eliminar seeders previos
npx sequelize-cli db:seed:undo:all

#Eliminar migraciones previas
npx sequelize-cli db:migrate:undo:all

# Ejecuta las migraciones
npx sequelize-cli db:migrate

# Ejecuta los seeders
npx sequelize-cli db:seed:all