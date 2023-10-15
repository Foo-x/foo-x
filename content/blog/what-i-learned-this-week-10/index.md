---
title: "今週学んだこと チャットAIのプロンプトまとめ 他 #10"
date: "2023-10-15"
thumbnail: ../../assets/thumb/school.svg
header: header.jpg
ogp: ogp.jpg
tags:
    - React
    - JavaScript
    - Python
    - 生成AI
    - ログ
    - Bash
    - Windows
    - Vim
    - AWS
---

## Reactでmemoを使わずにレンダリング最適化する方法

[Before You memo() — Overreacted](https://overreacted.io/before-you-memo/?utm_source=pocket_saves)

`React.memo()` を使う前にコンポーネント設計でレンダリング最適化しましょう、という記事。

たとえば、あるstateを持つコンポーネントAの中で、レンダリングが重くてstateを使わない部分Xと、stateを使う部分Yがあるとする。
このときに以下のどちらかで最適化できる。

- Yをコンポーネントに抽出する
    - stateが変わったとしてもYしか再描画されなくなる
- Aのpropsでchildrenを受け取るようにし、Aの親コンポーネントからchildrenとしてXを渡す
    - stateが変わったとしてもXは再描画されない

## 階層型ファイルシステムでタグ機能を擬似的に実現する方法案

https://github.com/Foo-x/til/blob/66c888e7f910aed1089f96afc40f791ad8b6aac3/os/%E9%9A%8E%E5%B1%A4%E5%9E%8B%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%81%A7%E3%82%BF%E3%82%B0%E6%A9%9F%E8%83%BD%E3%82%92%E6%93%AC%E4%BC%BC%E7%9A%84%E3%81%AB%E5%AE%9F%E7%8F%BE.md

複数のカテゴリに属するようなファイルは階層型ファイルシステムで扱いづらい。
タグ機能があれば複数のタグを付与することで表現できる。
タグ機能をサポートしていない階層型ファイルシステムで擬似的に実現する方法の案。


## チャットAIのプロンプトまとめ

[チャットAIのプロンプト](https://gist.github.com/Foo-x/dd1fd90a8c746413e83a55ec91ccb710)

チャットAIに上手く返してもらうためのテクニックやテンプレートをまとめたもの。


## ログ設計

[ログ設計](https://gist.github.com/Foo-x/cd3da0b7e0bd7d6c06377e3f5d862aa8)

アプリケーションログやアクセスログの設計指針。


## スタックトレースを1行で出力

JavaScript
https://github.com/Foo-x/til/blob/15933c20e31f99684da0aa1ba1cdb3a565d4141b/language/javascript_typescript/%E3%82%B9%E3%82%BF%E3%83%83%E3%82%AF%E3%83%88%E3%83%AC%E3%83%BC%E3%82%B9%E3%82%921%E8%A1%8C%E3%81%A7%E5%87%BA%E5%8A%9B.md

Python
https://github.com/Foo-x/til/blob/15933c20e31f99684da0aa1ba1cdb3a565d4141b/language/python/%E3%82%B9%E3%82%BF%E3%83%83%E3%82%AF%E3%83%88%E3%83%AC%E3%83%BC%E3%82%B9%E3%82%921%E8%A1%8C%E3%81%A7%E5%87%BA%E5%8A%9B.md

JavaScriptとPythonにおいてスタックトレースを1行で出力する方法。
1行で出力すると検索しやすくなる。


## Bash

### シェルスクリプトの構文チェック

https://github.com/Foo-x/til/blob/801ebb756473b4984b30b0e5c7c2a8abd4ffdebd/os/linux/bash/%E6%A7%8B%E6%96%87%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF.md

シェルスクリプトの構文を実行せずにチェックする方法。


### 同じinodeのファイルを検索

https://github.com/Foo-x/til/blob/801ebb756473b4984b30b0e5c7c2a8abd4ffdebd/os/linux/bash/%E5%90%8C%E3%81%98inode%E3%81%AE%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E6%A4%9C%E7%B4%A2.md

ハードリンクされているファイルの一覧を表示する方法。


### ソートせずに重複行を削除

https://github.com/Foo-x/til/blob/801ebb756473b4984b30b0e5c7c2a8abd4ffdebd/os/linux/bash/%E3%82%BD%E3%83%BC%E3%83%88%E3%81%9B%E3%81%9A%E3%81%AB%E9%87%8D%E8%A4%87%E8%A1%8C%E3%82%92%E5%89%8A%E9%99%A4.md

順序を保ったまま重複行を削除する方法。


## Windowsでリンクを作成

https://github.com/Foo-x/til/blob/207e5db6a550dbd23b21c670532777fea9436684/os/windows/%E3%83%AA%E3%83%B3%E3%82%AF%E3%82%92%E4%BD%9C%E6%88%90.md

Windowsでシンボリックリンクやハードリンクを作成する方法。


## Vimでhelpを補完

https://github.com/Foo-x/til/blob/801ebb756473b4984b30b0e5c7c2a8abd4ffdebd/os/linux/vim/help%E3%81%AE%E8%A3%9C%E5%AE%8C.md

Vimで `:h` からヘルプを表示するときに補完する方法。


## AWSでシークレットの管理

https://github.com/Foo-x/til/blob/d39427db2e016e0296b17a120ae2aa519d853cf3/service/aws/%E3%82%B7%E3%83%BC%E3%82%AF%E3%83%AC%E3%83%83%E3%83%88%E3%81%AE%E7%AE%A1%E7%90%86.md

シークレットを管理する場所の使い分け方。
