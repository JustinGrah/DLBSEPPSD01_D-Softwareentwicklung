# Wie wird die Datenbank installiert?

```sql
CREATE TABLE betreuungseinsatz (
    einsatz_id INT PRIMARY KEY,
    bezeichnung VARCHAR(255),
    beginn DATETIME,
    ende DATETIME
);

CREATE TABLE betroffene_person (
    person_id INT PRIMARY KEY,
    einsatz_id INT,
    interne_kennung VARCHAR(255),
    vorname VARCHAR(255),
    nachname VARCHAR(255),
    erstellt_am DATETIME,
    CONSTRAINT fk_einsatz 
        FOREIGN KEY (einsatz_id) 
        REFERENCES betreuungseinsatz(einsatz_id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

CREATE TABLE transport (
    transport_id INT PRIMARY KEY,
    person_id INT,
    zielort VARCHAR(255),
    kennzeichen VARCHAR(255),
    einstieg DATETIME,
    ausstieg DATETIME,
    CONSTRAINT fk_transport_person 
        FOREIGN KEY (person_id) 
        REFERENCES betroffene_person(person_id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

CREATE TABLE essensmarke (
    marke_id INT PRIMARY KEY,
    person_id INT,
    mahlzeit VARCHAR(255),
    ausgabe DATETIME,
    CONSTRAINT fk_essensmarke_person 
        FOREIGN KEY (person_id) 
        REFERENCES betroffene_person(person_id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);
```
