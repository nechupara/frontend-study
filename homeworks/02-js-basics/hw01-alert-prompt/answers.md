1. var и let различаются областью видимости. var имеет глобальную область видимости и может быть скрыта только внутри функции, а let имеет блочную область видимости, т.е. может быть скрыта в любом блоке (в фигурных скобках). Также нельзя обратиться к переменной, объявленной через let до её объявления, а переменные var подниматся как бы вверх, правда со значением undefined, т.е. к ним можно обратиться до их объявления.
Переменные const похожи на let с той лишь разницей, что их значение нельзя менять в дальнейшем.

2. Объявлять переменную через var считается плохим тоном потому, что легко не заметить ошибку в коде. К такой переменной можно обратиться до её объявления, одну и ту же переменную (с одинаковым именем) можно заново объявлять с ключевым словом var много раз, что также может привести к ошибке в логике программы, можно случайно переопределить уже существующую переменную и не заметить этого. Также из-за глобальной видимости таких переменных при работе с циклами и прочими блоками (кроме функций) можно получать доступ к таким переменным из внешних областей видимости, что также может привести к нежелательным результатам.