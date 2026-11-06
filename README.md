# Roguelite Pampa

Demo Web Factory — action roguelite top-down (estilo Soul Knight / survival) en canvas a 60fps.

**Jugar:** https://elulises15.github.io/rpg-ligero/

## Controles
| Acción | Teclado | Touch |
|--------|---------|-------|
| Mover | WASD / flechas | Joystick virtual |
| Disparo | Click / mantener | Botón DISPARO o tocar canvas |
| Facón (cono) | Q | Botón FACÓN |
| Mate amargo (AoE) | E | Botón MATE AMARGO |
| Esquive (i-frames) | Shift / Espacio | Botón ESQUIVE |
| Pausar | Esc | Botón Ⅱ |
| Mute | botón ♫ | igual |

## Objetivo
Despejá **8 salas** (2 oleadas cada una). Las puertas se abren al limpiar. Enfrentá al **Guardián del Ombú** en la sala final. Pickups: vida, monedas, velocidad, daño, −recarga.

## Online
**No.** Single-player only. PeerJS/WebRTC se dejó afuera a propósito: el cupo de Codex se agotó durante el polish y un coop a medias hubiera quedado roto. El archivo `js/net.js` documenta `online=false`.

## Tech
- Canvas 2D + módulos ES, sin bundler
- Spritesheets 16-bit generados con Codex imagegen (magenta key) → atlas en runtime
- Audio: Web Audio API (SFX + chiptune loop)
- Particles, screen shake, damage numbers, cooldown sweep en skills
- localStorage high score (`pampa-record`)

## Local
```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```
