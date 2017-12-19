---
title: Networking
layout: 2017/sheet
category: Linux
prism_languages: [bash]
updated: 2017-12-19
---

## Networking

## route

### View route

View the route tables.

```bash
route -n
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         172.30.3.1      0.0.0.0         UG    0      0        0 eth0
10.2.3.0        172.30.3.143    255.255.255.0   UG    0      0        0 eth0
10.2.9.0        172.30.3.158    255.255.255.0   UG    0      0        0 eth0
10.2.52.0       172.30.3.38     255.255.255.0   UG    0      0        0 eth0
169.254.0.0     0.0.0.0         255.255.0.0     U     1002   0        0 eth0
172.30.3.0      0.0.0.0         255.255.255.0   U     0      0        0 eth0
```

### Delete route

Delete a route form networking.

```bash
route del -net 10.2.3.0 netmask 255.255.255.0
```

## iptables

### View

```bash
iptables -L
```

### Flush

```bash
iptables -F
```

## ifconfig

### Turn down an interface

```bash
ifconfig docker0 down
```

### Delete a bridge

```bash
brctl delbr docker0
```

