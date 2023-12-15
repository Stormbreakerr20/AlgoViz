from fastapi import FastAPI 
from regression import regression,data_set_regression
from random_forest import rf,data_set_rf
import base64
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/regression/{degree}/{dataset}/{reg_type}")
async def regression_root(degree: int, dataset: str,reg_type:str):  
    if(degree):
        reg_image,accuracy = regression(degree,dataset,reg_type)
    else: 
        reg_image,accuracy = data_set_regression(dataset)

    reg_image_base64 = base64.b64encode(reg_image.getvalue()).decode('utf-8')
    return {"image": reg_image_base64,"accuracy":accuracy}

@app.get("/random_forest/{estimators}/{bootstrap}/{dataset}/{reset}/{max_samples}")
async def regression_root(estimators: int, bootstrap: bool, dataset: str, reset: bool, max_samples: int):  
    if(reset == False):
        rf_image,accuracy = rf(max_samples,dataset,estimators,bootstrap)
    else: 
        rf_image,accuracy = data_set_rf(dataset)

    rf_image_base64 = base64.b64encode(rf_image.getvalue()).decode('utf-8')
    return {"image": rf_image_base64,"accuracy":accuracy}
