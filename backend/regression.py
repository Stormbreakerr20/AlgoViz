from sklearn.linear_model import LinearRegression,Ridge,Lasso
from sklearn.datasets import make_regression  
import io
import matplotlib.pyplot as plt
from sklearn.preprocessing import PolynomialFeatures
import numpy as np


ds1, y_ds1 = make_regression(n_samples=100, n_features=1, n_informative=1, n_targets=1, noise=20, random_state=13)

ds2 = 6 * np.random.rand(200, 1) - 3
y_ds2 = 0.8 * ds2**2 + 0.9 * ds2 + 2 + np.random.randn(200, 1)

def regression(degree,dataset,reg_type):
    X,y =0,0
    plt.clf()
    if(dataset == "Dataset-1"): X,y,Xnew = ds1,y_ds1,np.linspace(-2, 2, 200).reshape(200, 1)
    elif(dataset == "Dataset-2"): X,y,Xnew = ds2,y_ds2,np.linspace(-3, 3, 200).reshape(200, 1)

    poly = PolynomialFeatures(degree=degree) 
    X_ = poly.fit_transform(X)

    if(reg_type == "Standard"): reg = LinearRegression().fit(X_, y)
    if(reg_type == "Ridge"): reg = Ridge().fit(X_, y)
    if(reg_type == "Lasso"): reg = Lasso().fit(X_, y)

    Xnewpoly = poly.transform(Xnew)
    ynew = reg.predict(Xnewpoly)

    plt.plot(Xnew, ynew, "r", linewidth=3, label="Predictions")
    plt.scatter(X,y,c = "b",label = "Regression Points")
    plt.title("Regression")

    img_bytes = io.BytesIO()
    plt.savefig(img_bytes, format='png')
    img_bytes.seek(0)
    return img_bytes,reg.score(X_,y)
    
def data_set(dataset):
    X,y =0,0
    if(dataset == "Dataset-1"): X,y = ds1,y_ds1
    elif(dataset == "Dataset-2"): X,y = ds2,y_ds2
    plt.clf()
    plt.scatter(X,y,c = "b",label = "Regression Points")
    plt.title("Scattered Data Set")

    img_bytes = io.BytesIO()
    plt.savefig(img_bytes, format='png')
    img_bytes.seek(0)
    return img_bytes,0
    

    