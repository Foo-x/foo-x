---
title: フロントエンドにおける機能ベースのディレクトリ構成案
date: "2023-05-07"
thumbnail: ../../assets/thumb/architecture.svg
header: header.jpg
ogp: ogp.jpg
tags:
    - フロントエンド
    - 設計
    - Atomic Design
    - React
    - Next.js
---

ディレクトリ構成って難しいですよね。
バックエンドでは Clean Architecture が安定択ですが、フロントエンドではいまだにベストプラクティスが定まっていません。

この記事では、現時点で良さそうなディレクトリ構成案を紹介しつつ、他の有名な構成もまとめます。
なお、フレームワークの例として Next.js を扱います。


## 結論

```
.
├── __tests__/
├── config/
│   ├── locales/
│   └── consts.tsx
├── features/
│   └── user/
│       ├── apis/
│       ├── components/
│       │   ├── UserCard/
│       │   │   ├── index.ts
│       │   │   ├── UserCard.tsx
│       │   │   └── UserCard.module.css
│       │   └── index.ts
│       ├── contexts/
│       ├── functions/
│       ├── hooks/
│       ├── stores/
│       ├── types/
│       └── index.ts
├── lib/
├── pages/
│   └── users/
│       ├── _components/
│       │   ├── UsersPage/
│       │   │   ├── index.ts
│       │   │   └── UsersPage.tsx
│       │   ├── UsersTemplate/
│       │   │   ├── index.ts
│       │   │   ├── UsersTemplate.tsx
│       │   │   └── UsersTemplate.module.css
│       │   ├── UsersHeader/
│       │   ├── UsersFooter/
│       │   └── index.ts
│       └── index.page.tsx
├── public/
├── shared/
│   ├── apis/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── index.ts
│   │   │   ├── Button.tsx
│   │   │   └── Button.module.css
│   │   └── index.ts
│   ├── contexts/
│   ├── functions/
│   ├── hooks/
│   ├── stores/
│   ├── types/
│   └── index.ts
└── styles/
    └── global.css
```

以下の順で、各フォルダはそれより上にあるフォルダにのみ依存させます。

- `config/`
- `lib/`
- `shared/`
- `features/`
- `pages/`

各フォルダに置くファイルの種類は以下の通りです。

- `__tests__/`
    - テストファイル
- `public/`
    - 画像や音声などの静的なファイル
- `styles/`
    - CSS
- `config/`
    - 設定ファイル
- `lib/`
    - 外部ライブラリの初期設定をして再エクスポートするファイル
- `shared/`
    - 複数の機能で共有するコード
- `shared/apis/`
    - 外部との通信に関するロジックを含むコード
- `shared/components/`
    - 特定のコンポーネントに関するコード
- `shared/components/[component]/`
    - あるコンポーネント `[component]` に関するコード
- `shared/contexts/`
    - ReactのContextに関するコード
- `shared/functions/`
    - UIに関係しないコード
- `shared/hooks/`
    - Reactの Custom Hooks に関するコード
- `shared/stores/`
    - データの永続化に関するコード
- `shared/types/`
    - TypeScript の型定義
- `features/`
    - 特定の機能に関するコード
- `features/[feature]/`
    - ある機能 `[feature]` に関するコード
    - 以下の構造は `shared/` と同様
- `pages/`
    - 特定のページに関するコード
- `pages/[page]/`
    - あるページ `[page]` に関するコード
- `pages/[page]/_components/`
    - 特定のコンポーネントに関するコード

ポイントは機能ごとに分けて `features/` の下に置くことですね。
ここでの「機能」は、エンティティとするのがわかりやすいと思います。
たとえば、サインアップ、サインイン、ユーザ検索をそれぞれ別のフォルダにするのではなく、`user/` フォルダの中にまとめるということです。
ユーザに関する機能が多くなれば階層を1つ増やしてそれぞれ分けても良いです。

`shared/`、`features/`、コンポーネントのフォルダには `index.ts` を置きます。
これはフォルダ内のモジュールを再エクスポートするファイルです。
フォルダ外からは `index.ts` 経由でのみインポートします。
それによって2つのメリットが得られます。

- 一部のみを公開するよう制御できる
- インポート時のパスが簡潔になる
    - たとえば `import { UserCard } from '@/features/user/components/UserCard/UserCard'` ではなく `import { UserCard } from '@/features/user'` と書ける


### コンポーネントの置き場所

上に記載した通り、コンポーネントを置く場所は3つあります。

- `pages/[page]/_components/[component]/`
    - 特定のページに関するコンポーネント
- `features/[feature]/components/[component]/`
    - 特定の機能に関するコンポーネント
- `shared/components/[component]/`
    - 複数の機能で共有するコンポーネント

最も狭いスコープに置くことで、無駄に混ざらないで済むようになります。

`pages/[page]/_components/[component]/` について、フォルダ名に `_` が付いているのは、ページの階層と区別するためです。
Next.js でいう `_app.tsx` や `_document.tsx` と同じです。
なお、`next.config.js` に以下の設定をすることで、拡張子が `page.tsx` のファイルのみページコンポーネントとして認識させることができます。

```js
module.exports = {
  pageExtensions: ['page.tsx'],
}
```

