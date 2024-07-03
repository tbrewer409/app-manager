#!/usr/bin/env bash
export PYTHONUNBUFFERED=1
cd /workspace/stable-diffusion-webui
nohup ./webui.sh -f > /workspace/logs/webui.log 2>&1 &
