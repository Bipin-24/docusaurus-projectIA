---
title: Queue Connection Properties
hide_table_of_contents: true
---

# Queue Connection Properties

Refer to the following table for available Queue Connection properties:

| Property| Description| Default |
| --- | --- | --- |
| `queue.host` | RabbitMQ server name or cluster domain | — |
| `queue.port`| RabbitMQ messaging port | `8063`|
| `queue.username` | RabbitMQ user. This should be a user with administrative privileges that can create users, queues, and exchanges. | — |
| `queue.password` | RabbitMQ user password | — |
| `queue.connectionTimeout` | RabbitMQ connection timeout, in seconds | `20` |
| `queue.ssl.enabled`| Enable TLS for messaging protocol | `true` |
| `queue.ssl.key-store` | The keystore file location containing the alias used to encrypt messages | — |
| `queue.ssl.key-store- password`| The keystore alias password | — |
| `queue.ssl.key-store-type` | The keystore type (`PKCS12` recommended) | `PKCS12` |
| `queue.ssl.protocol` | Protocol version for queue SSL connection (`TLSv1`, `TLSv1.1`, `TLSv1.2`, `TLSv1.3`) | `TLSv1.2` |
