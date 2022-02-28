---
title: テストしやすいReactコンポーネントの設計をサポートするライブラリを作った
date: "2022-02-28"
thumbnail: ../../assets/thumb/architecture.svg
header: header.jpg
ogp: ogp.jpg
tags:
    - React
    - テスト
    - TEA
---

## 課題

現時点のReactでは関数コンポーネントが主流です。
クラスコンポーネントよりもシンプルでテストしやすいためです。

しかし、複雑なロジックを持つ場合は関数コンポーネントであっても難しいです。
複数の状態を持っていたり、[useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect) が絡んでいたりすると特に難しくなります。
それらはコンポーネント内で生成され、直接テストすることができないからです。


## 解決策

課題の根本的な原因は、画面上に表示されるビューと、状態やその更新を行うロジックが密に結合しているためです。
これらを分離し、別々にテストすることで解決できます。
そのアイディアを実現する方法はいくつかあります。

Hooksの導入前は、ビューを担当する Presentational Components とロジックを担当する Container Components に分ける方法が有名でした。

- [Presentational and Container Components | by Dan Abramov | Medium](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [Presentational ComponentとContainer Component / Yuuniworks Blog](https://www.yuuniworks.com/blog/2018-05-18-presentational-component%E3%81%A8container-component/)

Hooksの導入後はロジック部分を Custom Hooks に置き換えられます。

- [ReactのカスタムHooksをカジュアルに使ってコードの見通しを良くしよう](https://sbfl.net/blog/2020/08/21/use-react-hooks-easy/)
- [テスタブルなReact Componentの書き方](https://zenn.dev/yuki0410/articles/2ad97915768826)


## react-container

https://github.com/Foo-x/react-container

[react-container](https://github.com/Foo-x/react-container) は [テスタブルなReact Componentの書き方](https://zenn.dev/yuki0410/articles/2ad97915768826) で紹介されている設計をサポートするライブラリです。


### 使用例

```tsx
import { Container, UseHooks, View } from '@foo-x/react-container';
import { useCallback, useState } from 'react';

type Props = {
  defaultValue: number;
  label: string;
};

type HooksResult = {
  value: number;
  increment: () => void;
  decrement: () => void;
};

export const useHooks: UseHooks<Props, HooksResult> = ({
  props: { defaultValue },
}) => {
  const [value, setValue] = useState(defaultValue);
  return {
    value,
    increment: useCallback(() => {
      setValue((prev) => prev + 1);
    }, []),
    decrement: useCallback(() => {
      setValue((prev) => prev - 1);
    }, []),
  };
};

export const view: View<Props, HooksResult> = ({
  props: { label },
  hooksResult: { value, increment, decrement },
}) => {
  return (
    <div>
      <h2>{label}</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button type='button' onClick={decrement}>
          -
        </button>
        {value}
        <button type='button' onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

const Counter = Container({ useHooks, view });

export default Counter
```

`Props` はコンポーネントの引数です。

`HooksResult` は Custom Hooks の戻り値です。

`useHooks` は Custom Hooks です。
`Props` を受け取って `HooksResult` を返します。

`view` はビューを生成する関数です。
`Props` と `HooksResult` を受け取ってReactの要素を返します。

ライブラリが提供している `Container` で `useHooks` と `view` を結合することでコンポーネントを生成できます。

ビューとロジックが分かれたので別々にテストできるようになりました。
それぞれ以下の点が改善されます。

- ビュー
    - 引数にのみ依存するようになったのでテストしやすくなった
- ロジック
    - 直接テストできなかったものができるようになった


## react-tea

https://github.com/Foo-x/react-tea

[The Elm Architecture (TEA)](https://guide.elm-lang.org/architecture/) というアーキテクチャがあります。
詳細は省きますが、まさに状態・ロジック・ビューを分けるものです。

[react-tea](https://github.com/Foo-x/react-tea) はTEAによるReactの設計をサポートするライブラリです。


### 使用例

```tsx
import {
  Cmd,
  exhaustiveCheck,
  Init,
  Sub,
  Tea,
  Update,
  View,
} from '@foo-x/react-tea';

type Model = number;

type Msg = 'increment' | 'decrement';

type Props = {
  defaultValue: number;
};

export const init: Init<Model, Msg, Props> = ({ props }) => [
  props.defaultValue,
  Cmd.none(),
];

export const update: Update<Model, Msg, Props> = ({ model, msg }) => {
  switch (msg) {
    case 'increment':
      return [model + 1, Cmd.none()];

    case 'decrement':
      return [model - 1, Cmd.none()];

    default:
      return exhaustiveCheck(msg);
  }
};

export const subscriptions: Sub<Model, Msg, Props> = Sub.none();

export const view: View<Model, Msg, Props> = ({ model, dispatch, props }) => {
  return (
    <div>
      <h2>Simple Counter</h2>
      <h3>default: {props.defaultValue}</h3>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          type='button'
          onClick={() => {
            dispatch('decrement');
          }}
        >
          -
        </button>
        {model}
        <button
          type='button'
          onClick={() => {
            dispatch('increment');
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

const SimpleCounter = Tea({ init, update, subscriptions, view });

export default SimpleCounter;
```

`Model` は状態です。

`Msg` は状態を更新するメッセージです。

`Props` はコンポーネントの引数です。

`init` は状態を初期化する関数です。
`Props` を受け取って初期状態とコマンドを返します。
コマンドとは、非同期でメッセージを送信する処理のことです。

`update` は状態の更新を行う関数です。
`Props`、`Model`、`Msg` を受け取って新しい状態とコマンドを返します。
Hooksの `useReducer` に渡すreducerに似た関数ですが、コマンドによって非同期な状態の更新も扱えます。

`subscriptions` はイベントリスナーです。
Hooksの `useEffect` に相当します。

`view` はビューを生成する関数です。
`Props`、`Model`、`dispatch` を受け取ってReactの要素を返します。
`dispatch` はメッセージを送信する関数です。

ライブラリが提供している `Tea` で `init`、`update`、`subscriptions`、`view` を結合することでコンポーネントを生成できます。
react-container と同様に `useHooks` でHooksを使用することもできます。
詳しくは [リポジトリ](https://github.com/Foo-x/react-tea) のドキュメントを参照してください。


## まとめ

ほとんどのケースでは react-container で十分です。
しかし、特に複雑な状態・ロジックを持つコンポーネントの場合は、ぜひ react-tea を使ってみてください。
ロジックがより細かい粒度で分かれるので、さらにテストしやすくなるはずです。
