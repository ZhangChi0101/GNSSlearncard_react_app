# GNSS Vokabeltrainer mit Lernboxen (React-Anwendung)

Abschlussprojekt im React-Kurs an der Hochschule Hannover (Fakultät III – Medien, Information und Design).

## Idee und Zielsetzung
Der **GNSS Vokabeltrainer** ist eine webbasierte Lernanwendung, die sich an Studierende, Geodäsie-Interessierte und Fachkräfte richtet. Sie löst das Problem, komplexe Fachbegriffe der Satellitennavigation (wie RTK, PPP, ECEF oder PDOP) strukturiert und langfristig zu erlernen. Durch das bewährte **Leitner-Lernboxensystem** werden gewusste Begriffe in höhere Boxen einsortiert, während nicht gewusste Begriffe in Box 1 zurückkehren.

## Zielgruppe
* Studierende der Geodäsie, Geoinformatik und Vermessungswesen.
* Fachpersonal im Bereich GIS und Satellitennavigation.

## Technische Umsetzung & Architektur
Die Anwendung wurde modular mit **React** und modernen Hooks umgesetzt[cite: 13]:
* **Komponentenstruktur:**
  * `Header.tsx`: Titel und Kurzbeschreibung.
  * `ControlBar.tsx`: Suchfeld und Filter-Leiste (Boxen 1–5).
  * `AddCardForm.tsx`: Formular zum Hinzufügen neuer Vokabeln inkl. Validierung.
  * `CardList.tsx`: Container für die gefilterte Kartenliste.
  * `CardItem.tsx`: Einzelne Karte mit Umdreh-Funktion und Leitner-Logik.
* **State Management & Hooks (`useState`, `useEffect`):**
  * Verwaltung des globalen Vokabel-Arrays und Persistenz der Daten über `localStorage`.
* **Interaktive Funktionen (4 zentrale Features):**
  1. **Echtzeit-Suchfunktion:** Filtert Begriffe und Definitionen dynamisch beim Tippen.
  2. **Box-Filterung:** Gezieltes Anzeigen von Karten nach Leitner-Box (1 bis 5)].
  3. **Karten-Umschalter (Flip):** Interaktives Aufdecken der Definitionen.
  4. **Leitner-Lernlogik & Formular-Validierung:** Fortschrittsbeschleunigung bei richtiger Antwort bzw. automatischer Rücksetzmechanismus sowie Validierung neuer Einträge.

## Installation und Start
1. Repository klonen oder herunterladen.
2. Im Projektverzeichnis die Abhängigkeiten installieren:
   ```bash
   npm install