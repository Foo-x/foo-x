---
title: jujutsuを試したら手放せなくなった3つの理由
date: "2024-12-29"
thumbnail: ../../assets/thumb/source-branch.svg
header: header.jpg
ogp: ogp.jpg
tags:
    - jujutsu
    - jj
    - Git
---

Git互換のバージョン管理システム [jujutsu (jj)](https://github.com/jj-vcs/jj) があります。
いろいろ特徴はありますが、しばらくスルーしていました。
Gitでも特に困っていなかったからです。

しかし、ここ3日ほど触ってみたところ、jujutsuなしの生活には戻れなくなりました。
この記事では実際に使ってみて感じたメリットをまとめます。


## `jj squash` で簡単にコミットを修正できる

Gitでは直前のコミットであれば `git commit --amend` で修正できます。
しかしそれ以前のコミットは以下のような操作が必要です。

- `git rebase -i` して修正したいコミットをeditで変更し、コミットを修正後に `git rebase --continue` する
    - 注意しないとコミットを削除してしまう可能性がある
- `git commit --fixup X` や `git commit --squash X` でコミットを作成後、`git rebase --autosquash X^` する

jujutsuでは直前のコミットは `jj squash`、それ以前のは `jj squash -r X` です。
圧倒的に簡単です。


## `jj new --insert-after/--insert-before` でコミットとコミットの間に新しいコミットを簡単に作れる

たとえば、あるタスクXの作業をしている途中に別のタスクYを先に済ませたほうが良いことに気づいたとします。
Gitであれば以下のような操作になります。

1. `git commit` で現在の修正をタスクX用のブランチにいったんWIPでコミットする
2. `git checkout -b branch-y master` でタスクY用のブランチにチェックアウトする
3. タスクYの修正を行う
4. `git add` して `git commit` する
5. `git checkout branch-x` でタスクX用のブランチに戻る
6. `git rebase branch-y` でタスクX用のブランチをタスクY用のブランチにrebaseする

WIPコミットは代わりにstashでも良いですが、流れは大きく変わらないです。

jujutsuの場合は以下の通りです。

1. `jj new --insert-before @` で現在のコミットの前に新しいコミットを作成する
    - `jj new --insert-after @-` でも同様
2. タスクYの修正を行う
3. `jj bookmark create branch-y` でタスクY用のブックマークを作成する
    - Gitのブランチに相当するものをjujutsuではブックマークと呼ぶ
4. `jj next --edit` もしくは `jj edit @+` でタスクX用のコミットに移動する

jujutsuは修正が自動でコミットされるので、手動でコミットする必要がありません。
またカレントブランチという概念がなく、修正が確定してからブックマークを作成したり移動させたりします。
したがってrebaseが不要です。

なお現在のコミットの直前に新しいコミットを作る場合は `jj split` でも可能です。
`jj new --insert-after/--insert-before` は任意の箇所に挿入できます。

## `jj undo` で簡単にロールバックできるので雑に操作できる

Gitでは操作を取り消す方法がそれぞれ異なります。

- コミットを戻す
    - `git reset`
- rebase/merge でコンフリクトが発生する前に戻す
    - `git rebase/merge --abort`
- rebase実行後に元の状態に戻す
    - 戻したい分岐元にrebaseしなおす
- resetを戻す
    - `git reflog` して戻したい箇所にcheckoutする

操作によっては戻せなかったり戻せても面倒だったりするので、Gitのコマンドを実行するときは少し覚悟が要ります。

jujutsuではすべて `jj undo` です。
また `jj op log` で操作ログが確認できて、戻したい操作を指定してundoできます。
雑に操作できて覚悟する負荷が減るのが嬉しいです。
試しに操作して結果を確認したりもできます。


## まとめ

jujutsuを使ってみて良かったところをまとめました。
ただ私がそうだったように、実際に試してみないとあまり実感できないと思います。
`jj git init --colocate` や `jj git clone --colocate` でGitとも併用できるので、ぜひ試してみるのをおすすめします。


## 注意

2024年現在のバージョンは0.24で、バージョンアップのたびに破壊的変更が入る可能性があります。
また以下の機能がまだサポートされていません。

- タグの操作
    - 一覧表示はできます
    - ただGitコマンドで操作できるので困りません
- Hooks
    - pre-commitやpre-pushなどが実行されません
- Partial Clone
    - `git config unset remote.origin.partialclonefilter` から `git fetch --refetch` のようにして解除する必要があります
- Sparse Checkout
    - `git sparse-checkout disable` で解除する必要があります
- Submodules
- Git LFS
- .gitattributes
