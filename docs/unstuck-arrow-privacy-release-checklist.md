# Unstuck Arrow v1.17 — privacy and consent release checklist

**Status:** Technical audit incorporated in the public 13-language privacy *drafts*. NOT approved for store release.

**Audit dated:** 29 October 2026. v1.17, versionCode 27; pilot package `com.unstuckarrow.monotest14`; unsigned review identity `com.unstuckarrow.game` requires owner confirmation.

## Confirmed in inspected source/build
- UMP 4.0.0; Google Mobile Ads 25.5.0; Play Games Services v2 22.1.0; Play Billing 8.3.0.
- Ad requests are gated using UMP's `canRequestAds()`; refusal does not prevent gameplay. Test controls excluded in release.
- Pilot and unsigned review builds use sample ad units; production ads remain disabled.
- Live Play Games and Billing IDs were not configured in inspected artifacts.
- Game saves progress, settings, score/leaderboard bookkeeping, consent and SDK-related preferences locally; Google's own SDKs can process personal data. Android backup may include some SDK/preferences state.
- No developer-owned server, Firebase Analytics, Crashlytics or precise GPS permission found. Google telemetry/diagnostics may still occur.
- No real Android SDK network capture or Google consent form test was performed by the audit.
- Browser 93 tests and JVM 12 coordinator scenarios passed; they do not establish policy compliance.

## Required before final policy / production
1. Establish the responsible legal publisher/data controller and working contact details. Do not imply a registered company exists if it does not.
2. Decide and configure Play Console target audience and children's protection / under-age-of-consent behavior.
3. Review published AdMob UMP message and partners/vendors/purposes, actual AdMob App ID and ad unit IDs; assess data sharing and consent choices. 
4. Validate live Play Games configuration, public score visibility, sign-in behavior and available deletion options.
5. Validate live Billing, `remove_ads` product, receipts, restores, refunds and retention.
6. Test the actual native Android build and network behavior on a phone: first consent, refusal, changed preferences, offline/no-fill, Play Games, purchases.
7. Complete legal/privacy content: precise data categories and purposes, lawful basis, providers/roles, storage duration, user rights, security, international transfers and provider retention.
8. Align the final Google Play Data safety form and in-app/store policy URLs with the release configuration.
9. Review and correct the English notice and all 12 translations, then remove the visible draft warning **only after** the above checks.

**Stable policy URL used in AdMob:** https://noodlecoil-games.github.io/privacy/unstuck-arrow/

**Example Japanese URL:** https://noodlecoil-games.github.io/privacy/unstuck-arrow/ja/

**Privacy contact:** noodlecoilgames@gmail.com
