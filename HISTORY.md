# Orbitz — what changed, in plain words

This is the whole history of the orbitz demo, newest first, written for someone who has never seen the code. The demo is a tiny gravity simulation: a heavy "sun" in the middle pulls two small planets around it, and the planets tug very slightly on each other. It is shown on travish.com, in the Programming section. Every entry is one step that reached the main version: a pull request, or one day's changes on one topic.

**How to read an entry**
- The heading names the change, links to the full technical detail on GitHub, and says when it landed (YY.MMDD.HHMM, Boise time).
- A bigger entry lists its parts underneath; each part's name links to the exact change that made it.
- **New:** something you can see or use · **Fixed:** a problem that no longer happens · **Behind the scenes:** a real change you can't see · **Removed:** something that is gone · **Try it:** where to see it, only when that still works today.
- "(Later replaced …)" means that version is gone and says what took its place.

*Written from the git history on 26.0925 and checked against the code of each day. From then on, each pull request carries its own entry, and it is added here automatically when the pull request merges.*

## October 2026

**orbitz #1: the demo stops when you leave its page** · [PR #1](https://github.com/travis-horton/orbitz/pull/1) · merged 26.1002.1017 · v1.1.3
- **[Stops when asked](https://github.com/travis-horton/orbitz/commit/a417e72)** · merged 26.1002.1017
  Fixed: after you left the demo's page on travish.com, the planets kept being drawn on every screen refresh out of sight, and each visit added another copy. The demo now hands the website a way to stop it, which ends the animation and removes the drawing area. (The website starts using it in its own change.)
- **[A plain-language history](https://github.com/travis-horton/orbitz/commit/b70392b)** · merged 26.1002.1017
  Behind the scenes: a new page, HISTORY.md, tells the project's whole story in plain words from 21.0701 on, with a version number for each step (it is at 1.1.2), and each future change adds its own entry automatically.

## June 2024

**Code tidy** · [commit](https://github.com/travis-horton/orbitz/commit/9a1bd27) · merged 24.0606.1256 · v1.1.2
- Behind the scenes: the code was tidied to the website's style checker, with no change to how the planets move.

## June 2022

**Code tidy** · [commit](https://github.com/travis-horton/orbitz/commit/e1ba33a) · merged 22.0620.1807 · v1.1.1
- Behind the scenes: the code's formatting was tidied to the style rules, with no change to how the planets move.

## July 2021

**Faster orbits** · [commit](https://github.com/travis-horton/orbitz/commit/25a1684) · merged 21.0705.1324 · v1.1.0
- New: the sun is a third heavier and both planets start faster, which changes the shape and speed of their orbits around it.
  Try it: open https://www.travish.com/programming/orbitz

**Orbitz begins, and moves onto the website** · [commits](https://github.com/travis-horton/orbitz/commits/main?since=2021-07-01&until=2021-07-01) · merged 21.0701.2222 · v1.0.0
- **[The simulation](https://github.com/travis-horton/orbitz/commit/4147cb1)** · merged 21.0701.1756
  New: a full-window page where a bright-red sun sits still in the middle and two smaller planets circle it, each pulled by the others' gravity.
- **[Ignore list](https://github.com/travis-horton/orbitz/commit/3247616)** · merged 21.0701.1758
  Behind the scenes: a list of files for the project to ignore was added.
- **[Self-contained](https://github.com/travis-horton/orbitz/commit/ceed46b)** · merged 21.0701.1824
  Behind the scenes: the simulation now makes its own drawing area and places it wherever it is asked, the shape the website uses for its demos.
- **[Sized for the website](https://github.com/travis-horton/orbitz/commit/d89cede)** · merged 21.0701.2222
  New: the drawing area is a fixed 700 by 512 box with a grey background and a thin border, instead of filling the whole window, and the planets start slower to fit it.
