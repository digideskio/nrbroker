# nrbroker
Simple Mosca MQTT broker in a container. 

 - It exposes port 1883.
 - It has no database backup, purely runs in memory.

to build locally     

    dockerbuild -t moscabroker .

to run locally

    docker run -it --name mybroker moscabroker

also available via Docker Registry

    docker run -it --name mybroker theceejay/nrdocker
