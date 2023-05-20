---
title: "今週学んだこと ユーザのための要件定義ガイド 他 #6"
date: "2023-05-21"
thumbnail: ../../assets/thumb/school.svg
header: header.jpg
ogp: ogp.jpg
tags:
    - 情報収集
    - 要件定義
    - 品質
    - HTML
    - Bash
    - Git
---

## 論文の探し方

[論文の探し方（情報系）｜岡瑞起 Mizuki Oka](https://note.com/mizuki_oka/n/nfd3101bec937)
[良い論文の見分け方（情報系）｜岡瑞起 Mizuki Oka](https://note.com/mizuki_oka/n/n963988a99bf7)

主に以下から入手する。

- 国際会議の会議録
- ジャーナル（論文誌）
- 学会誌
- [Google Scholar](https://scholar.google.co.jp)
- [CiNii Research](https://cir.nii.ac.jp/)
    - 国内の論文が多い
- [arXiv](https://arxiv.org/)
    - 無査読論文が多い

読む論文は以下のようにして決める。

- 被引用数が多い
- 読んだ論文が引用している
- 有名なジャーナルに掲載されている
    - 十分な査読を受けているため


## 『ユーザのための要件定義ガイド』

[ユーザのための要件定義ガイド第２版２刷](https://www.ipa.go.jp/publish/qv6pgp0000000wrt-att/000079352.pdf)

IPAが公開している要件定義ガイド。
経営層、業務部門、ベンダ企業などの各ステークホルダがそれぞれ意識すべきことや、各プロセスで起こりがちな問題とその解決策などがまとまっている。

失敗するプロジェクトの原因として挙げられていた以下のものはあるあるだった。

- 作るものが決まっていないのに見積もりを行う
- すでに決まっている予算に合わせるように見積もる
- 再見積もりしない
    - 最初の見積もりで決まった予算を途中で変えられないため
    - プロジェクトが進むにつれて見積もりの精度が上がる（不確実性コーン）ので、再見積もりすべき


## コードの品質がビジネスに与える影響

[コード品質はやはりビジネスに影響を与える - mtx2s’s blog](https://mtx2s.hatenablog.com/entry/2023/04/26/230917)

品質の低いコードは高いコードより欠陥を15倍含み、開発時間が平均で2倍、最大で9倍になるという研究結果。


## HTMLで改行可能位置を指定

[`<wbr>` - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/ja/docs/Web/HTML/Element/wbr)

`<br>` は常に改行するが、`<wbr>` は幅が足りずに折り返すときなど、必要なときだけ改行される。また、`<wbr>` を入れないと任意の位置で折り返されるが、入れるとその位置が優先される。


## Bash系

### よく使うキーバインド

https://github.com/Foo-x/til/blob/3511860b85cc21241e62fb41c03d4a8dbfe47471/os/linux/bash/%E3%82%88%E3%81%8F%E4%BD%BF%E3%81%86%E3%82%AD%E3%83%BC%E3%83%90%E3%82%A4%E3%83%B3%E3%83%89.md

Bashでは Ctrl-a でカーソルを先頭に移動したり、Ctrl-u でカーソルから先頭までを削除したりできる。
それらのキーバインドまとめ。


### setコマンドの用途

https://github.com/Foo-x/til/blob/bc7965af796cf3b2abf2d20575f23c379f9f9ded/os/linux/bash/set%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9.md

setコマンドでできること。


### シェルスクリプトの先頭の書き方

https://github.com/Foo-x/til/blob/bc7965af796cf3b2abf2d20575f23c379f9f9ded/os/linux/bash/%E3%82%B7%E3%82%A7%E3%83%AB%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E3%81%AE%E5%85%88%E9%A0%AD.md

よく使うシェルオプションやシバンの書き方。


### DSVの各列を変数に格納しながら各行をループ

https://github.com/Foo-x/til/blob/bc7965af796cf3b2abf2d20575f23c379f9f9ded/os/linux/bash/DSV%E3%81%AE%E5%90%84%E5%88%97%E3%82%92%E5%A4%89%E6%95%B0%E3%81%AB%E6%A0%BC%E7%B4%8D%E3%81%97%E3%81%AA%E3%81%8C%E3%82%89%E5%90%84%E8%A1%8C%E3%82%92%E3%83%AB%E3%83%BC%E3%83%97.md

カンマ区切りのCSVやスペース区切りのSSVなどを処理するときに各列を変数に格納しながら各行をループする方法。


### Ctrl-d で終了しないようにする方法

https://github.com/Foo-x/til/blob/3511860b85cc21241e62fb41c03d4a8dbfe47471/os/linux/bash/Ctrl-d%E3%81%A7%E3%82%B7%E3%82%A7%E3%83%AB%E3%82%92%E7%B5%82%E4%BA%86%E3%81%97%E3%81%AA%E3%81%84%E3%82%88%E3%81%86%E3%81%AB%E3%81%99%E3%82%8B.md

シェルで Ctrl-d を押すと終了するが、誤って押してしまうことがある。
複数回押さないと終了しないようにする方法。


## 「エンティティ」の意味

https://github.com/Foo-x/til/blob/5c7b4d858b4502a1ac9cb4e99e2cf7bd6a545acd/computer_science/model/%E6%96%87%E8%84%88%E3%81%94%E3%81%A8%E3%81%AE%E3%82%A8%E3%83%B3%E3%83%86%E3%82%A3%E3%83%86%E3%82%A3.md

文脈によって変わる「エンティティ」の意味まとめ。


## Gitでまとめてリベース

https://github.com/Foo-x/til/blob/bc7965af796cf3b2abf2d20575f23c379f9f9ded/tool/git/%E3%81%A4%E3%81%AA%E3%81%8C%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E3%82%92%E3%81%BE%E3%81%A8%E3%82%81%E3%81%A6%E3%83%AA%E3%83%99%E3%83%BC%E3%82%B9.md

バージョン2.38で追加された `git rebase --update-refs` を使ってブランチをまとめてリベースする方法。


## PDFの改行を除去

https://github.com/Foo-x/til/blob/ffd3d1010df2d564e87221541467b522a0272574/tips/PDF%E3%81%AE%E6%94%B9%E8%A1%8C%E3%82%92%E9%99%A4%E5%8E%BB%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95.md

PDFからコピーしたときの改行を簡単に除去する方法。
