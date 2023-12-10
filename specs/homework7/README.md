## Домашнее задание 7
### API тесты с использованием контроллеров

Описание/Пошаговая инструкция выполнения домашнего задания:
### Задание 1
В этом задании есть два варианта, выберете, тот, что вам больше подходит. В любом случае при выполнении ДЗ обязательно использовать контроллер(ы), а так же файлы конфигурации.

Вариант 1.
Напишите API тесты на следующие апи ручки (api endpoints):
* Авторизация
* Удаление пользователя
* Получение информации о пользователе

При написании АПИ-тестов обязательно использовать контроллеры, так же вынести в конфиг данные для авторизации, базовый УРЛ.
Будет плюсом, если так же вы отрефакторите тесты написанные в рамках ДЗ АПИ тесты

Вариант 2. Напишите 5 апи-тестов на любой сервис имеющий публичное АПИ, можно использовать АПИ рабочего проекта.
При написании АПИ-тестов обязательно использовать контроллеры, вынести в конфиг как минимум базовый УРЛ.

### Задание 2 (не обязательное)
Данные в файле конфигурации доставайте из переменных окружения.

Для проверки (ревью) домашнего задания присылайте в чат ссылку на pull request

### Рекомендуемая структура проекта начиная с этого ДЗ:

- src // исходный код проекта, опциональная папка, если проект написан на JS и тесты хранятся в одном репозитории с исходным кодом проекта
- specs // папка с тестами
- framework // тестовый фреймворк
- framework/services // контроллеры, обёртка запросов к API
- framework/config // базовый урл, логин / пароль, токен авторизации
- framework/fixtures // слой с фикстурами, генераторами данных для тестов