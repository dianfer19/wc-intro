## 🧩 Diferencia entre `nginx.conf` y `conf.d/default.conf` en Nginx

Nginx tiene una arquitectura modular para su configuración. Los dos archivos que mencionás tienen **roles diferentes**:

---

### ✅ `/etc/nginx/nginx.conf` → **Archivo principal**

🔧 **Propósito:**
Contiene la **configuración global del servidor Nginx**, incluyendo:

* `worker_processes`
* `events { ... }`
* `http { ... }`

    * Dentro del `http` van:

        * `server { ... }` (sitios)
        * `include conf.d/*.conf;` (archivos adicionales)

📌 **Solo este archivo** puede tener directivas como:

```nginx
worker_processes 1;

events {
    worker_connections 1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    server {
        listen 80;
        root /usr/share/nginx/html;
    }
}
```

🔁 Es el **entrypoint principal** de toda la configuración de Nginx.

---

### ✅ `/etc/nginx/conf.d/default.conf` → **Archivo por sitio / virtual host**

🔧 **Propósito:**
Este archivo forma parte de la configuración **dentro del bloque `http {}`**, y define sitios o servicios individuales (
como un “virtual host”).

📌 Solo puede contener **bloques `server {}`**, por ejemplo:

```nginx
server {
    listen 80;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html;
}
```

🚫 No puede contener:

* `worker_processes`
* `http { ... }`
* `events { ... }`

❗ Si le pones algo como `worker_processes`, Nginx **lanza un error fatal** (como te pasó).

---

## 🎯 ¿Cuándo usar uno u otro?

| Caso                                    | Usar `nginx.conf`                       | Usar `default.conf` u otros en `conf.d/` |
|-----------------------------------------|-----------------------------------------|------------------------------------------|
| Control total del comportamiento global | ✅ Sí                                    | ❌ No                                     |
| Solo quiero agregar un nuevo sitio web  | ❌ No (a menos que modifiques el `http`) | ✅ Sí                                     |
| Estoy reemplazando todo el entorno      | ✅ Reemplazar `nginx.conf`               | ❌ No aplica                              |
| Configuración de múltiples sitios       | 🟡 Puede incluir archivos en `conf.d/`  | ✅ Cada uno con su `server {}`            |

---

## 🔄 ¿Cómo lo aplicás en Docker?

### Opción A – Reemplazar configuración completa (usás `nginx.conf`)

```Dockerfile
COPY nginx.conf /etc/nginx/nginx.conf
```

Archivo debe tener estructura completa (`worker_processes`, `http`, etc).

---

### Opción B – Solo redefinir el sitio por defecto

```Dockerfile
COPY default.conf /etc/nginx/conf.d/default.conf
```

Archivo debe tener **solo**:

```nginx
server {
    listen 80;
    ...
}
```

---

## 🧠 Consejo final

Como vos dijiste que estás **haciendo algo educativo** y querés control completo, te conviene:

```Dockerfile
COPY nginx.conf /etc/nginx/nginx.conf
```

Y usás un `nginx.conf` como este:

```nginx
worker_processes 1;

events {
    worker_connections 1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    server {
        listen 80;
        server_name _;

        root /usr/share/nginx/html;
        index index.html;
    }
}
```

---

¿Querés que te genere un archivo `.md` con esta explicación para que lo tengas documentado?
