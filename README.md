# Sherlock api

## Versions

* ***0.1.0***
    * Настройка wi4er/groot в докере
        * init базы данных
        * запись в docker-compose.yml
    * Добавление библиотеки axios
    * Добавление функции fetchContent
        * Получение списка записей

* ***0.2.0***
    * Добавление библиотеки lunr
    * Добавление функции createIndex
        * Индексация полученных описаний
    * Добавление функции searchInList
        * поиск по одному слову в описаниях

* ***0.3.0***
    * Добавить ендпоинт ```/search/```
        * поиск по подключенному сервису
    * Добавить переменную окружения ```PERMISSION_GROUPS```
        * Определяет список групп имеющих доступ к поиску

* ***0.4.0***
    * Добавить переменную окружения ```REINDEX_INTERVAL```
        * определяет частоту пересоздания индексов
        * измеряется в миллисекундах
        * по умолчанию 30000
