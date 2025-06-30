# 💎 Fullstack Admin Jewelry App

Panel de administración fullstack pensado para talleres de joyería. Esta aplicación permite a joyeros 
y joyeras gestionar sus productos, materiales, presupuestos y procesos internos de forma centralizada y eficiente.

---

## ✨ Descripción

Este proyecto es una herramienta de uso interno para joyerías que buscan digitalizar su flujo de trabajo. 
Está orientado a profesionales independientes que necesitan llevar el control de sus piezas, stock de materiales 
y realizar cálculos de presupuestos personalizados según las aleaciones de metales que utilizan.

El sistema cuenta con:

- Registro y Login de usuarios
- Panel administrativo para usuarios autenticados
  
- EN DESARROLO: Generador de presupuestos
- Gestión de productos terminados (CRUD)
- Registro y control de materiales (plata, oro, aleaciones)
- Control de herramientas del taller

---

## 📦 Inventario inteligente

Este panel funciona como un gestor de stock para joyeros, permitiendo controlar:

### 🪙 Materiales
- Registro por tipo (plata, oro, etc.)
- Formato (chapa, alambre, granalla, etc.)
- Cantidad (gramos, centímetros)
- Punto de reposición
- Observaciones (proveedor, lote, pureza)

### 💍 Productos terminados
- Tipo de pieza (anillo, dije, etc.)
- Metal, talle, peso, con o sin piedra
- Estado: `en_producción`, `terminado`, `vendido`
- Campo `publicarEnTienda`: define si el producto se debe mostrar en el ecommerce

✅ Pueden ser publicados en una tienda online conectada.

### 🛠️ Herramientas del taller
- Registro de herramientas actuales
- Lista de herramientas a reponer o comprar
- Estado (rota, falta, disponible)

---

## 🧩 Escalabilidad

Esta app está diseñada para funcionar como:

- ✅ Una herramienta independiente de uso interno para joyerías
- ✅ Un módulo reutilizable dentro de un ecommerce más grande
- ✅ Un microservicio dentro de una arquitectura distribuida

> El stock de productos terminados puede ser consumido por una tienda ecommerce a través de un endpoint
que permite separar responsabilidades entre la gestión del taller y las ventas al cliente final.

---

## 🛠️ Tecnologías

### Backend (NestJS + PostgreSQL)
- NestJS
- TypeORM
- PostgreSQL
- JWT (autenticación)
- Swagger

### Frontend (React + Vite)
- React.js
- React Router
- TailwindCSS
- Vite
- Axios



