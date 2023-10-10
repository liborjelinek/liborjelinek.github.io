# Libor Jelinek personal resume

Website source is in templates/. Using staticjinja, the real pages are rendered to the root.

```
python3 -m venv .venv
source .venv/bin/activate
pip install staticjinja
staticjinja build
```

Website is hosted on GitHub Pages on https://liborjelinek.github.io. To publish, just `git push origin HEAD`.