<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

-   [Simple, fast routing engine](https://laravel.com/docs/routing).
-   Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
-   Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
-   Database agnostic [schema migrations](https://laravel.com/docs/migrations).

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs)

If you don't feel like reading, [Laracasts](https://laracasts.com) can help.

<br/>
<br/>

# Boilerplate Progetto Finale

## Inizializzazione progetto

-   Clonare la repo : git clone url repo oppure download da github
-   Installare i pacchetti _PHP_ e _JS_ :
    > `composer install & npm install`
-   Generare la chiave personale:
    > `php artisan key:generate`
-   Creare il proprio file .env per le variabili di ambiente locali
-   Copiare il file .env-example nel file .env e seguire le istruzioni al suo interno
-   Eseguire il comando per pulire la cache del config

    > `php artisan config:clear`

-   Avviare server progetto e compilatore di webpack

    > `php artisan serve & npm run watch`

    (se non funzionano assieme lanciateli in due termininali diversi)

## Collegamento al database

-   Avviare XAMPP O MAMPP
-   Parametri di connessione al database:
    inserire la porta del DB, il nome del DB, utente/password [se esiste]
-   Eseguire le migrazioni:
    > `php artisan migrate`
-   [opzionale] Eseguire il seed del DB:

    > `php artisan db:seed`

    <br>

# Elenco Comandi Fondamentali

## Comandi Controller

-   Creazione controller:
    > `php artisan make:controller NomeController` **NOME AL SINGOLARE**
-   Creazione controller (CON FUNZIONI BASE CRUD) e {CREAZIONE AUTOMATICA DEL MODEL}:

    > `php artisan make:controller NomeController (-r) {-m} `<br/>

-   **Extra** Lista routes dopo crazione Controller:
    > `php artisan route:list`

<br/>

## Comandi Model

-   Crea il model :
    > `php artisan make:model NomeModel` **NOME AL SINGOLARE**

<br>

## Comandi Migrations

-   Crea una nuova tabella di nome {table-name} **NOME PLURALE**:
    > `php artisan make:migration create_{table-name}_table`
-   Aggiunge colonna (colum-name) nella table {table-name}:
    > `php artisan make:migration add_(column-name)_to_{table-name}_table --table={table-name}`
-   Esegue tutte le migrazioni non eseguite:
    > `php artisan migrate`
-   Annullamento dell'ultima batch di migrazioni:
    > `php artisan migrate:rollback`
-   Refresh del database: roolback di tutte le migrazioni e successiva migrazione di esse **ELIMINA TUTTI I DATI NEL DATABASE**:
    > `php artisan migrate:fresh`

<br>

## Comandi DataBase Seed

-   Creazione seeder:
    > `php artisan make:seeder (Table-name)TableSeeder`
-   Esegue seed specifico per la classe passata come parametro --class:
    > `php artisan db:seed --class:(Table-name)TableSeeder`
-   Seed globale del database (va settato a mano):
    > `php artisan db:seed`
