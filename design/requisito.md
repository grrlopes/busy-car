# Escopo do sistema
- Trata-se de uma sistema de reservas de veículos.
- A API deve manter os usuários e veículos.
- A API deve possuir um mecanismo de autenticação para os usuários.
- A API deve possuir um mecanismo de reserva e cancelamento de reserva desses veículos.
- Um usuário pode reservar somente um veículo e este deve estar disponível.
- Um usuário não pode reservar um veículo já reservado.

# Feature
#### api

### Admin
- `DELETE` removeuser
- `POST` newcar

### User
- `POST` newuser
- `POST` login
- `PUT` changepass

### Cars
- `DELETE` car
- `GET` rentcar
- `GET` listallcars
- `GET` availablecars
- `POST` returncar
- `POST` cancelrent

