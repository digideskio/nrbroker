# nrbroker
Simple Mosca MQTT broker in a container. 

 - It exposes port 1883.
 - It has no database backup, purely runs in memory.


to build ....     

    dockerbuild -t moscabroker .

to run ...

    docker run -it --name mybroker moscabroker
