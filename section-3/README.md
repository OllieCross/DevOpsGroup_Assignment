# Task A - Production went down

## "App is down in production - what do you do first?"

- Ako prvé by som sa uistil, či je aplikácia alebo služba naozaj dole otestovaním na iných zariadeniach, inej sieti alebo u kolegov.
- Ďalej by som skontroloval monitorovacie alebo alert systémy ako napríklad Grafana alebo CloudWatch.
- Zistil by som rozsah problému t.j. napríklad či je dole iba API alebo len DB alebo celý stack resp. viacero služieb/komponentov, ktoré spolupracujú
- Skontroloval by som históriu commitov na GitHube/GitLabe ako aj históriu deploymentov a logy CI/CD pipelines na nástroji ako napríklad Jenkins t.j. či build bol úspešný, či prebehol testami úspešne a či bol dobre deploynutý.
- Pozriem logy aplikácie a infraštruktúry so zameraním na error a warning výpisy typu connection error, network error, database error, OOM error a pod. v čase výpadku.
- Ak všetko nasvedčuje tomu, že problém spôsobilo posledný deployment, navrhnem/urobím rollback na poslednú stabilnú verziu.
- Ak si neviem rady, eskalujem incident na senior DevOps engineera a stručne zhrniem čo sa stalo a čo som dokázal zistiť.
- Informujem zodpovedných ako napr. product ownera alebo support o tom, že je incident, a že sa rieši. Ak daná aplikácia alebo služba používa status page, navrhnem jej aktualizáciu.
