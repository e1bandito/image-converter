# image-converter

Простой шаблон для сжатия и конвертации изображений в 2x и webp.

## Установка

```
npm i
```

## Использование

В папку img помещаются исходники графики в максимальном разрешении, форматы jpg или png.

Команды:

---

Процесс конвертации запускается командой

```
gulp convert --desktop 1000
```

в которой:

- **gulp convert** имя запускаемой таски
- **--desktop** суффикс, который будет добавлен к имени исходного файла(обязательно с двумя тире **--** в начале)
- **1000** желаемое разрешение графики в пикселях по горизонтали на выходе для **не retina** экранов

_Пример_:

Исходный файл называется **1.jpg**

После выполнения команды **gulp convert --desktop 1000** в папке output получим четыре файла **1-desktop.jpg**, **1-desktop.webp**, **1-desktop@2x.jpg** и **1-desktop@2x.webp** шириной по горизонтали **1000px** для версий без суффикса **@2x** и **2000px** с суффиксом **@2x**, соотношение ширины и высоты сохранятся.

---

Очищает папки **img** и **output**

```
gulp clean
```

Очищает только папку **img**

```
gulp clean:img
```

Очищает только папку **output**

```
gulp clean:output
```