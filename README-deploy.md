Deploying FinPilot to GitHub Pages

1) Create a new GitHub repository (name it `finpilot` or similar).
2) From your local project folder run:

```bash
cd "C:\Users\lxshl\Downloads\FinPilot-app"
git init
git add .
git commit -m "Initial FinPilot app"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

3) The GitHub Actions workflow `.github/workflows/deploy.yml` will run on push and publish the `dist` folder to the `gh-pages` branch.

4) After the action completes, your site will be available at:

```
https://<your-username>.github.io/<repo-name>/
```

Notes:
- If your repo uses `master` as main branch the workflow also triggers on pushes to `master`.
- You can change `publish_branch` in the workflow if you prefer a different deployment branch.
- For a custom domain add a `CNAME` file in `dist/` or configure GitHub Pages settings.
