#!/usr/bin/env bash
export PYTHONUNBUFFERED=1
cd /workspace/ComfyUI
source venv/bin/activate

# Enable tcmalloc for better memory handling
TCMALLOC="$(ldconfig -p | grep -Po "libtcmalloc.so.\d" | head -n 1)"
export LD_PRELOAD="${TCMALLOC}"

# Run ComfyUI optimized for RunPod with 4090/H100
python3 main.py \
  --listen 0.0.0.0 \
  --port 7860 \
  --extra-model-paths-config extra_model_paths.yaml \
  --gpu-only \
  --highvram \
  --cuda-malloc \
  --fp16-unet \
  --fp16-vae \
  --force-channels-last \
  > /workspace/logs/comfyui.log 2>&1 &

deactivate
