/* -----------------------------------------
   BUTTON: Weiterleitung & Hover-Effekte
----------------------------------------- */

const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {
    registerBtn.addEventListener("click", function () {
        window.location.href = "goforit.html";
    });

    registerBtn.addEventListener("mouseover", function () {
        this.style.backgroundColor = "#19e765";
    });

    registerBtn.addEventListener("mouseout", function () {
        this.style.backgroundColor = "#af5117";
    });
}


/* -----------------------------------------
   FORMULAR: Anmeldung
----------------------------------------- */

const form = document.getElementById("goforitForm");
const teilnehmerListe = [];
const maxTeilnehmer = 12;

if (form) {

    // Formular absenden
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const teilnehmerAnzahl = parseInt(document.getElementById("number-of-participants").value);

        // Teilnehmer zur Liste hinzufügen
        for (let i = 0; i < teilnehmerAnzahl; i++) {
            teilnehmerListe.push(name);
        }

        // Check: maximale Teilnehmerzahl erreicht?
        if (teilnehmerListe.length > maxTeilnehmer) {
            alert(
                "Die maximale Teilnehmerzahl von " + maxTeilnehmer +
                " ist erreicht. Es sind keine weiteren Anmeldungen möglich.\n" +
                "Du kannst dich auf die Warteliste setzen lassen – schreib mir eine E-Mail."
            );
            return;
        }

        alert("Danke für deine Anmeldung, " + name + "! Wir freuen uns, dass Du dabei bist.");
    });

    // Formular zurücksetzen
    form.addEventListener("reset", function () {
        alert("Neue Eingabe.");
    });
}


/* -----------------------------------------
   INPUT: Teilnehmeranzahl validieren
----------------------------------------- */

const teilnehmerInput = document.getElementById("number-of-participants");

if (teilnehmerInput) {
    teilnehmerInput.addEventListener("input", function () {
        if (this.value < 1) {
            this.value = 1;
        }
        else if (this.value == 0) {
        alert("Bitte gib eine gültige Teilnehmeranzahl ein.");
        }
    });
}


/* -----------------------------------------
   NOTIZEN FÜR WEITERE FEATURES
-----------------------------------------

- Eingaben:
    • keine negativen Zahlen bei Teilnehmeranzahl erlauben (✔ eingebaut)
    • nur Zahlen akzeptieren
    • Validierung der E-Mail-Adresse einbauen

- Bestätigungsmeldung:
    • nach erfolgreicher Anmeldung
    • Hinweis: Anzahlung kommt zur Anwendung
    • Teilnahme bestätigen, Storno-Regeln erklären

- Wartelistenfunktion:
    • wenn maximale Teilnehmerzahl erreicht ist

- Validierung:
    • Namen: keine Sonderzeichen, nur Buchstaben + Leerzeichen
    • Altersbeschränkung: mind. 18 Jahre (Jugendschutz)

- Termine:
    • 3 Termine anbieten
    • Möglichkeit für Anmeldung zu 2 Seminaren → 10% Rabatt
    • Deadline: 2 Wochen vor Event

- Backend:
    • Node.js zum Auslesen & Weiterverarbeiten

- Hinweise:
    • Hygiene, Datenschutz, geistige & körperliche Gesundheit
    • Bei Absage: Gutschrift für nächstes Event, keine Rückerstattung

- Zusatzfragen:
    • Erfahrung, Motivation, Alter
    • Bei Unsicherheit: Rückfragen, kurzes Telefonat (Vorabcheck)
    • Optional: Live-Call via Zoom

- Nach dem Event:
    • Zertifikat ausstellen
    • Marketingartikel: Schirme, Sporttaschen, Mousepads …

----------------------------------------- */