参考: [next.config.js Options: pageExtensions | Next.js](https://nextjs.org/docs/pages/api-reference/next-config-js/pageExtensions)

また、`pages/[page]/_components/[component]/` には、Atomic Design のTemplateとPageを置きます。
上の例だと `UsersTemplate` と `UsersPage` です。
Templateでページのレイアウトを組み立て、Pageでデータを注入します。


## 他の構成

ここからは他のディレクトリ構成をまとめます。


### タイプベース

```
.
├── components/
│   ├── Button.tsx
│   ├── UserCard.tsx
│   ├── UsersHeader.tsx
│   └── UsersFooter.tsx
├── contexts/
├── hooks/
└── pages/
    └── users.page.tsx
```

ファイルのタイプごとに分ける、最も単純で古くから使われている構成です。
フレームワークのサンプルなどでもよく見ます。
参考: https://github.com/vercel/next.js/tree/canary/examples

コンポーネントやページが増えるにつれて、特定のページでのみ使用しているコンポーネントとそれ以外が混ざったり、コンポーネント間の依存関係が無秩序になったりしてカオスになります。


### Atomic Design

```
.
├── components/
│   ├── atoms/
│   │   └── Button.tsx
│   ├── molecules/
│   │   └── UserCard.tsx
│   ├── organisms/
│   │   ├── UsersHeader.tsx
│   │   └── UsersFooter.tsx
│   ├── templates/
│   │   └── UsersTemplate.tsx
│   └── pages/
│       └── UsersPage.tsx
├── contexts/
├── hooks/
└── pages/
    └── users.page.tsx
```

[Atomic Design Methodology | Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/chapter-2/)

一時期とても流行った構成です。
`components/` を以下のように分割します。

- atoms
    - 単一のHTMLタグ
- molecules
    - 複数のHTMLタグ
- organisms
    - ページの一部の領域
- templates
    - ページ全体
- pages
    - templatesにデータを渡すコンポーネント

下のフォルダはそれより上か同じフォルダにのみ依存します。
依存関係が明確になったことで再利用性が向上しました。

ただ、以下の問題が残っています。

- 特定のページでのみ使用しているコンポーネントとそれ以外が混ざる問題は解決されていない
    - `pages/` 以下にも atoms/molecules/organisms/templates を設けるパターンもありますが、複雑になります
- atoms/molecules/organisms の基準が人によって違う
    - 上に記載したのは公式の基準ですが、ドメインの知識を持つかどうかや、単体でページに存在できるかどうかで分ける人もいます
- moleculesやorganismsが普段使わない言葉なのでわかりにくい

一度採用したものの、最終的にはやめた話もよく見ますね。

- [Atomic Designをやめてディレクトリ構造を見直した話｜食べログ フロントエンドエンジニアブログ｜note](https://note.com/tabelog_frontend/n/n07b4077f5cf3)
- [Reactのディレクトリ構成でAtomicデザインをやめた話](https://zenn.dev/brachio_takumi/articles/2ab9ef9fbe4159)
- [Reactを使ったコンポーネント指向設計で、Atomic Designをやめようとしている話 - ITANDI Engineer Blog](https://tech.itandi.co.jp/entry/react-give-up-atomic-design)
- [Atomic Designから派生した、“オルタネイティヴ”な5つのデザインシステム - ログミーTech](https://logmi.jp/tech/articles/300657)


### Clean Architecture

Clean Architecture をフロントエンドに適用するのはどうでしょうか？
理論的には適用できますが、あまり採用事例を見ないですね。
理由としては以下が考えられます。

- ビジネスロジックはほとんどバックエンドで実装して、フロントエンドにはあまり実装しないため
- 外部の Web API やDBなどを使わないことも多いため
- コンポーネント内にUIとロジックを両方書くため

[結論](#結論) の構成の場合、`functions/` が最も内側の Enterprise Business Rules 層、`lib/`、`apis/`、`stores/` が最も外側の Frameworks & Drivers 層に相当します。
Clean Architecture を適用したい場合は、各コンポーネントから外側の層を直接参照せずに、引数で受け取るようにして、Pageから注入することで実現できます。

参考
- [ぼくのかんがえたフロントエンドアーキテクチャ](https://zenn.dev/kichion/articles/fddf0eb35ffa2a)
- [フロントエンドにクリーンアーキテクチャはいらない（ことが多いと思う） - Qiita](https://qiita.com/noboru_i/items/3c004cac4d998fff9e34)


## 元ネタ

機能ベースのディレクトリ構成は私が考えたものではありません。
私が調べた範囲で最も古いのは、2013年に AngularJS の文脈で登場しているようです。
Atomic Design 離れが始まったここ数年で徐々に広がっています。

- [openmindlab/angularjs-best-practices](https://github.com/openmindlab/angularjs-best-practices)
- [project structure - Folder-by-type or Folder-by-feature - Software Engineering Stack Exchange](https://softwareengineering.stackexchange.com/questions/338597/folder-by-type-or-folder-by-feature)
- [I am mitsuruog | いま一番気に入っているAngularJSのプロジェクト構成](https://blog.mitsuruog.info/2014/12/angular-structure.html)

ちなみに Atomic Design が生まれたのも2013年です。
[Atomic Design | Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)

この記事のディレクトリ構成は以下のものを参考にしています。

- [bulletproof-react/project-structure.md at master · alan2207/bulletproof-react · GitHub](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)
- [Screaming Architecture - Evolution of a React folder structure - DEV Community](https://dev.to/profydev/screaming-architecture-evolution-of-a-react-folder-structure-4g25)
- [Overview | Feature-Sliced Design](https://feature-sliced.design/docs/get-started/overview)


## まとめ

フロントエンドのディレクトリ構成案を紹介しました。
プロジェクトの大きさやフレームワークによっても変わってくるので難しいですね。
規模が小さいころはあまり気にせず、大きくなってから考えても良いと思います。
