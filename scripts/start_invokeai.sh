#!/usr/bin/env bash
export PYTHONUNBUFFERED=1
cd /workspace/InvokeAI
source /venvs/invokeai/bin/activate
nohup invokeai-web > /workspace/logs/invokeai.log 2>&1 &
