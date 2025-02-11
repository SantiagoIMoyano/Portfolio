#!/bin/sh
set -e

# Ejecuta las migraciones
npx sequelize-cli db:migrate

# Ejecuta los seeders
npx sequelize-cli db:seed:all

npm run build

# Inicia la aplicación
npm start