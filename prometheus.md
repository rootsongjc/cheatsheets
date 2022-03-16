---
title: Prometheus
layout: 2017/sheet
prism_languages: [ini,bash]
weight: -3
updated: 2017-11-20
category: Cloud Native
---

## Getting started
{: .-three-column}

## Basic

### Data Model

Prometheus fundamentally stores all data as [*time series*](http://en.wikipedia.org/wiki/Time_series).

```bash
# Type
<metric name>{<label name>=<label value>, ...}
# Example
api_http_requests_total{method="POST", handler="/messages"}
```

This is the same notation that [OpenTSDB](http://opentsdb.net/) uses.

### Metric Types

The Prometheus client libraries offer four core metric types. 

- Counter
- Gauge
- Histogram
- Summary

Support Go, Java, Python and Ruby client libraries.

See: <https://prometheus.io/docs/concepts/metric_types/>

### Jobs and Instances

For example, an API server job with four replicated instances:

- job: `api-server`
  - instance 1: `1.2.3.4:5670`
  - instance 2: `1.2.3.4:5671`
  - instance 3: `5.6.7.8:5670`
  - instance 4: `5.6.7.8:5671`

For each instance scrape, Prometheus stores a sample in the following time series:

```bash
up{job="<job-name>", instance="<instance-id>"}: 1 #表示该实例正常工作
up{job="<job-name>", instance="<instance-id>"}: 0 #表示该实例故障
scrape_duration_seconds{job="<job-name>", instance="<instance-id>"} #表示拉取数据的时间间隔
scrape_samples_post_metric_relabeling{job="<job-name>", instance="<instance-id>"} #表示采用重定义标签（relabeling）操作后仍然剩余的样本数
scrape_samples_scraped{job="<job-name>", instance="<instance-id>"}  #表示从该数据源获取的样本数
```

## Configuration

### Generic placeholder

- `<boolean>`: a boolean that can take the values `true` or `false`
- `<duration>`: a duration matching the regular expression `[0-9]+(ms|[smhdwy])`
- `<labelname>`: a string matching the regular expression `[a-zA-Z_][a-zA-Z0-9_]*`
- `<labelvalue>`: a string of unicode characters
- `<filename>`: a valid path in the current working directory
- `<host>`: a valid string consisting of a hostname or IP followed by an optional port number
- `<path>`: a valid URL path
- `<scheme>`: a string that can take the values `http` or `https`
- `<string>`: a regular string
- `<secret>`: a regular string that is a secret, such as a password
- `<tmpl_string>`: a string which is template-expanded before usage

### Global config

```bash
global:
  # How frequently to scrape targets by default.
  [ scrape_interval: <duration> | default = 1m ]

  # How long until a scrape request times out.
  [ scrape_timeout: <duration> | default = 10s ]

  # How frequently to evaluate rules.
  [ evaluation_interval: <duration> | default = 1m ]

  # The labels to add to any time series or alerts when communicating with
  # external systems (federation, remote storage, Alertmanager).
  external_labels:
    [ <labelname>: <labelvalue> ... ]

# Rule files specifies a list of globs. Rules and alerts are read from
# all matching files.
rule_files:
  [ - <filepath_glob> ... ]

# A list of scrape configurations.
scrape_configs:
  [ - <scrape_config> ... ]

# Alerting specifies settings related to the Alertmanager.
alerting:
  alert_relabel_configs:
    [ - <relabel_config> ... ]
  alertmanagers:
    [ - <alertmanager_config> ... ]

# Settings related to the experimental remote write feature.
remote_write:
  [ - <remote_write> ... ]

# Settings related to the experimental remote read feature.
remote_read:
  [ - <remote_read> ... ]
```

See <https://prometheus.io/docs/prometheus/latest/configuration/configuration/>

### Scrape config

```bash
# The job name assigned to scraped metrics by default.
job_name: <job_name>

# How frequently to scrape targets from this job.
[ scrape_interval: <duration> | default = <global_config.scrape_interval> ]

# Per-scrape timeout when scraping this job.
[ scrape_timeout: <duration> | default = <global_config.scrape_timeout> ]

# The HTTP resource path on which to fetch metrics from targets.
[ metrics_path: <path> | default = /metrics ]

[ honor_labels: <boolean> | default = false ]

# Configures the protocol scheme used for requests.
[ scheme: <scheme> | default = http ]

# Optional HTTP URL parameters.
params:
  [ <string>: [<string>, ...] ]

# Sets the `Authorization` header on every scrape request with the
# configured username and password.
basic_auth:
  [ username: <string> ]
  [ password: <secret> ]

# Sets the `Authorization` header on every scrape request with
# the configured bearer token. It is mutually exclusive with `bearer_token_file`.
[ bearer_token: <secret> ]
```

## References

- [Prometheus.io](https://prometheus.io/)
- [Prometheus practice 中文 - songjiayang](https://github.com/songjiayang/prometheus_practice)
