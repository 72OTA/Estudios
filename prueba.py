from sklearn import tree
import sys
# -*- coding: utf-8 -*-
# [PESO, TEXTURA(0=SUAVE,1=DESIGUAL)]
features = [[140,1],[110,0],[100,0],[150,1],[170,1],[160,1],[90,0],[150,1],[105,0],[145,1],[155,1],[110,0],[101,0],[165,1],[177,1],[99,0]]
#MANZANA = 0 , NARANJA = 1
labels= [1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0]
clf = tree.DecisionTreeClassifier()
clf = clf.fit(features,labels)
while 1<2:
    print("Si desea salir ingrese ingrese el numero 9, de otra manera presione enter.")
    opcion = input()
    if opcion!="9":
        peso = int(input("Ingrese el peso de su fruta: "))
        textura = int(input(f"Ingrese la textura de la fruta con numeros(0:'Suave',1:'Desigual'): "))
        respuesta = clf.predict([[peso,textura]])
        if respuesta==[1]:
            respuesta = "NARANJA"
        else:
            respuesta = "MANZANA"
        print (respuesta)
    else:
        sys.exit()