# Bolt's Journal - MoisAuto Agenciador

## 2025-05-14 - Initial Performance Review
**Learning:** The application is a static site with local data processing (localStorage). Main performance bottlenecks are redundant DOM updates during filtering/search and unoptimized image loading for below-the-fold content. Reusing `Intl.NumberFormat` is a small but valuable micro-optimization in a codebase that formats prices frequently.
**Action:** Implement debouncing for search/filters and lazy loading for images. Reuse `Intl.NumberFormat` instance.
