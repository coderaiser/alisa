# Alisa

Crossplatform aliases.

## Install

```
npm i alisa-io -g
```

## How to use?

```
alisa --win=dir --linux=ls --darwin=ls --sunos=ls
```

In `~/.bash_profile`:
```
alias ls='alisa --win=dir --linux="ls --color" --darwin="ls -G"'
```

And then `source ~/.bash_profile`.

## License

MIT
