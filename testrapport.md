# Testplan och Testspecifikation

## Målbeskrivning

Målet med detta dokument är att skapa överblick över testningen i projektet och sedan dokumentera de enskilda testerna.

## Vad kommer testas och hur?

**Testplan - De olika delarna av applikationen som ska testas**
- Testrapport : [Test av kravspecifikation.](https://github.com/dc222bz/1DV610-Laboration2/blob/main/kravspecifikation.md)

**Testsvit - Test av olika korrekta/ felaktiga inputs.** 
- Testfall 1 (TC1) - Man följer applikationens instruktioner.
- Testfall 2 (TC2) - Man försöker att utföra felaktiga inputs.

## Manuell testning

Matris för att visa vilka krav som täcks av vilka manuella testfall.

| Testfall 1| Result |
| --------- |:----:|
| TC1.1     | OK    | 
| TC1.2     | OK    |
| TC1.3     | Ok    |
| TC1.4     | OK    |
| TC1.5     | OK    |
| TC1.6     | OK    |
| TC1.7     | OK    |
| TC1.8     | OK    |
| TC1.9     | OK    |
| TC1.10    | OK    |
| TC1.11    | OK    |

| Testfall 2| Result|
| --------- |:----:|
| TC2.1     | OK    | 
| TC2.2     | OK    |
| TC2.3     | OK    |
| TC2.4     | OK    |

-----------------------
**Testfall 1**
-----------------------
**TC1.1 - [Krav 1.0](https://github.com/dc222bz/1DV610-Laboration2/blob/main/kravspecifikation.md) - Användarna ska kunna mata in sin längd via en textruta.**

**Input:**
1. Anslut till applikationen, [https://calories-counter.netlify.app/](https://calories-counter.netlify.app/)
2. Mata in 180 i textrutan med texten "Enter Ur Height".

**Output:**
1. Användaren ansluts till applikationen.
2. Användaren har matat in värdet 180, för sin längd i applikationen.

**TC1.2 - [Krav 2.0](https://github.com/dc222bz/1DV610-Laboration2/blob/main/kravspecifikation.md) - Användarna ska kunna mata in sin vikt via en textruta.**

**Input:**
1. Anslut till applikationen, [https://calories-counter.netlify.app/](https://calories-counter.netlify.app/)
2. Mata in 100 i textrutan med texten "Enter Ur Weight".

**Output:**
1. Användaren ansluts till applikationen.
2. Användaren har matat in värdet 100, för sin vikt i applikationen.

**TC1.3 - [Krav 3.0](https://github.com/dc222bz/1DV610-Laboration2/blob/main/kravspecifikation.md) - Användarna ska kunna mata in sin ålder via en textruta.**

**Input:**
1. Anslut till applikationen, [https://calories-counter.netlify.app/](https://calories-counter.netlify.app/)
2. Mata in 38 i textrutan med texten "Enter Ur Age".

**Output:**
1. Användaren ansluts till applikationen.
2. Användaren har matat in värdet 38, för sin ålder i applikationen.

**TC1.4 - [Krav 4.0](https://github.com/dc222bz/1DV610-Laboration2/blob/main/kravspecifikation.md) - Användarna ska kunna välja in sitt kön via en dropdown-lista.**

**Input:**
1. Anslut till applikationen, [https://calories-counter.netlify.app/](https://calories-counter.netlify.app/)
2. Välj Male via en dropdown-meny för "Sex".

**Output:**
1. Användaren ansluts till applikationen.
2. Användaren har matat in värdet Male, för sin ålder i applikationen.

**TC1.5 - [Krav 5.0](https://github.com/dc222bz/1DV610-Laboration2/blob/main/kravspecifikation.md) - Användarna ska kunna välja in sin aktivitetsnivå via en dropdown-lista.**

**Input:**
1. Anslut till applikationen, [https://calories-counter.netlify.app/](https://calories-counter.netlify.app/)
2. Välj Moderate (2-3 per week) via dropdown-meny för "ActivityLevel".

**Output:**
1. Användaren ansluts till applikationen.
2. Användaren har matat in värdet Moderate (2-3 per week), för sin aktivitetsnivå i applikationen.

**TC1.6 - [Krav 6.0](https://github.com/dc222bz/1DV610-Laboration2/blob/main/kravspecifikation.md) - Användarna ska kunna beräkna sin Basal Metabolic Rate per dag.**

**Input:**
1. Anslut till applikationen, [https://calories-counter.netlify.app/](https://calories-counter.netlify.app/)
2. Utför TC1.1, TC1.2, TC1.3, TC1.4 och TC1.5.
3. Tryck på knappen "Save Inputs".

**Output:**
1. Användaren ansluts till applikationen.
2. Användaren har utfört alla tidigare steg för applikationen.
3. Applikationen presenterar värdet 1940, för Basal Metabolic Rate per dag.

**TC1.7 - [Krav 7.0](https://github.com/dc222bz/1DV610-Laboration2/blob/main/kravspecifikation.md) - Användarna ska kunna beräkna sin Maintenance Calories per dag.**

**Input:**
1. Anslut till applikationen, [https://calories-counter.netlify.app/](https://calories-counter.netlify.app/)
2. Utför TC1.1, TC1.2, TC1.3, TC1.4 och TC1.5.
3. Tryck på knappen "Save Inputs".

**Output:**
1. Användaren ansluts till applikationen.
2. Användaren har utfört alla tidigare steg för applikationen.
3. Applikationen presenterar värdet 3104, för Maintenance Calories per dag.

**TC1.8 - [Krav 8.0](https://github.com/dc222bz/1DV610-Laboration2/blob/main/kravspecifikation.md) - Användarna ska kunna beräkna deras kaloribehov på vekobas.**

**Input:**
1. Anslut till applikationen, [https://calories-counter.netlify.app/](https://calories-counter.netlify.app/)
2. Utför TC1.1, TC1.2, TC1.3, TC1.4 och TC1.5.
3. Tryck på knappen "Save Inputs".

**Output:**
1. Användaren ansluts till applikationen.
2. Användaren har utfört alla tidigare steg för applikationen.
3. Applikationen presenterar värdet 21728, för Total Maintenance Calories per vecka.

**TC1.9 - [Krav 9.0](https://github.com/dc222bz/1DV610-Laboration2/blob/main/kravspecifikation.md) - Användarna ska kunna mata in tiden som en träning håller på.**

**Input:**
1. Anslut till applikationen, [https://calories-counter.netlify.app/](https://calories-counter.netlify.app/)
2. Utför TC1.1, TC1.2, TC1.3, TC1.4, TC1.5 och TC1.6.
3. Mata in värdet 60 i textrutan med "Enter The Time"

**Output:**
1. Användaren ansluts till applikationen.
2. Användaren har utfört alla tidigare steg för applikationen.
3. Användaren har matat in värdet 60, för tiden till en träningsaktivitet i applikationen.

**TC1.10 - [Krav 10.0](https://github.com/dc222bz/1DV610-Laboration2/blob/main/kravspecifikation.md) - Användarna ska kunna välja en träning aktivitet från en lista.**

**Input:**
1. Anslut till applikationen, [https://calories-counter.netlify.app/](https://calories-counter.netlify.app/)
2. Utför TC1.1, TC1.2, TC1.3, TC1.4, TC1.5 och TC1.6.
3. Välj Golf via en dropdown-meny för "Exercise".

**Output:**
1. Användaren ansluts till applikationen.
2. Användaren har utfört alla tidigare steg för applikationen.
3. Användaren har matat in värdet Golf, för sin Exercise i applikationen.

**TC1.11 - [Krav 11.0](https://github.com/dc222bz/1DV610-Laboration2/blob/main/kravspecifikation.md) - Användarna ska kunna uppdatera sitt kaloribehov på vekobas med kaloribehovet för en träningaktivitet.**

**Input:**
1. Anslut till applikationen, [https://calories-counter.netlify.app/](https://calories-counter.netlify.app/)
2. Utför TC1.1, TC1.2, TC1.3, TC1.4, TC1.5, TC1.6, TC1.9 och TC1.10.
3. Tryck på knappen "Calculate Burned Calories"

**Output:**
1. Användaren ansluts till applikationen.
2. Användaren har utfört alla tidigare steg för applikationen.
3. Applikationen presenterar värdet 22095.5, för Total Maintenance Calories per vecka.

**TC1.12 - [Krav 12.0](https://github.com/dc222bz/1DV610-Laboration2/blob/main/kravspecifikation.md) - Användarna ska kunna återställa all data i applikationen.**

**Input:**
1. Anslut till applikationen, [https://calories-counter.netlify.app/](https://calories-counter.netlify.app/)
2. Tryck på knappen "Reset Inputs"

**Output:**
1. Användaren ansluts till applikationen.
2. Användaren har återställt alla parametrar för applikationen.

-----------------------
**Testfall 2**
-----------------------
**TC2.1 - [Krav 1.0](https://github.com/dc222bz/1DV610-Laboration2/blob/main/kravspecifikation.md) - Användarna försöker mata in felaktig längd via en textruta.**

**Input:**
1. Anslut till applikationen, [https://calories-counter.netlify.app/](https://calories-counter.netlify.app/)
2. Mata in NaN i textrutan med texten "Enter Ur Height".
3. Tryck på knappen "Save Inputs".

**Output:**
1. Användaren ansluts till applikationen.
2. Användaren har matat in ett felaktigt värde för längd i applikationen.
3. Applikationen presenterar ett alert-window med "Error: Invalid Height"

**TC2.2 - [Krav 2.0](https://github.com/dc222bz/1DV610-Laboration2/blob/main/kravspecifikation.md) - Användarna försöker mata in felaktig vikt via en textruta.**

**Input:**
1. Anslut till applikationen, [https://calories-counter.netlify.app/](https://calories-counter.netlify.app/)
2. Utför TC1.1.
3. Mata in NaN i textrutan med texten "Enter Ur Weight".
4. Tryck på knappen "Save Inputs".

**Output:**
1. Användaren ansluts till applikationen.
2. Användaren har utfört alla tidigare steg för applikationen.
3. Användaren har matat in ett felaktigt värde för vikt i applikationen.
4. Applikationen presenterar ett alert-window med "Error: Invalid Weight"

**TC2.3 - [Krav 3.0](https://github.com/dc222bz/1DV610-Laboration2/blob/main/kravspecifikation.md) - Användarna försöker mata in felaktig ålder via en textruta.**

**Input:**
1. Anslut till applikationen, [https://calories-counter.netlify.app/](https://calories-counter.netlify.app/)
2. Utför TC1.1 och TC1.2.
3. Mata in NaN i textrutan med texten "Enter Ur Age".
4. Tryck på knappen "Save Inputs".

**Output:**
1. Användaren ansluts till applikationen.
2. Användaren har utfört alla tidigare steg för applikationen.
3. Användaren har matat in ett felaktigt värde för ålder i applikationen.
4. Applikationen presenterar ett alert-window med "Error: Invalid Age"

**TC2.4 - [Krav 4.0](https://github.com/dc222bz/1DV610-Laboration2/blob/main/kravspecifikation.md) - Användarna försöker mata felaktig tid som en träning håller på.**

**Input:**
1. Anslut till applikationen, [https://calories-counter.netlify.app/](https://calories-counter.netlify.app/)
2. Utför TC1.1, TC1.2, TC1.3, TC1.4, TC1.5 och TC1.6.
3. Mata in NaN i textrutan med texten "Enter The Time".
4. Tryck på knappen "Save Inputs".

**Output:**
1. Användaren ansluts till applikationen.
2. Användaren har utfört alla tidigare steg för applikationen.
3. Användaren har matat in ett felaktigt värde för tiden i applikationen.
4. Applikationen presenterar ett alert-window med "Error: Invalid Time"