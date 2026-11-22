# GR Studios AI LLC

Static source for the studio homepage and fundraiser information page. The fundraiser button takes visitors to the studio’s GoFundMe page.

## Preview

Open `index.html` in a browser. No installation or build is required. Open Support from the navigation to preview the second page.

## Publish with GitHub Pages

1. Create a new public repository. Suggested name: `gr-studios-ai`.
2. Extract the ZIP. Upload its contents to the repository root, keeping the `assets` directory. Commit to `main`. If your upload method skips hidden files, add an empty `.nojekyll` file in the repository root.
3. Open **Settings → Pages**. Select **Deploy from a branch**, then **main** and **/(root)**. Save.
4. When deployment finishes, use **Visit site** in Pages settings to open the public URL. A project site normally uses `https://YOUR-GITHUB-OWNER.github.io/gr-studios-ai/`.

[GitHub Pages publishing guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Optional custom URL

The default GitHub Pages URL works without a custom domain. If you want to use an available subdomain you control, one option is `studio.grstudios.shop`. Verify ownership in GitHub, add the subdomain under the repository’s **Settings → Pages → Custom domain**, and create a DNS CNAME for that subdomain pointing to `YOUR-GITHUB-OWNER.github.io`. Once GitHub issues the certificate, enable **Enforce HTTPS**.

[GitHub Pages custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## GR Catgirl artwork

The site looks for `assets/gr-catgirl-studio.png` on Home and `assets/gr-catgirl-lavender.png` on Support. The matching originals are **Silver-lavender catgirl in neon studio.png** and **Lavender Catgirl on Tiled Floor.png**. If the images are absent, add them at those paths. The pages display a violet background until the artwork is present.
