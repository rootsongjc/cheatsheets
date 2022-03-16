---
title: kubectl
layout: 2017/sheet
prism_languages: [go, bash]
weight: -3
tags: [Featured]
category: Kubernetes
updated: 2017-11-19
---

## 基本命令

{: .-three-column}

### 运行pod

{:.-prime}

#### kubectl run

如何运行一个 nginx Deployment 并将其暴露出来？ 查看 [kubectl run](https://kubernetes.io/docs/user-guide/kubectl/#run)。

```bash
# start the pod running nginx
$ kubectl run --image=nginx nginx-app --port=80 --env="DOMAIN=cluster"
deployment "nginx-app" created
```

### 暴露服务

#### kubectl expose

```bash
# expose a port through with a service
$ kubectl expose deployment nginx-app --port=80 --name=nginx-http
service "nginx-http" exposed
```

在 kubectl 命令中，我们创建了一个 [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment)，这将保证有 N 个运行 nginx 的 pod（N 代表 spec 中声明的 replica 数，默认为 1）。我们还创建了一个 [service](https://kubernetes.io/docs/user-guide/services)，使用 selector 匹配具有相应的 selector 的 Deployment。查看 [快速开始](https://kubernetes.io/docs/user-guide/quick-start) 获取更多信息。

默认情况下镜像会在后台运行，与`docker run -d ...` 类似，如果您想在前台运行，使用：

```bash
kubectl run [-i] [--tty] --attach <name> --image=<image>
```

### 查看服务

#### kubectl get

如何列出哪些正在运行？查看 [kubectl get](https://kubernetes.io/docs/user-guide/kubectl/#get)。

```bash
$ kubectl get po
NAME              READY     STATUS    RESTARTS   AGE
nginx-app-5jyvm   1/1       Running   0          1h
```

如何连接到已经运行在容器中的进程？查看 [kubectl attach](https://kubernetes.io/docs/user-guide/kubectl/#attach)。

使用 kubectl 命令：

```bash
$ kubectl get pods
NAME              READY     STATUS    RESTARTS   AGE
nginx-app-5jyvm   1/1       Running   0          10m
$ kubectl attach -it nginx-app-5jyvm
...
```

## 高级命令

{:.-three-column}

### 与容器交互

#### kubectl exec

```bash
$ kubectl get po
NAME              READY     STATUS    RESTARTS   AGE
nginx-app-5jyvm   1/1       Running   0          10m
$ kubectl exec nginx-app-5jyvm -- cat /etc/hostname
nginx-app-5jyvm
```

执行交互式命令怎么办？

```bash
$ kubectl exec -ti nginx-app-5jyvm -- /bin/sh      
# exit
```

更多信息请查看 [获取运行中容器的 Shell 环境](https://kubernetes.io/docs/tasks/kubectl/get-shell-running-container)。

### 查看日志

如何查看运行中进程的 stdout/stderr？查看 [kubectl logs](https://kubernetes.io/docs/user-guide/kubectl/#logs)。

#### kubectl logs

```bash
$ kubectl logs -f nginx-app-zibvs
10.240.63.110 - - [14/Jul/2015:01:09:01 +0000] "GET / HTTP/1.1" 200 612 "-" "curl/7.26.0" "-"
10.240.63.110 - - [14/Jul/2015:01:09:02 +0000] "GET / HTTP/1.1" 200 612 "-" "curl/7.26.0" "-"
```

现在是时候提一下 pod 和容器之间的细微差别了；默认情况下如果 pod 中的进程退出 pod 也不会终止，相反它将会重启该进程。这类似于 docker run 时的 `--restart=always` 选项， 这是主要差别。在 docker 中，进程的每个调用的输出都是被连接起来的，但是对于 kubernetes，每个调用都是分开的。要查看以前在 kubernetes 中执行的输出，请执行以下操作：

```bash
$ kubectl logs --previous nginx-app-zibvs
10.240.63.110 - - [14/Jul/2015:01:09:01 +0000] "GET / HTTP/1.1" 200 612 "-" "curl/7.26.0" "-"
10.240.63.110 - - [14/Jul/2015:01:09:02 +0000] "GET / HTTP/1.1" 200 612 "-" "curl/7.26.0" "-"
```

查看 [记录和监控集群活动](https://kubernetes.io/docs/concepts/cluster-administration/logging) 获取更多信息。

### 删除pod

如何停止和删除运行中的进程？查看 [kubectl delete](https://kubernetes.io/docs/user-guide/kubectl/#delete)。

#### kubectl delete

```bash
$ kubectl get deployment nginx-app
NAME        DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
nginx-app   1         1         1            1           2m
$ kubectl get po -l run=nginx-app
NAME                         READY     STATUS    RESTARTS   AGE
nginx-app-2883164633-aklf7   1/1       Running   0          2m
$ kubectl delete deployment nginx-app
deployment "nginx-app" deleted
$ kubectl get po -l run=nginx-app
# Return nothing
```

请注意，我们不直接删除 pod。使用 kubectl 命令，我们要删除拥有该 pod 的 Deployment。如果我们直接删除pod，Deployment 将会重新创建该 pod。

### 强制删除pod

```bash
kubectl delete pod $POD_ID --grace-period=0 --force
```

将Pod的优雅终止时间设置为0，并强制删除。

## 运维管理

### 下节点

排除节点上的容器，重新调度到其他的节点上。

```bash
kubectl drain $NODE_NAME
```

### 禁止调度

标记pod禁止调度到该节点上。

```bash
kubectl cordon $NDOE_NAME
```

### 查看命令行工具版本

查看`kubectl`命令行工具版本信息和kubenretes版本：

```bash
$ kubectl version
Client Version: version.Info{Major:"1", Minor:"6", GitVersion:"v1.6.9+a3d1dfa6f4335", GitCommit:"9b77fed11a9843ce3780f70dd251e92901c43072", GitTreeState:"dirty", BuildDate:"2017-08-29T20:32:58Z", OpenPaasKubernetesVersion:"v1.03.02", GoVersion:"go1.7.5", Compiler:"gc", Platform:"linux/amd64"}
Server Version: version.Info{Major:"1", Minor:"6", GitVersion:"v1.6.9+a3d1dfa6f4335", GitCommit:"9b77fed11a9843ce3780f70dd251e92901c43072", GitTreeState:"dirty", BuildDate:"2017-08-29T20:32:58Z", OpenPaasKubernetesVersion:"v1.03.02", GoVersion:"go1.7.5", Compiler:"gc", Platform:"linux/amd64"}
```

### 查看集群服务信息

查看集群级别的服务信息：

#### kubectl cluster-info

```bash
$ kubectl cluster-info
Kubernetes master is running at https://108.59.85.141
KubeDNS is running at https://108.59.85.141/api/v1/namespaces/kube-system/services/kube-dns/proxy
KubeUI is running at https://108.59.85.141/api/v1/namespaces/kube-system/services/kube-ui/proxy
Grafana is running at https://108.59.85.141/api/v1/namespaces/kube-system/services/monitoring-grafana/proxy
Heapster is running at https://108.59.85.141/api/v1/namespaces/kube-system/services/monitoring-heapster/proxy
InfluxDB is running at https://108.59.85.141/api/v1/namespaces/kube-system/services/monitoring-influxdb/proxy
```

## 参考

- [从docker到kubectl的转变](https://github.com/rootsongjc/kubernetes.github.io/blob/master/docs/user-guide/docker-cli-to-kubectl.md)