# Arcade Markdown syntax

> Arcade works with Showdown's markdown parser. But for Arcade we've added extensions to make the pages easier to write and more beautiful. Here's how to use the new syntax.

---

## customBlockQuote

```md
:::settings Quote title
write your text here
:::
```
### It looks like this :

:::settings Quote title
write your text here
:::

### List of available parameters :

- note 
- info
- warning
- bug
- quote
- check
- example
- settings
- default

---

## coloredText

```md
:color{Your text}
```
### It looks like this :

:purple{Your text}

#### You can combine this with other extensions or with the default syntax :

```md
:color{**Your text**}
```

:purple{**Your text**}

or

:purple{*Your text*}

---

## highlighter

```md
==Your text==
```
### It looks like this :

==yellow==

#### But you can also choose the color like this :

```md
==color{Your Text}
```
==green{green}

---

## expandable

```md
[exp]
[title]
Your title on the first line
[/title]
Your text here
[/exp]
```
### It looks like this :

[exp]
[title]
Your title on the first line
[/title]
Your text here
[/exp]