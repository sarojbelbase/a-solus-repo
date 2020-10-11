# vscode-ms

visual-studio-code binary build for [*Solus Distribution*](https://getsol.us/home/) from [*Microsoft*](https://code.visualstudio.com/)

## Why this package?

The vscode in the official Solus repo is an oss build made directly from the source. It's codenamed as `code-oss`. There are some proprietary features & APIs that are not available in that open-source version. Hence this package, with **unlimited power** for solus users.

# Getting Started

## Adding

### 1.1 Adding this Repository

```bash
sudo eopkg add-repo sidbelbase https://github.com/sidbelbase/vscode-ms/blob/master/eopkg-index.xml.xz
```


### 1.2 Installing package

```bash
sudo eopkg install vscode-ms
```

## Removing

### 2.1 Removing this package

```bash
sudo eopkg rmf vscode-ms
```

### 2.2 Removing this Repository

```bash
sudo eopkg remove-repo sidbelbase
```


Packaged with ❤️ in Nepal.