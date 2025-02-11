#!/bin/sh
set -e

echo "Esperando a que la base de datos esté disponible..."
while ! nc -z db 3306; do
  sleep 5
done
echo "La base de datos está disponible."

# Ejecuta las migraciones
npx sequelize-cli db:migrate

# Ejecuta los seeders
npx sequelize-cli db:seed:all

npm run build

# Inicia la aplicación
npm start