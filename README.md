# FinPilot — Interactive Preview

This is a Vite + React scaffold created from your JSX to provide an interactive preview of the FinPilot landing page.

Quick start (local):

```bash
cd "C:\Users\lxshl\Downloads\FinPilot-app"
npm install
npm run dev
```

Open http://localhost:5173


Automatic deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `finpilot`).
2. Push this folder to the repository:

```bash
git init
git add .
git commit -m "Initial FinPilot app"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

3. The GitHub Actions workflow `.github/workflows/deploy.yml` will run on push and publish the `dist` folder to the `gh-pages` branch.

4. After the workflow finishes, your site will be available at:

```
https://<your-username>.github.io/<repo-name>/
```

See `README-deploy.md` for extra notes (custom domain, branch names).
