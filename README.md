# Noodlecoil Games website

Official public website for Noodlecoil Games, served with GitHub Pages from the `main` branch.

**Live address:** https://noodlecoil-games.github.io/

## Pages

- `/` — homepage and in-development game catalogue
- `/privacy/` — privacy center
- `/privacy/website/` — website privacy notice
- `/privacy/doublitz/` — pre-release privacy preview
- `/privacy/vialchemics/` — pre-release privacy preview
- `/privacy/unstuck-arrow/` — pre-release privacy preview
- `/privacy/tabletop-td/` — pre-release privacy preview
- `/terms/` — preliminary website terms
- `/support/` — contact and support page

The site is plain HTML, CSS and minimal first-party JavaScript. No build process, analytics, tracking cookies or hosted fonts are used.

## Important: game privacy policies are NOT ready for app-store submission

The four game pages are intentionally labelled **pre-release drafts**. They list possible features from the current project plans, **not verified SDK/data inventories**. Before adding any game privacy-policy URL to Play Console or AdMob:

1. Audit the release build: Android permissions, local and cloud data, all SDKs, ad identifiers, analytics, crash logs, and network traffic.
2. Record data collected/processed, purpose, legal basis, sharing recipients, retention, deletion, security, international transfers, age targeting, and privacy choices.
3. Confirm Google Play Games Services, AdMob, Google Play Billing and any other SDKs actually present.
4. Replace the draft wording with accurate final policy and ensure the Play Console Data safety declarations match.
5. Add the required in-app link to the specific game's final privacy policy.
6. If using AdMob for European users, implement and test the Google UMP consent flow and accessible in-app privacy choices.
7. Review publication and trader/legal disclosures for the actual developer/business arrangement.

**Do not claim a Belgian BV or any company incorporation unless it has actually happened.** A public studio brand is not the same as a registered company. Keep private legal information out of the repository unless disclosure is required and has been deliberately reviewed.

## AdMob app-ads.txt

`app-ads.txt` is **not yet included**, because the real AdMob publisher ID and the authorized seller lines are not available. Do not add guessed `pub-` identifiers.

When the real AdMob account is configured, copy the exact text supplied by AdMob into a new root-level `app-ads.txt` file, then verify its URL and crawler status. The default `github.io` hostname may not work reliably for AdMob app-ads.txt verification; a domain controlled by the publisher may be required. Privacy-policy hosting itself does not depend on this.

## Privacy-first development

The public site uses a dedicated studio contact address and intentionally does not include any personal GitHub usernames, home address, or real-person founder identity. Public commits can still reveal the committing GitHub identity; commit using the **noodlecoil-games** account.

## Editing

Edit any `index.html` file in the browser or clone the repository locally. Site styles live in `assets/style.css`, the favicon/logo in `assets/mark.svg`, and the small mobile-menu script in `assets/site.js`.

Last initial deployment: 29 October 2026.

## Multilingual legal pages (13 locales)

Supported locale codes: `en`, `ja`, `ko`, `zh-Hans`, `zh-Hant`, `id`, `vi`, `th`, `hi`, `es`, `pt-BR`, `fr`, `de`. Each privacy category and the preliminary site terms have a static translated route, e.g. `/privacy/doublitz/ja/` and `/terms/ja/`. Original English routes remain unchanged, and all pages have a visible language switcher. The translated source drafts live in `i18n/legal-part1.json` and `i18n/legal-part2.json`.

**Critical:** These localized pages are pre-release planning drafts, not approved legal policies. Machine-assisted translation requires native-speaker/legal review where applicable. Verify actual Android release SDK/data collection before using any page as an app-store policy URL. Some source strings are summarized translations rather than clause-for-clause legal equivalences; finalize the canonical English policy and regenerate translations before publication.

## Unstuck Arrow v1.17 privacy audit update (29 October 2026)

Unstuck Arrow's original AdMob URL `/privacy/unstuck-arrow/` and its 13 translated-language routes now reflect the v1.17 SDK/code privacy audit rather than generic future-feature guesses. They cover UMP, AdMob, Play Games, Billing, local gameplay data, service/backup boundaries, player controls and release blockers.

**All 13 languages remain explicitly marked as pre-release drafts — not ready for Google Play/AdMob policy submission or certified GDPR compliance.** The audited build did not provide live Android traffic captures, finalized Console vendors, actual live Play Games/Billing IDs or legal operator details. The updated notices require legal accuracy review and translation review. See `docs/unstuck-arrow-privacy-release-checklist.md`.

Other games' policy pages are intentionally unchanged.
