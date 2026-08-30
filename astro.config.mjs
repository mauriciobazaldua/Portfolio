import { defineConfig } from "astro/config";

export default defineConfig({
  // Dev-only overlay; disabled so it doesn't bleed into design review
  // screenshots (it never ships in `astro build` output either way).
  devToolbar: { enabled: false },
});
