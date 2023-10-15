#!/usr/bin/python

#
#
# sudo apt-get install git-core

# git clone https://github.com/adafruit/Adafruit_Python_DHT.git

# sudo apt-get install build-essential python-dev

# sudo python setup.py install
#
#
import sys
import Adafruit_DHT
import json

print("Beginning Realtime Marine Tracking...")

while True:
    
    humidity, temperature = Adafruit_DHT.read_retry(11, 4)

    dictionary = {
    "temp" : temperature,
    "humidity" : humidity
    }
    
    with open("data.json", "w") as outfile:
        json.dump(dictionary, outfile)
    
    print('Temp: {0:0.1f} C  Humidity: {1:0.1f} %'.format(temperature, humidity))
