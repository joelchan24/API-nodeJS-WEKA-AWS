#llamar a WEKA

export CLASSPATH=/usr/share/java/weka.jar:.

java weka.classifiers.trees.J48 -T /home/ubuntu/proyecto/API-nodeJS-WEKA-AWS/mushroom_predict.arff -l /home/ubuntu/proyecto/API-nodeJS-WEKA-AWS/model-mushroom.model -p 0

#procesar la salida para quedarse con el resultado (head,tail,grep)

resultat=""
echo $resultat
