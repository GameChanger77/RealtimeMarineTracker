

int adc_id = 0;
char printBuffer[128];

void setup()
{
  Serial.begin(9600);
}

void loop()
{
    int value = analogRead(adc_id); // get adc value

    sprintf(printBuffer,"%d\n", value);
    Serial.print(printBuffer);
    delay(600);
}
