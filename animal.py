from sklearn import tree

#[patas,peso,sonido]
X = [[1,1,1],[1,1,1],[0,0,0],[0,0,0],[0,1,0],[1,1,1],[1,1,1],[1,1,0],[1,1,1],[1,0,0]]

Y = ['Cerdo','Cerdo','Perro','Perro','Perro','Cerdo','Cerdo','Perro','Cerdo','Perro']

clf = tree.DecisionTreeClassifier()

clf = clf.fit(X,Y)
while 1<2:
    print("Si desea salir ingrese ingrese el numero 9, de otra manera presione enter.")
    opcion = input()
    if opcion!="9":
        patas = int(input("Patas Cortas(1), Largas(0): "))
        peso = int(input(f"Peso Gordo(1), Flaco(0): "))
        sonido = int(input(f"Sonido Oink Oink(1), Guau Guau(0): "))
        prediccion = clf.predict([[patas,peso,sonido]])
        print ("Es probable que el animal sea: "+ str(prediccion))
    else:
        exit()
