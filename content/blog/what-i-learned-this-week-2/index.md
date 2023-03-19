---
title: "今週学んだこと #2"
date: "2023-03-19"
thumbnail: ../../assets/thumb/school.svg
header: header.jpg
ogp: ogp.jpg
tags:
    - HTML
    - CSS
    - 設計
    - アーキテクチャ
    - パフォーマンス
    - フロントエンド
    - ドキュメント
    - 推薦
    - UI
    - UX
    - PowerPoint
---

## IT英語スタイルガイド

[IT英語スタイルガイド | IT英語スタイルガイド](https://styleguide.progeigo.org/)

IT系の英文を書くときに気をつけることがまとまっている。


## 推薦システムのアーキテクチャ

[How To Build Recommendation Algorithms And System Designs](https://www.theinsaneapp.com/2021/03/system-design-and-recommendation-algorithms.html)

YouTube、Twitter、Spotifyなどの推薦を行うシステムのアーキテクチャがまとまっている。


## フロントエンドのパフォーマンス改善

[ウェブパフォーマンス | MDN](https://developer.mozilla.org/ja/docs/Web/Performance)

ウェブパフォーマンスについてMDNが公開しているドキュメントのリンクをまとめている。まだすべては見られていないが、「パフォーマンスの基礎」だけでもかなり勉強になる。

https://github.com/Foo-x/til/blob/beef805a897243b4a6ef1238b1f42bee2d3e60ec/language/css/css%E5%B0%81%E3%81%98%E8%BE%BC%E3%82%81.md

CSSの封じ込めについてまとめた。ある要素を変更したときにそれ以外の要素を再描画させない仕組みを封じ込めという。
また、表示していない領域の要素を描画させない仕組みも書いている。


## CSSアニメーションでtransformプロパティを使うメリット

https://github.com/Foo-x/til/blob/beef805a897243b4a6ef1238b1f42bee2d3e60ec/language/css/transform%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E3%81%A7%E3%82%A2%E3%83%8B%E3%83%A1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%95%E3%81%9B%E3%82%8B%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88.md

CSSでアニメーションさせる際に、`top/left` や `width/height` ではなく `transform` を使ったほうが良い理由。


## CSSのプロパティやセレクタのサポート状況で分岐

https://github.com/Foo-x/til/blob/beef805a897243b4a6ef1238b1f42bee2d3e60ec/language/css/%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E7%8A%B6%E6%B3%81%E3%81%A7%E5%88%86%E5%B2%90.md

ブラウザがCSSのプロパティやセレクタをサポートしているかどうかで分岐する方法。


## CSSでスクロールのスナップ

https://github.com/Foo-x/til/blob/beef805a897243b4a6ef1238b1f42bee2d3e60ec/language/css/%E3%82%B9%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%AB%E3%81%AE%E3%82%B9%E3%83%8A%E3%83%83%E3%83%97.md

スクロール時に要素を領域にスナップさせる方法。


## input要素のautocomplete属性

https://github.com/Foo-x/til/blob/beef805a897243b4a6ef1238b1f42bee2d3e60ec/language/html/input%E3%81%AEautocomplete%E5%B1%9E%E6%80%A7.md

input要素に値の種類を設定して自動入力できるようにする方法。


## `:is()` 擬似クラス

https://github.com/Foo-x/til/blob/beef805a897243b4a6ef1238b1f42bee2d3e60ec/language/css/is%E6%93%AC%E4%BC%BC%E3%82%AF%E3%83%A9%E3%82%B9.md

`:is()` 擬似クラスの使いどころ。


## `:has()` 擬似クラス

https://github.com/Foo-x/til/blob/beef805a897243b4a6ef1238b1f42bee2d3e60ec/language/css/has%E6%93%AC%E4%BC%BC%E3%82%AF%E3%83%A9%E3%82%B9.md

`:has()` 擬似クラスの使いどころ。


## `min-height` の子要素にパーセント指定

https://github.com/Foo-x/til/blob/c2df327c5b1ae221edce4e09cf7415310444a326/language/css/min-height%E3%81%AE%E5%AD%90%E8%A6%81%E7%B4%A0%E3%81%AB%E3%83%91%E3%83%BC%E3%82%BB%E3%83%B3%E3%83%88%E6%8C%87%E5%AE%9A.md

親要素で `height` を指定せずに `min-height` のみを指定すると、子要素で `height: 100%` を指定しても `min-height` の値にならない問題の対策。
特に親要素がフレームワークのコンポーネントであまりいじれないときに使える。


## パワーポイントで次のスライドに行かずにスクロール

https://github.com/Foo-x/til/blob/c2df327c5b1ae221edce4e09cf7415310444a326/tool/powerpoint/%E6%AC%A1%E3%81%AE%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%89%E3%81%AB%E8%A1%8C%E3%81%8B%E3%81%9A%E3%81%AB%E3%82%B9%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%AB.md

パワポで画面からはみ出した要素を見ようとしてスクロールすると、前後のスライドに飛んでしまう問題の対策。
特にパワポを発表資料ではなくドキュメントとして使っていると、画面外に要素を置きがちなのでよく起こる。
