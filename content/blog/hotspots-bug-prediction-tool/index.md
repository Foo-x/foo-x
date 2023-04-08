---
title: Googleのバグ予測アルゴリズムをPythonで実装した
date: "2023-04-09"
thumbnail: ../../assets/thumb/bug.svg
header: header.jpg
ogp: ogp.jpg
tags:
    - Python
    - バグ予測
---

## 経緯

[『ソフトウェア品質を高める開発者テスト アジャイル時代の実践的・効率的なテストのやり方』](https://www.amazon.co.jp/dp/B08TBD3LSS) を読んでいると、バグの発生しやすさを予測する「Hotspot」という概念が出てきました。
もとは [Googleのブログ記事](http://google-engtools.blogspot.com/2011/12/bug-prediction-at-google.html) のようです。
すでにRubyで実装された [bugspots](https://github.com/igrigorik/bugspots) というOSSがありますが、ポータビリティを考慮してPythonで実装しました。

[Foo-x/hotspots](https://github.com/Foo-x/hotspots)


## 概要

アルゴリズムのもとになる考え方は、「最近よくバグが修正されたファイルはまだバグがある可能性が高い」です。
実際にそれを支持する研究結果もあるようです。

[バグ修正のための変更の40%が新たなバグを混入するという研究結果 - Googleのバグ予測方法との共通点：森崎修司の「どうやってはかるの？」：オルタナティブ・ブログ](https://blogs.itmedia.co.jp/morisaki/2011/12/--google-cabc.html)

bugspotsでは、コミットメッセージに `fix` や `close` が含まれているコミットをバグ修正としてカウントしています。
また、コミット日が新しいものほど重みを付けています。

具体的な計算式は下の記事で解説されているのでご覧ください。
[グーグルはコードの品質向上のため「バグ予測アルゴリズム」を採用している － Publickey](https://www.publickey1.jp/blog/11/post_193.html)

今回私が実装したツールはオリジナルと少し違いがあります。

- バグ修正だけでなくすべてのコミットをカウント
    - バグ修正かどうかによらず、すべての変更にエンバグの可能性があり、変更回数が多いほどバグが発生しやすいため
    - オプションでコミットメッセージによるフィルタも可能
- 全ファイルのHotspot値を計算後、[0, 1] の範囲に正規化
    - 正規化しないと最後のコミットから時間が経つほど値が小さくなって、ファイル間の差異がわかりにくくなるため
    - オプションで正規化しないことも可能

また、ファイル行数も出力するようにしています。
行数が多いほど複雑度が高くなり、バグの発生しやすさだけでなくデバッグのしにくさにもつながるためです。


## 使い方

1. Python 3.7 以上がインストールされていない場合はインストールする
2. [リポジトリ](https://github.com/Foo-x/hotspots) から `hotspots` をダウンロードし、PATHを通す
3. Gitリポジトリで `hotspots` コマンドを実行する

詳しい使い方は `hotspots -h` を参照してください。
