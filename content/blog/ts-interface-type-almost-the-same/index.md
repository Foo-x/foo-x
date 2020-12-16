---
title: TypeScriptのinterfaceとtypeがいつの間にかほとんど同じになっていた
date: "2020-12-16"
thumbnail: typescript.svg
header: header.jpg
ogp: ogp.jpg
tags:
    - TypeScript
---

気づいたきっかけは下の記事。

[interfaceとtypeの違い、そして何を使うべきかについて](https://zenn.dev/luvmini511/articles/6c6f69481c2d17)


## 昔の仕様

以前の`type`は、「新しい名前を作らない」という仕様があった。
たとえば、コンパイルエラーの出力には元の型名が表示されていた。

> Type aliases don’t create a new name — for instance, error messages won’t use the alias name.
(https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c)

他にも`type`はextends/implementsできないという仕様もあったりして、なかなかに使いにくかった。

そのような状況だったので、基本的には`interface`を使い、それでは表せない型にだけ`type`を使っていた。
今はもうほとんど差がなくなっていたなんて...


## 今後の方針

`interface`は同じ名前で複数回定義して拡張できるという仕様があるけど、これいる...？
最初に紹介した記事にも書かれている通り、混乱のもとにしかならない気がする。
これからは表現力の高い`type`をメインに使っていきたい。
