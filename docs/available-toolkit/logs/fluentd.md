2024-03-04 21:26:51 +0000 [warn]: #0 send an error event to @ERROR: error_class=Fluent::Plugin::OpenSearchErrorHandler::OpenSearchError error="400 - Rejected by OpenSearch" location=nil tag="kubernetes.var.log.containers.fleet-agent-ddc444854-sjg7g_cattle-fleet-system_fleet-agent-e272177025ba1c2b476f34b491df5b3894df16b89435e2d9b331457453a40cba.log" time=2024-03-02 23:09:47.556795912 +0000

apiVersion: logging.banzaicloud.io/v1beta1
kind: Flow
metadata:
  name: demo-flow
spec:
  filters:
    - parser:
        remove_key_name_field: true
        reserve_data: true
        parse:
          type: multi_format
          patterns:
          - format: nginx
          - format: regexp
            expression: /foo/
          - format: none
  selectors: {}
  localOutputRefs:
    - demo-output