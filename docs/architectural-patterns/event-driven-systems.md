---
title: Event-Driven Systems
sidebar_position: 2
---

## Overview

Events decouple producers from consumers and enable independent scaling.

## Event shape

```json
{
  "type": "order.created",
  "id": "evt_123",
  "occurredAt": "2024-01-01T10:00:00Z",
  "payload": {
    "orderId": "ord_456"
  }
}
```

## Notes

I will add guidelines for when to adopt events.
