Class prefix `.c-signup-options`. Styles ship in `components/bundle.css`; load `c-signup-options.css` alone only outside this system. No script.

## Purpose
Shared mobile sign-up choices for the MEL onboarding prototype and future Radius mobile entry points.

## Source and ownership
This folder is the faithful consumer copy of `/Users/radius/Desktop/Design OS/Radius UI Design System/components/c-signup-options/c-signup-options.css`. It consumes `foundations/build/radius.css` for spacing, typography, surfaces, and control geometry.

## Supported composition
- `providers`: Google, Apple, and email choices in a vertical 24px group.
- `email`: a labeled email-only field and stacked actions.
- Provider buttons keep equal Radius control geometry. Google uses its dark official theme and standard multicolor G on white; Apple uses its official white button treatment and Apple-provided black mark.

## Assets and behavior
The Google mark is served from `https://developers.google.com/identity/images/g-logo.png`. The Apple mark uses Apple's official Sign in with Apple logo endpoint. Provider clicks in the MEL prototype remain local simulations; no auth SDK is loaded and no credentials are persisted.

## Sources
- Google Identity, Sign in with Google Branding Guidelines: https://developers.google.com/identity/branding-guidelines?hl=en
- Apple Human Interface Guidelines, Sign in with Apple: https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple
- Apple Developer Documentation, Displaying Sign in with Apple buttons on the web: https://developer.apple.com/documentation/signinwithapple/displaying-sign-in-with-apple-buttons-on-the-web
