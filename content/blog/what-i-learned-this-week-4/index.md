---
title: "今週学んだこと 不要な機能の割合/UIの直し方/他 #4"
date: "2023-04-02"
thumbnail: ../../assets/thumb/school.svg
header: header.jpg
ogp: ogp.jpg
tags:
    - テスト
    - MicrosoftTeams
    - UI
    - MySQL
    - Docker
    - WSL
    - Bash
    - Git
    - Python
---

## 『ソフトウェア品質を高める開発者テスト アジャイル時代の実践的・効率的なテストのやり方』

[![](https://images-na.ssl-images-amazon.com/images/P/B08TBD3LSS.09.MZZZZZZZ)](https://www.amazon.co.jp/dp/B08TBD3LSS)

機能要求のテストに出てくる概念をまとめている。非機能要求は対象外。
広く浅く書かれていて、初学者向け。
主な内容は以下の2つ。

- シフトレフトで単体テストを厚くしてバグを早めに見つける
- ファイルの複雑度を下げる

Hotspot、McCabe数、WMC (Weighted Methods per Class)、キーワード駆動テストは新しく学べた。

以下を推奨しているのは疑問だった。

- 関数の出口を1つにする
    - 理由は「単体テストが複雑になるため（？）」
    - 早期リターンに触れていない
- MVCアーキテクチャ
    - 理由は「Viewを分離するため」
    - クリーンアーキテクチャなど、Viewを分離しつつ依存性をより明確にしているアーキテクチャに触れていない
- Viewにはロジックを含めない
    - 理由は「単体テストが困難なため」
    - 手動テストのみを対象にしている
    - SPA、フロントエンドフレームワーク、testing-library などに触れていない

2021年に出版されているが、総じて古いプラクティスのままになっている印象。


## Microsoft Teams の称賛アプリと承認アプリ

### 称賛アプリ

[[称賛] をユーザーに送信する - Microsoft サポート](https://support.microsoft.com/ja-jp/office/-%E7%A7%B0%E8%B3%9B-%E3%82%92%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%81%AB%E9%80%81%E4%BF%A1%E3%81%99%E3%82%8B-50f26b47-565f-40fe-8642-5ca2a5ed261e)
[【Teams】称賛とは/称賛の使い方、出来ること | BEGIN-PROG](https://begin-prog.site/teams-how-to-use-praise)

称賛アプリは、メンバーに対してバッジとともに称賛メッセージを送る機能。
感謝・応援・労い・お祝いなどで使えて、モチベーションや生産性の向上につながる。


### 承認アプリ

[承認アプリから承認を作成する - Power Automate | Microsoft Learn](https://learn.microsoft.com/ja-jp/power-automate/teams/create-approval-from-teams-app?source=recommendations)

承認アプリは、Teams上で承認フローの作成と管理を行う機能。
一度作成された承認は削除できないので証拠として残せる。
テンプレートを作ることで同じような承認フローを繰り返すことができる。


## 不要な機能の割合

[リリースした新機能や改善の多くに価値がないという調査結果が意味すること - mtx2s’s blog](https://mtx2s.hatenablog.com/entry/2023/03/27/222358)

アプリが持っている機能のうち、3分の2は価値がないか逆に価値を損なわせるというデータの紹介。


## UIの直し方

[16 little UI design rules that make a big impact - Adham Dannaway](https://www.adhamdannaway.com/blog/ui-design/16-ui-design-rules)

UIを実際に悪い例から良い例に直す手順を1つずつ説明している。
基本はデザインの4原則である「近接」「整列」「強弱」「反復」に沿った内容。
今まで英数字のフォントは感覚的に選んでいたが、英小文字が高いと読みやすいという知見を得られた。


## MySQL の `REPLACE INTO` と `INSERT ... ON DUPLICATE KEY UPDATE` の違い

https://github.com/Foo-x/til/blob/c4fe9d5f95b27a45d694b976eb3924c5e6a27f6a/middleware/mysql/replace_into%E3%81%A8insert_on_duplicate_key_update%E3%81%AE%E9%81%95%E3%81%84.md

いわゆるupsert処理がMySQLには2種類用意されていて、その違いをまとめたもの。


## mysqldumpのinsert方法

https://github.com/Foo-x/til/blob/c4fe9d5f95b27a45d694b976eb3924c5e6a27f6a/middleware/mysql/dump%E3%81%AEinsert%E6%96%B9%E6%B3%95.md

mysqldumpでデータのdumpをとったときに生成されるinsert文のオプション。


## Dockerで起動したMySQLにWSLのlocalhostで接続する

https://github.com/Foo-x/til/blob/c4fe9d5f95b27a45d694b976eb3924c5e6a27f6a/os/wsl/Docker%E3%81%A7%E8%B5%B7%E5%8B%95%E3%81%97%E3%81%9FMySQL%E3%81%ABlocalhost%E3%81%A7%E6%8E%A5%E7%B6%9A.md

Dockerで MySQL を起動し、ポートを公開した状態で、WSLから MySQL クライアントでlocalhostを指定してもそのままでは接続できない。
その解決方法。


## Bashで相対パスと絶対パスを変換する

https://github.com/Foo-x/til/blob/50a5521bfd0d944b68c45b6e922cd5ec3420ab78/os/linux/bash/%E7%9B%B8%E5%AF%BE%E3%83%91%E3%82%B9%E3%81%A8%E7%B5%B6%E5%AF%BE%E3%83%91%E3%82%B9%E3%81%AE%E5%A4%89%E6%8F%9B.md

相対パスと絶対パスを相互に変換する方法。


## BashでカレントディレクトリがGitリポジトリか判定する

https://github.com/Foo-x/til/blob/50a5521bfd0d944b68c45b6e922cd5ec3420ab78/tool/git/%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%88%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E3%81%8Cgit%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E3%81%8B%E5%88%A4%E5%AE%9A.md

カレントディレクトリがGitリポジトリかどうか判定する方法。


## Pythonのデコレータにwrapsを付ける

https://github.com/Foo-x/til/blob/2614943fc35b1fbff97c105d5c6c0b42e7670b4f/language/python/%E3%83%87%E3%82%B3%E3%83%AC%E3%83%BC%E3%82%BF%E3%81%ABwraps%E3%82%92%E4%BB%98%E3%81%91%E3%82%8B.md

Pythonのデコレータに `functools.wraps` を付ける理由。
