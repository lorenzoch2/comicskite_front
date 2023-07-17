--create database comics

-- Crear la tabla "usuario"
CREATE TABLE usuario (
  id_usuario SERIAL PRIMARY KEY,
  email VARCHAR(255),
  nombre VARCHAR(255),
  apellido VARCHAR(255),
  direccion VARCHAR(255),
  telefono VARCHAR(255),
  password VARCHAR(255)
);

-- Crear la tabla "producto"
CREATE TABLE producto (
  id_producto SERIAL PRIMARY KEY,
  nombre VARCHAR(255),
  numero INT,
  imagen_pequena VARCHAR(255),
  imagen_grande VARCHAR(255),
  detalle VARCHAR(255),
  precio INT,
  stock INT,
  id_usuario INT,
  FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
);

-- Crear la tabla "orden_compra"
CREATE TABLE orden_compra (
  id_orden_compra SERIAL PRIMARY KEY,
  fecha_venta DATE,
  detalle_productos TEXT,
  id_usuario INT,
  FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
);

-- Crear la tabla "orden_compra_producto"
CREATE TABLE orden_compra_producto (
  id_orden_compra_producto SERIAL PRIMARY KEY,
  precio INT,
  cantidad INT,
  id_orden_compra INT,
  id_producto INT,
  FOREIGN KEY (id_orden_compra) REFERENCES orden_compra (id_orden_compra),
  FOREIGN KEY (id_producto) REFERENCES producto (id_producto)
);

-- Crear la tabla "like"
CREATE TABLE likes (
  id_like SERIAL PRIMARY KEY,
  id_usuario INT,
  id_producto INT,
  FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario),
  FOREIGN KEY (id_producto) REFERENCES producto (id_producto)
);