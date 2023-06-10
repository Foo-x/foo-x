---
title: "今週学んだこと JavaScriptでメディアクエリ 他 #8"
date: "2023-06-11"
thumbnail: ../../assets/thumb/school.svg
header: header.jpg
ogp: ogp.jpg
tags:
    - 設計
    - JavaScript
    - VSCode
    - WSL
    - Docker
    - Git
---

## リアーキテクトについて

[フロントエンドリアーキテクトの話 - Speaker Deck](https://speakerdeck.com/yosuke_furukawa/hurontoendoriakitekutonohua)

- リファクタリング、リアーキテクト、リライトの違い
- 技術継承としてのリアーキテクト
- リアーキテクトの粒度
- リアーキテクトのアンチパターン

フロントエンドリアーキテクトというタイトルになっているが、フロントエンドに限らない。


## JavaScriptでメディアクエリ

[MediaQueryList - Web API | MDN](https://developer.mozilla.org/ja/docs/Web/API/MediaQueryList)

メディアクエリにマッチするかどうかを判定したり、状態が変わったときのイベントを監視したりできる。

ちなみにReactでは便利なカスタムフックをまとめた [react-use](https://github.com/streamich/react-use) というライブラリがあり、その中の `useMedia` で同様のことができる。
内部で上のAPIが使われている。


## VSCode

### コミットメッセージをエディタで作成

https://github.com/Foo-x/til/blob/949421291e51b74a9434628166105dd0dbc399e6/tool/vscode/%E3%82%B3%E3%83%9F%E3%83%83%E3%83%88%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8%E3%82%92%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF%E3%81%A7%E4%BD%9C%E6%88%90.md

Source Control ビューからコミットメッセージを作成する際に、入力欄ではなくエディタから行う方法。
これによってGitのコミットテンプレートを使ったり、エディタのキーバインドが使える。


### スマートコミット

https://github.com/Foo-x/til/blob/949421291e51b74a9434628166105dd0dbc399e6/tool/vscode/%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E3%82%B3%E3%83%9F%E3%83%83%E3%83%88.md

何もステージせずにコミットしようとすると、全ファイルをステージしてからコミットする機能について。


### エディタグループのロック

https://github.com/Foo-x/til/blob/a6050c2c1584a1f5e43e096944934742f84b868f/tool/vscode/%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97%E3%81%AE%E3%83%AD%E3%83%83%E3%82%AF.md

常に表示しておきたいエディタグループをロックする方法。


## WSL

以前からしていた設定をこのタイミングでメモにした。


### systemdを有効化

https://github.com/Foo-x/til/blob/c97a8d7732ad5a9ed459fa59c86c01892e960ac7/os/wsl/systemd%E3%82%92%E6%9C%89%E5%8A%B9%E5%8C%96.md

デフォルトで無効になっているsystemdを有効化する方法。


### リソース設定

https://github.com/Foo-x/til/blob/c97a8d7732ad5a9ed459fa59c86c01892e960ac7/os/wsl/%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9%E8%A8%AD%E5%AE%9A.md

WSLで使用するリソースの設定。


## Dockerで既存ネットワークにコンテナを追加

https://github.com/Foo-x/til/blob/621a34609b8c011674f845c3d30fec2c5414ffcd/infra/docker/%E6%97%A2%E5%AD%98%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF%E3%81%AB%E3%82%B3%E3%83%B3%E3%83%86%E3%83%8A%E3%82%92%E8%BF%BD%E5%8A%A0.md

Dockerで既存のネットワークにコンテナを追加する方法。
Docker Compose で起動したネットワーク内で、クライアントとしてのコンテナを新しく起動してリクエストを送りたいときなどによく使う。


## マージ待ちブランチに依存する開発の進め方

https://github.com/Foo-x/til/blob/871ba93499030edd15f773431f603cb2f6af5ba6/tool/git/%E3%83%9E%E3%83%BC%E3%82%B8%E5%BE%85%E3%81%A1%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E3%81%AB%E4%BE%9D%E5%AD%98%E3%81%99%E3%82%8B%E9%96%8B%E7%99%BA%E3%81%AE%E9%80%B2%E3%82%81%E6%96%B9.md

レビュー中のブランチに依存する開発を進める方法。
依存するブランチが1つのときは単純だが、複数あると少し複雑になる。
