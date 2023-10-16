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
import serial

print("Beginning Realtime Marine Tracking...")

ser = serial.Serial('/dev/ttyACM0', 9600)
ser.flush()

while True:
    
    waterLevel = 0
    
    if ser.in_waiting > 0:
        waterLevel = int(ser.readline().decode('utf-8').rstrip())
    
    humidity = -1;
    temperature = -99999;
    humidity, temperature = Adafruit_DHT.read_retry(11, 4)
    dictionary = {
    "temp" : temperature,
    "humidity" : humidity,
    "waterLevel" : waterLevel
    }
    
    with open("data.json", "w") as outfile:
        json.dump(dictionary, outfile)
    
    # print('Temp: {0:0.1f} C  Humidity: {1:0.1f} % Water Level:{0:0.1f}'.format(temperature, humidity, waterLevel))
    print(f'Temp: {temperature} C  Humidity: {humidity} % Water Level:{waterLevel}')
