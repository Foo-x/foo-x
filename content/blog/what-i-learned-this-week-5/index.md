---
title: "今週学んだこと vimまとめ/VSCodeデバッグまとめ/他 #5"
date: "2023-04-23"
thumbnail: ../../assets/thumb/school.svg
header: header.jpg
ogp: ogp.jpg
tags:
    - vim
    - Netrw
    - VSCode
    - Docker
    - MySQL
---

## vimまとめ

### ターミナルを起動

https://github.com/Foo-x/til/blob/567840d56e2eab3b0c725e0659a5097b59fb220e/os/linux/vim/%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB%E3%82%92%E8%B5%B7%E5%8B%95.md

vimの中でターミナルを起動する方法と、便利な使い方。


### シェルコマンドの出力を挿入する

https://github.com/Foo-x/til/blob/c3cd00b20c97f5492618f8b930e9f22f90345789/os/linux/vim/%E3%82%B7%E3%82%A7%E3%83%AB%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%81%AE%E5%87%BA%E5%8A%9B%E3%82%92%E6%8C%BF%E5%85%A5%E3%81%99%E3%82%8B.md

シェルコマンドを実行してその出力を挿入する方法。


### バッファから開く

https://github.com/Foo-x/til/blob/ae794219e15add5fbaffac0391529e20e32c21d0/os/linux/vim/%E3%83%90%E3%83%83%E3%83%95%E3%82%A1%E3%81%8B%E3%82%89%E9%96%8B%E3%81%8F.md

vimを閉じるまでに開いたファイルはバッファと呼ばれる領域に保持される。
その中からもう一度開く方法。


### 履歴から開く

https://github.com/Foo-x/til/blob/ae794219e15add5fbaffac0391529e20e32c21d0/os/linux/vim/%E5%B1%A5%E6%AD%B4%E3%81%8B%E3%82%89%E9%96%8B%E3%81%8F.md

一度vimを閉じてしまうとバッファがクリアされるが、履歴は残っている。
その中からもう一度開く方法。


### 設定できる色と現在の色の一覧を表示する

https://github.com/Foo-x/til/blob/54b1e8c724df80dda8255bddb5c7392f7a1d559b/os/linux/vim/%E8%A8%AD%E5%AE%9A%E3%81%A7%E3%81%8D%E3%82%8B%E8%89%B2%E3%81%A8%E7%8F%BE%E5%9C%A8%E3%81%AE%E8%89%B2%E3%81%AE%E4%B8%80%E8%A6%A7.md

シンタックスハイライトとして設定できる色と、実際に設定されている色の一覧を表示する方法。


### リンク先にジャンプする

https://github.com/Foo-x/til/blob/17270987f994b5abf823ec8cf76ce59e66e46596/os/linux/vim/%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%AB%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%97.md

vimのヘルプなどでリンクをたどって移動する方法。


## Netrwまとめ

vimに標準で付いてくるファイラ、Netrwについて学んだことのまとめ。


### よく使うコマンド

https://github.com/Foo-x/til/blob/75360daeff384b8135bfce0df34e9c112bef8c42/os/linux/vim/netrw%E3%81%A7%E3%82%88%E3%81%8F%E4%BD%BF%E3%81%86%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89.md

よく使うコマンド、起動方法、Tipsの一覧。


### ディレクトリのコピー

https://github.com/Foo-x/til/blob/8920eb6d8f00141bbc1cb6586ccf4326eeab100a/os/linux/vim/netrw%E3%81%A7%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E3%81%AE%E3%82%B3%E3%83%94%E3%83%BC.md

Netrwでディレクトリをコピーしようとするとたまにエラーになることがある。
その回避方法。


## VSCodeデバッグまとめ

### ログポイント

https://github.com/Foo-x/til/blob/17270987f994b5abf823ec8cf76ce59e66e46596/tool/vscode/%E3%83%AD%E3%82%B0%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88.md

通常のブレークポイントはその行を実行する際に処理が止まる。
処理を止めずにログを出力するだけのログポイントについて。


### 条件付きブレークポイント

https://github.com/Foo-x/til/blob/17270987f994b5abf823ec8cf76ce59e66e46596/tool/vscode/%E6%9D%A1%E4%BB%B6%E4%BB%98%E3%81%8D%E3%83%96%E3%83%AC%E3%83%BC%E3%82%AF%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88.md

条件を満たしたときだけ処理を止める条件付きブレークポイントについて。


## DockerのMySQLイメージの初期化時に複数ディレクトリを使う

https://github.com/Foo-x/til/blob/8920eb6d8f00141bbc1cb6586ccf4326eeab100a/infra/docker/mysql/%E8%A4%87%E6%95%B0%E3%83%95%E3%82%A9%E3%83%AB%E3%83%80%E3%81%8B%E3%82%89%E5%88%9D%E6%9C%9F%E5%8C%96.md

DockerのMySQLイメージでは `/docker-entrypoint-initdb.d/` ディレクトリにSQLファイルやシェルスクリプトを置くと初期化時に実行される。
ただ、サブディレクトリは対象外。
サブディレクトリを含めて実行させる方法。
