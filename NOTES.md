# Project Notes

## Local development

Requires Ruby and Bundler.

```bash
bundle install
bundle exec jekyll serve --livereload
```

The site is at `http://localhost:4000`. Add `--unpublished` to also show pages marked `published: false`.

## Publishing

GitHub Pages builds the site with its built-in Jekyll (the `github-pages` gem pins the same versions locally) whenever the default branch changes. There's no separate build workflow.

## Where content lives

| What | Where |
| --- | --- |
| Home page intro | `index.md` |
| About page text | `about.md` |
| Games and tools | `_games/*.md` and `_tools/*.md`, one file per project |
| Certifications, degree, courses, talks | `_data/*.yml` |
| Social links | `_data/social.yml` |
| Playable builds | `games/<slug>/play/`, served at `/games/<slug>/play/` |
| Screenshots and badges | `assets/images/` |
| Redirects from old URLs | `redirect_from` in a page's front matter; `redirects/` for old file URLs |
| Styles | `assets/css/main.css` (plain CSS) |

### Adding a project

Create `_games/<slug>.md` or `_tools/<slug>.md`. It's listed on the home page (newest `year` first) and gets a page at `/games/<slug>/` or `/tools/<slug>/`.

```yaml
---
title: Nine Lives
year: 2026                # used for sorting
years: 2024–2026          # optional; shown instead of year
description: One sentence, shown on the home page and in link previews.
tech: TypeScript
image: /assets/images/example.png
image_alt: What the screenshot shows
image_bg: "#1b1b2f"       # optional; letterboxes the image on this color instead of cropping
pixel_art: true           # optional; keeps pixel art crisp when scaled
links:
  - label: Play in your browser
    url: /games/example/play/
  - label: Source           # links starting with http open in a new tab
    url: https://github.com/Cynicollision/example
published: false          # optional; hide until ready
---

Longer write-up in Markdown.
```
