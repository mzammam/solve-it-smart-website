# Solve IT Smart website

The Solve IT Smart architecture consultancy website, with English, Swedish and Arabic pages.

Built with HTML5, CSS3, vanilla JavaScript and SVG. No framework, package installation or build step is required.

Repository name: `solve-it-smart-website`.

- [Website](https://solveitsmart.se/)
- [GitHub repository](https://github.com/mzammam/solve-it-smart-website)

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

The `CNAME` file records the custom domain configured in GitHub Pages:

```text
solveitsmart.se
```

## GitHub Pages

This folder is a standalone Git repository. Its GitHub remote, commit identity and account selection must be configured locally for this repository, leaving other repositories and GitLab credentials untouched.

In the GitHub repository, choose **Settings > Pages > Deploy from a branch**, then select **main** and **/(root)**. The `.nojekyll` file makes GitHub publish the static files directly.

The custom domain is `solveitsmart.se`. GitHub redirects the original project address, `https://mzammam.github.io/solve-it-smart-website/`, to this domain once the custom-domain configuration takes effect. Relative links and the language switcher support both addresses. If you rename the repository, also update the project path in `404.html`.

### Domain DNS at Inleed

Keep domain registration and DNS at Inleed, with website hosting at GitHub Pages.
In Inleed, open the domain's **Hantera > DNS / Namnservrar** settings. If a DNS zone needs to be created first, use `185.199.108.153` as its initial IPv4 address.

The website needs these records. `@` means the root domain, `solveitsmart.se`.

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | mzammam.github.io |

Use the default TTL, or 3600 seconds. Review and replace any conflicting website records at the root and `www`; preserve nameservers and email-related records. The CNAME target is the GitHub account hostname, without the repository name or `https://`.

After the DNS changes take effect, GitHub can issue the domain's certificate. Enable **Enforce HTTPS** in the repository's Pages settings when the certificate is ready. Account-level domain verification is also available in [GitHub Pages profile settings](https://github.com/settings/pages).

References: [GitHub custom-domain configuration](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [Inleed DNS zones](https://login.inleed.net/helpcenter/671/create-dns-zone).

The language routes are:

- English: `/`
- Swedish: `/sv/`
- Arabic: `/ar/`
