#!/usr/bin/env bash
cd /workspace/InvokeAI && source venv/bin/activate && nohup invokeai-web > /workspace/logs/invokeai.log 2>&1 &
