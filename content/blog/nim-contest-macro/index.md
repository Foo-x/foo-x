---
title: Nimの競プロ用標準入力マクロ
date: "2020-07-23"
thumbnail: ../../assets/thumb/keyboard.svg
header: header.jpg
ogp: ogp.jpg
tags:
    - Nim
    - 競技プログラミング
---
Nimで競プロの入力を変数にバインドするマクロを作成しました。

- 2020/08/25
    - floatに変換するものを追加
    - タプルにバインドするものを追加

## 例

```nim
# 長さnのリスト
# 5
# 1 2 3 4 5

var
  n = read(int)
  v = read(int, n)

echo n  # => 5
echo v  # => @[1, 2, 3, 4, 5]
```

```nim
# n行m列のリスト
# 2 3
# 1 2 3
# 4 5 6

var
  n = read(int)
  m = read(int)
  v = read(int, n, m)

echo n  # => 2
echo m  # => 3
echo v  # => @[@[1, 2, 3], @[4, 5, 6]]
```

```nim
# n行m列の盤面
# 3 4
# ####
# #..#
# .#.#

var
  n = read(int)
  m = read(int)
  v = read(char, n, m)

echo n  # => 3
echo m  # => 4
echo v  # => @[@['#', '#', '#', '#'], @['#', '.', '.', '#'], @['.', '#', '.', '#']]
```

```nim
# 複数の値
# 3 abc

var
  (n, s) = read(int, string)

echo n  # => 3
echo s  # => abc
```

```nim
# n行複数列
# 2
# abc 1 2
# xyz 3 4

var
  n = read(int)
  r = read(n, string, int, int)

echo n  # => 2
echo r  # => @[("abc", 1, 2), ("xyz", 3, 4)]
```

## 実装

```nim
import strformat, macros, sequtils, strutils

let readNext = iterator(getsChar: bool = false): string {.closure.} =
  for s in stdin.readAll.split:
    if getsChar:
      for i in 0..<s.len():
        yield s[i..i]
    else:
      yield s

proc read(t: typedesc[string]): string = readNext()
proc read(t: typedesc[char]): char = readNext(true)[0]
proc read(t: typedesc[int]): int = readNext().parseInt
proc read(t: typedesc[float]): float = readNext().parseFloat

macro read(t: typedesc, n: varargs[int]): untyped =
  var repStr = ""
  for arg in n:
    repStr &= &"({arg.repr}).newSeqWith "
  parseExpr(&"{repStr}read({t})")

macro read(ts: varargs[auto]): untyped =
  var tupStr = ""
  for t in ts:
    tupStr &= &"read({t.repr}),"
  parseExpr(&"({tupStr})")

macro read(n: int, ts: varargs[auto]): untyped =
  for typ in ts:
    if typ.typeKind != ntyAnything:
      error("Expected typedesc, got " & typ.repr, typ)
  parseExpr(&"({n.repr}).newSeqWith read({ts.repr})")
```

`readNext`については以下の記事を参考にさせていただきました。
[Nimの競技プログラミング用標準入力](https://qiita.com/cunitac/items/f0900f17d8d1c652855e)（追記: リンク切れ）

オーバーロードしている4つの`proc read`で、与えられた型に応じて読み込んだ文字列を変換しています。

1つ目の`macro read`はリストを読み込むマクロです。
1つ目の引数は要素の型です。
2つ目以降は整数の可変長引数で、各次元の長さに対応します。
たとえば、2×3の整数リストは`read(int, 2, 3)`で得られます。

2つ目の`macro read`は複数の値を読み込み、タプルにバインドするマクロです。
指定された型の数がタプルの長さになります。
たとえば、int、string、charの3つの値は`read(int, string, char)`で読み込めます。
このマクロは1引数の`read`を複数回実行する手間を減らすためのものであり、以下の2つの処理は同じ結果になります。

```nim
var
  (n, s, c) = read(int, string, char)
```

```nim
var
  n = read(int)
  s = read(string)
  c = read(char)
```

なお、すべての型が同じ場合はこのマクロは不要です。

```nim
var
  x, y, z = read(int)

# 下と同じ
# var
#   (x, y, z) = read(int, int, int)
#
# 下も同じ
# var
#   x = read(int)
#   y = read(int)
#   z = read(int)
```

3つ目の`macro read`は複数行にわたる複数の値をタプルのリストにバインドするマクロです。
1つ目の引数は読み込む行数です。
2つ目以降は型の可変長引数で、この数がタプルの長さになります。
forループの部分は`read(1, 2)`や`read(4, true)`のように、2つ目以降の引数が型でない場合にコンパイルエラーにする処理です。
このマクロは以下のような入力をバインドしたいケースで使用される想定です。

```
N
A_1 B_1
...
A_N B_N
```

```nim
var
  N = read(int)
  P = read(N, int, int)

# P => @[(A_1, B_1), ..., (A_N, B_N)]
```

## 参考
- [Rustで競技プログラミングの入力をスッキリ記述するマクロ](https://qiita.com/tanakh/items/0ba42c7ca36cd29d0ac8)
    - マクロを呼び出す部分の記法を参考にさせていただきました
