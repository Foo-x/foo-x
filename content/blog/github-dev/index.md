---
title: github.dev が便利
date: "2021-10-26"
thumbnail: ../../assets/thumb/github.svg
header: header.jpg
ogp: ogp.jpg
tags:
    - GitHub
    - VSCode
---

今年の8月に [GitHub Codespaces](https://github.com/features/codespaces) がリリースされましたね。
GitHub上のクラウド開発環境で、AWSのCloud9と同じようなものです。
ただ現時点では、有料アカウントでしか使用できない上に、従量制で発生する別料金がAWSより若干高めなので、個人では手が出しにくい印象です。

ここまで調べて「Codespacesはしばらく使わないかなー」で終わっていたのですが、同時に [github.dev](https://github.com/github/dev) もリリースされていたことを最近知りました。
この記事ではそちらについてまとめます。


## 概要

`github.dev` はリポジトリをブラウザ上のVSCodeで開く機能です。
`web-based editor` とも言うようです。
`vscode.dev` と `github.dev` をまとめて `VSCode for the Web` と呼ぶこともあります。

GitHubにサインインし、リポジトリを開いている状態でキーボードの `.` を押すとブラウザ上のVSCodeが起動します。
アクセス権があればプライベートリポジトリでもいけます。

対応しているページはトップ・フォルダ・ファイル・プルリクエストです。
Issueでは起動できませんが、上のページで起動した後に参照することは可能です。

URLの `github.com` を `github.dev` にしてもOKです。
ブックマークレットを作ってみました。

```
javascript: window.location.href = window.location.href.replace(/github\.(com|dev)/, function(match, p1) { return p1 === "com" ? "github.dev" : "github.com" })
```

`github.dev` では以下のことができます。

- ファイル操作
    - 追加・編集・削除
    - 検索
    - 差分表示
- Git操作
    - ブランチ作成、コミット、プルリク作成など
    - stashやタグの作成は不可能
- 一部のVSCode拡張機能を使用
    - デフォルトで `github.vscode-pull-request-github` が入っているため、Issueやプルリクの確認が可能

Codespacesとの違いは以下です。

- すべてのアカウントで使用できる
- 無料
- ターミナルが使えない
- 対応していない拡張機能がある

詳細は [ドキュメント](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor) に記載されています。


## 感想

フォルダの階層が深いリポジトリを調べるときや、コードの実行が不要な編集をするときはとても便利です。
GitやVSCodeを入れていない非開発用PCでも、簡単な編集であれば `github.dev` で十分ですね。

コードを実行する必要があるときはクローン必須ですね。
また、開発用PCで長期的に扱うリポジトリもクローンしたほうが早いと思います。
