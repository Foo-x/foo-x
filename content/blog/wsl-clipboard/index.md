---
title: WSLで絵文字を含む文字列をクリップボードにコピーする
date: "2023-12-03"
thumbnail: ../../assets/thumb/clipboard.svg
header: header.jpg
ogp: ogp.jpg
tags:
    - WSL
    - Powershell
---

WSLからWindowsのクリップボードにコピーする方法を試行錯誤したのでまとめ。

## 結論

```sh
alias pbcopy="iconv -t utf16 | tail -c +3 | clip.exe"
```

もしくは

```sh
alias pbcopy="powershell.exe -command '[Console]::InputEncoding = [System.Text.Encoding]::UTF8; \$reader = [System.IO.StreamReader]::new([System.IO.Stream]::Synchronized([System.Console]::OpenStandardInput())); \$reader.ReadToEnd() | Set-Clipboard'"
```


## 過程

### `clip.exe` を使う方法

・`clip.exe`

検索して最初に出てくる方法。
最も簡単だが、日本語が文字化けする。

・`iconv -t sjis | clip.exe`

日本語は問題ないが、`～` や `①` のような拡張文字が文字化けする。

・`iconv -t cp932 | clip.exe`

日本語も拡張文字も問題ないが、絵文字が含まれるとエラーになる。

・`iconv -t utf16 | clip.exe`

日本語、拡張文字、絵文字すべてコピーできるが、先頭に BOM (U+FEFF) が付与されてしまう。

・`iconv -t utf16 | tail -c +3 | clip.exe`

BOMを除くことで解決。


### Powershellの `Set-Clipboard` を使う方法

・`powershell.exe -command 'Read-Host | Set-Clipboard'`

日本語が文字化けする。

・`powershell.exe -command '[Console]::InputEncoding = [System.Text.Encoding]::UTF8; Read-Host | Set-Clipboard'`

日本語、拡張文字、絵文字すべてコピーできるが、改行が含まれると1行目しかコピーされない。

・`powershell.exe -command '[Console]::InputEncoding = [System.Text.Encoding]::UTF8; $reader = [System.IO.StreamReader]::new([System.IO.Stream]::Synchronized([System.Console]::OpenStandardInput())); $reader.ReadToEnd() | Set-Clipboard'`

改行も含めて解決。

なお、「結論」で `$` をエスケープしているのはシェルの変数として展開されないようにするため。
したがって、

```sh
alias pbcopy='powershell.exe -command '\''[Console]::InputEncoding = [System.Text.Encoding]::UTF8; $reader = [System.IO.StreamReader]::new([System.IO.Stream]::Synchronized([System.Console]::OpenStandardInput())); $reader.ReadToEnd() | Set-Clipboard'\'
```

としても良い。


## クリップボードからの出力

クリップボードからの出力は `clip.exe` ではできないので、Powershellの `Get-Clipboard` を使う。

```sh
alias pbpaste="powershell.exe -command '[Console]::OutputEncoding = [System.Text.Encoding]::UTF8; Get-Clipboard'"
```
