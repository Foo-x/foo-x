---
title: "Vimで自動保存"
date: "2023-12-10"
thumbnail: ../../assets/thumb/save.svg
header: header.jpg
ogp: ogp.jpg
tags:
    - vim
---

vimで自動保存をするプラグインに [vim-auto-save](https://github.com/907th/vim-auto-save) がある。
グローバル、ウィンドウ、バッファごとに設定できるが、タブごとには設定できない。
また、1年以上メンテナ募集中になっている。

個人的に必要な機能はシンプルなスクリプトで実現できるので自分で実装した。

```vim
fun! s:autosave()
  if !&modifiable || &readonly || !filewritable(expand('%'))
    return
  endif
  if get(g:, 'autosave', 0) || get(t:, 'autosave', 0) || get(w:, 'autosave', 0) || get(b:, 'autosave', 0)
    silent! update
  endif
endf
augroup AutoSave
  autocmd!
  autocmd CursorHold * call s:autosave()
augroup END
command! AutoSaveToggleGlobal let g:autosave=!get(g:, 'autosave', 0)
command! AutoSaveToggleTab let t:autosave=!get(t:, 'autosave', 0)
command! AutoSaveToggleWindow let w:autosave=!get(w:, 'autosave', 0)
command! AutoSaveToggleBuffer let b:autosave=!get(b:, 'autosave', 0)
command! AutoSaveClear let g:autosave=0 | let t:autosave=0 | let w:autosave=0 | let b:autosave=0
command! AutoSaveInfo echom 'g:' . get(g:, 'autosave', 0) | echom 't:' . get(t:, 'autosave', 0) | echom 'w:' . get(w:, 'autosave', 0) | echom 'b:' . get(b:, 'autosave', 0)
```

説明は以下の通り。

```vim
fun! s:autosave()
  if !&modifiable || &readonly || !filewritable(expand('%'))
    return
  endif
  if get(g:, 'autosave', 0) || get(t:, 'autosave', 0) || get(w:, 'autosave', 0) || get(b:, 'autosave', 0)
    silent! update
  endif
endf
```

ファイルが変更可能かついずれかのスコープで自動保存が有効な場合は保存。

```vim
augroup AutoSave
  autocmd!
  autocmd CursorHold * call s:autosave()
augroup END
```

`'updatetime'` の時間だけキーが押されなかったときに上の関数を実行。
デフォルト値は4秒だが、個人的にはすぐ保存したいので100ミリ秒にしている。

```vim
command! AutoSaveToggleGlobal let g:autosave=!get(g:, 'autosave', 0)
command! AutoSaveToggleTab let t:autosave=!get(t:, 'autosave', 0)
command! AutoSaveToggleWindow let w:autosave=!get(w:, 'autosave', 0)
command! AutoSaveToggleBuffer let b:autosave=!get(b:, 'autosave', 0)
```

各スコープごとに自動保存をトグルするコマンド。

```vim
command! AutoSaveClear let g:autosave=0 | let t:autosave=0 | let w:autosave=0 | let b:autosave=0
```

すべてのスコープで自動保存を無効化するコマンド。

```vim
command! AutoSaveInfo echom 'g:' . get(g:, 'autosave', 0) | echom 't:' . get(t:, 'autosave', 0) | echom 'w:' . get(w:, 'autosave', 0) | echom 'b:' . get(b:, 'autosave', 0)
```

自動保存の状態を出力するコマンド。

また、自動保存の状態をstatuslineに表示するようにしている。

```vim
fun! MyStatusline()
  " ...

  let l:autosave_status = get(g:, 'autosave', 0) || get(t:, 'autosave', 0) || get(w:, 'autosave', 0) || get(b:, 'autosave', 0) ? ' 󰓦' : ''

  return '...' . l:autosave_status . '...'
endf
set statusline=%{%MyStatusline()%}
```

`...` の部分は他の情報が入る。
