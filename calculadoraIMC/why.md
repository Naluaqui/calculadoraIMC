#include <Wire.h> // Biblioteca utilizada para fazer a comunicação com o I2C
#include <LiquidCrystal_I2C.h> // Biblioteca utilizada para fazer a comunicação com o display 20x4 

#define col 16 // Serve para definir o numero de colunas do display utilizado
#define lin  2 // Serve para definir o numero de linhas do display utilizado
#define ende  0x27 // Serve para definir o endereço do display.

LiquidCrystal_I2C lcd(ende,col,lin); // Chamada da funcação LiquidCrystal para ser usada com o I2C

byte shit[8] = {
  B00000,
  B10001,
  B00000,
  B00000,
  B01110,
  B10001,
  B00000,
};

byte smile[8] = {
  B00000,
  B10001,
  B00000,
  B00000,
  B10001,
  B01110,
  B00000,
};

byte serious[8] = {
  B00000,
  B10001,
  B00000,
  B00000,
  B11111,
  B00000,
  B00000,
};

void setup() //Incia o display
{  
  lcd.init(); // Serve para iniciar a comunicação com o display já conectado
  lcd.backlight(); // Serve para ligar a luz do display
  lcd.clear(); // Serve para limpar a tela do display
  lcd.setCursor(0,0);           
  lcd.print("Display Testing!");    
  lcd.setCursor(0,1);           
  lcd.print("Arduino LCD");
  lcd.createChar(0, shit);
  lcd.createChar(1, smile);
  lcd.createChar(2, serious);
}
void loop() 
{
  delay(1000);
  lcd.noDisplay();
  delay(500);
  lcd.display();
  lcd.setCursor(15, 1);  
  lcd.write(byte(0));
  delay(1500);
  lcd.setCursor(15, 1);  
  lcd.write(byte(1));
  delay(1500);
  lcd.setCursor(15, 1);  
  lcd.write(byte(2));
}