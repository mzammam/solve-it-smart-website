# Solve IT Smart website

The Solve IT Smart architecture consultancy website, with English, Swedish and Arabic pages.

Built with HTML5, CSS3, vanilla JavaScript and SVG. No framework, package installation or build step is required.

Repository name: `solve-it-smart-website`.

## Files

- `index.html` is the English home page.
- `sv/` contains the Swedish version.
- `ar/` contains the Arabic version with right-to-left layout.
- `architecture-review/`, `modernization/`, `integration/`, `cloud-architecture/`, `experience/`, `about/` and `contact/` contain page-specific English `index.html` files.
- `assets/styles.css` contains the full visual system.
- `assets/site.js` contains the mobile menu, language switcher, translation layer and contact-form placeholder behavior.
- `assets/logo.svg` and `assets/favicon.svg` are editable SVG assets.
- `404.html` is the GitHub Pages not-found fallback.

## Before publishing

Replace these placeholders across the site:

- `https://www.linkedin.com/in/REPLACE-ME/`
- `hello@example.com`
- `https://formspree.io/f/REPLACE_ME`

If you use a custom domain, add a `CNAME` file in this folder containing only the domain name, for example:

```text
example.com
```

## GitHub Pages

This folder is a standalone Git repository. Its GitHub remote, commit identity and account selection must be configured locally for this repository, leaving other repositories and GitLab credentials untouched.

In the GitHub repository, choose **Settings > Pages > Deploy from a branch**, then select **main** and **/(root)**. The `.nojekyll` file makes GitHub publish the static files directly.

The initial site address is `https://YOUR-GITHUB-USERNAME.github.io/solve-it-smart-website/`. Relative links and the language switcher support both this project address and a custom domain. If you rename the repository, also update the project path in `404.html`.

For a custom domain:

1. Register or restore the domain in an account you control.
2. Verify domain ownership in your GitHub account's Pages settings.
3. Configure the domain in the repository's Pages settings and add the matching `CNAME` file here.
4. Set DNS records according to [GitHub's custom-domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
5. Enable **Enforce HTTPS** when GitHub has issued the certificate.

Do not add a domain to Pages until its ownership is confirmed. Domain registration and website hosting are separate services.

The language routes are:

- English: `/`
- Swedish: `/sv/`
- Arabic: `/ar/`
