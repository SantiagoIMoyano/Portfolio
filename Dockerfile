# Etapa 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# Copiamos los archivos de package para instalar dependencias
COPY package.json package-lock.json* ./
RUN npm install

# Copiamos el resto de la aplicación y construimos
COPY . .

# Etapa 2: Run
FROM node:20-alpine AS runner
WORKDIR /app

# Establecemos la variable de entorno a producción
ENV NODE_ENV=production

# Copiamos todo el código necesario de la etapa builder
COPY --from=builder /app ./

# Instalamos netcat para poder esperar la DB
RUN apk add --no-cache netcat-openbsd

# Copiar el entrypoint script
COPY entrypoint.sh ./
RUN chmod +x entrypoint.sh

EXPOSE 3000

CMD ["./entrypoint.sh"]