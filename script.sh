
#llamar a WEKA
export CLASSPATH=/c/program\ Files/Weka-3-8-4/weka.jar:.

java weka.classifiers.trees.J48 -T /c/Users/joelaldairchantec/Desktop/IONIC/PROYECTO/DOS/servidorREST/mushroom_predict.arff -l /c/Users/joelaldairchantec/Desktop/IONIC/PROYECTO/DOS/servidorREST/model-mushroom.model -p 0
#procesar la salida para quedarse con el resultado (head,tail,grep)

resultat=""
echo $resultat
