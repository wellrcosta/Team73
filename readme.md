# Techs

### Frontend - React

### Backend - Nodejs com AdonisJS

### Mobile - React Native

# Backend - Ideias

Login com bearer

# Rotas:

## products

> per_page=100 _
> status=enabled _
> categorias {
> Dormitórios > Casal > Guarda Roupas > 2 Portas
> }

## orders

> pedidos Aprovados _
> Nota Fiscal Emitida _
> Pagamento Pendente _
> pedidos Cancelados _
> Entregues ao Cliente _
> Pedidos Enviado _

## pedidos

> NEW _
> APPROVED _
> INVOICED _
> SHIPPED _
> DELIVERED _
> CANCELED _
> SHIPMENT_EXCEPTION \*
> PAYMENT_OVERDUE

## queues/orders

> Code: book_product
> Label: Pagamento Pendente (SkyHub)
> Type: NEW

---

> Code: order_canceled
> Label: Cancelado (SkyHub)
> Type: CANCELED

---

> Code: payment_received
> Label: Aprovado (SkyHub)
> Type: APPROVED

# Frontend - Ideias

> Pagina de login
> Pagina de cadastro
> Pagina de busca
