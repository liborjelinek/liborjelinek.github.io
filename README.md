# Libor Jelinek personal resume

My dead simple website 😈.

Sources are in `templates/` folder. Using [staticjinja](https://pypi.org/project/staticjinja/) generator, the real pages are rendered to the root.

```
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
staticjinja build
```

Website is hosted on GitHub Pages on https://liborjelinek.github.io. To publish, just `git push origin HEAD`.