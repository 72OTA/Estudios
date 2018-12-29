from sklearn import tree

#[alto,ancho,n° calzado]
X = [[181,80,44],[177,70,43],[160,60,38],[154,54,37],[166,65,39],[190,90,47],[175,75,43],[175,60,37],[171,75,45],[155,55,36]]

Y = ['Hombre','Hombre','Mujer','Mujer','Mujer','Hombre','Hombre','Mujer','Hombre','Mujer']

clf = tree.DecisionTreeClassifier()

clf = clf.fit(X,Y)
while 1<2:
    print("Si desea salir ingrese ingrese el numero 9, de otra manera presione enter.")
    opcion = input()
    if opcion!="9":
        altura = int(input("Ingrese su altura: "))
        peso = int(input(f"Ingrese su peso: "))
        calzado = int(input(f"Ingrese su numero de calzado: "))
        prediccion = clf.predict([[altura,peso,calzado]])
        print ("Es probable que usted sea: "+ str(prediccion))
    else:
        exit()
