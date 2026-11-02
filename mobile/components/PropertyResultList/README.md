Class prefix `.c-property-result-list`. Styles ship in `components/bundle.css`; load `c-property-result-list.css` alone only outside this system. Behaviour: `c-property-result-list.js`.

Reuses the actual MEL onboarding `high-fidelity/src/property-results/property-result-list.{js,css}` composition and geometry.
`propertyResultListMarkup(properties, {showcase:false, theme:'light'})` returns the existing mobile card/row/metric composition.
Added optional `theme:'dark'`; light stays the default for compatibility. Input fields: address, beds, baths, city, price, image.
Type roles retained: `.t-body-strong` (15px/500), `.t-caption` (12px/500), `.t-money-sm` (15px/600).
The original onboarding distribution is unchanged. The dark preview consumes this shared implementation.
