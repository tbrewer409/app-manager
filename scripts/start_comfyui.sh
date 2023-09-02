#!/usr/bin/env bash
cd /workspace/ComfyUI && source venv/bin/activate && python3 main.py --listen 0.0.0.0 --port 3021 > /workspace/logs/comfyui.log 2>&1 &
