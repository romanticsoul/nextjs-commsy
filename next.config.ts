import "@shared/config/env"
import type { NextConfig } from "next"

import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./src/6_shared/i18n/index.ts")

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
}

export default withNextIntl(nextConfig)
