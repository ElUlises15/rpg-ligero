# Sprites

Generated with Codex imagegen as 16-bit pixel grids on magenta (#F0x0F0) chroma.

| File | Grid (cols×rows) | Contents |
|------|------------------|----------|
| hero.png | 4×7 | walk dirs + attack + hit + death |
| slime.png | 4×3 | walk / attack / death |
| bat.png | 4×3 | fly / attack / death |
| boss.png | 4×4 | idle / attack / hit / death |
| tiles.png | 4×2 | floors / props |
| fx.png | 4×2 | slash / bullet / blast |

Runtime: `js/assets.js` chroma-keys magenta, packs each cell into a 64px atlas (canvas), nearest-neighbor draw.
