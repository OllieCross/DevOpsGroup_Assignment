# Task B - Dockerize a Python Web App

Zadanie zahŕňa vytvorenie jednoduchej Python web appky `app.py` pomocou knižnice Flask. Cieľom je vytvoriť čo najefektívnejší a bezpečný Dockerimage využívajúci multi-stage build a otvorenie portu pre prístup návštevníkov web appky.

Dockerimage je rozdelený na dve časti pre zabezpečenie malého a efektívneho imageu a aby výsledný image neobsahoval zbytočné nástroje, ktoré sú potrebné len pri inštalácii.

Stage 1. (Builder) Používa `python:3.12-slim`. Vytvorí virtuálne prostredie `(/opt/venv)` a nainštaluje všetky závislosti zo súboru `requirements.txt`.

Stage 2. (Runtime) Opäť používa čistý `python:3.12-slim`. Z prvej fázy sa skopíruje iba hotové virtuálne prostredie. Týmto sa výrazne znižuje veľkosť výsledného obrazu a zvyšuje bezpečnosť. V produkcii tým pádom nie sú prítomné prebytočné knižnice ktoré môžu predstavovať potencionálne bezpečnostné riziko.

Súbor `docker-compose.yml` zjednodušuje lokálne spúšťanie aplikácie:

- Mapuje port `5000` z kontajnera na port `5000` hostiteľského stroja.
- Nastavuje premenné prostredia ako `FLASK_DEBUG=1` pre rýchlejší vývoj.
- Zabezpečuje automatický reštart kontajnera v prípade zlyhania `(restart: always)`.

Počiatočný Docker Compose proces vytvorenia kontaineru
![screenshot1](./imgs/screenshot1.png)
Kontrola logov spusteného kontaineru
![screenshot2](./imgs/screenshot2.png)
Rýchla kontrola funkcionality webu v termináli
![screenshot3](./imgs/screenshot3.png)
Povolenie portu 5000 na serverovom firewalle (tu by stačilo iba TCP kedže používame HTTP protokol)
![screenshot4](./imgs/screenshot4.png)
Prístup na webstránku cez prehliadač
![screenshot5](./imgs/screenshot5.png)
