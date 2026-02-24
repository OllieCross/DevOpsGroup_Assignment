#1. stage
FROM python:3.12-slim AS builder
#minimálny obraz python 3.12, referencia builder, ktorý sa použije v druhej fáze
WORKDIR /app
# nastavenie pracovného adresára v rámci kontejneru
RUN python -m venv /opt/venv
# vytvorenie virtuálneho prostredia pre python
ENV PATH="/opt/venv/bin:$PATH"
# pridanie virtuálneho prostredia do PATH, aby bylo možné používat nainštalované balíčky
COPY requirements.txt .
# skopirovanie zoznamu požiadaviek do pracovného adresára
RUN pip install --no-cache-dir -r requirements.txt
# nainštalovanie požiadaviek z requirements.txt bez ukladania cache

#2. stage
FROM python:3.12-slim
# znova minimalny obraz python 3.12
WORKDIR /app
# rovnaký pracovný adresár ako stage 1
COPY --from=builder /opt/venv /opt/venv
# skopírovanie venv prostredia z 1. do 2. stage
COPY . .
# skopírovanie všetkých súborov z aktuálneho adresára do pracovného adresára v kontajneri
ENV PATH="/opt/venv/bin:$PATH"
# pridanie virtuálneho prostredia do PATH, aby bylo možné používat nainštalované balíčky
ENV FLASK_APP=app.py
# určenie hlavného súboru aplikácie pre Flask
EXPOSE 5000
# otvorenie portu 5000 pre prístup k webu
CMD ["flask", "run", "--host=0.0.0.0"]
# spustenie severu na všetkých rozhraniach
