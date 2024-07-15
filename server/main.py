import os

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
import numpy as np
import tensorflow as tf
tf.compat.v1.logging.set_verbosity(tf.compat.v1.logging.ERROR)
tf.compat.v1.losses.sparse_softmax_cross_entropy
from tensorflow.keras.models import load_model

from PIL import Image

import io

app = FastAPI()


model = load_model("RadiantModel-xs.h5")
class_label =  ['Covid', 'Normal', 'Viral Pneumonia']
size = (150,150)

@app.post("/predict")
async def upload_image(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        image = Image.open(io.BytesIO(contents)).convert("RGB")
        image = image.resize(size)
        image_pred = np.array([np.array(image)])
        predicted = model.predict(image_pred)
        predicted_label = class_label[np.argmax(predicted)]
        return JSONResponse(content={"predicted_label": predicted_label})
    except Exception as e:
        return JSONResponse(content={"message": str(e)}, status_code=500)
