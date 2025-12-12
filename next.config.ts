import "@shared/config/env"
import createNextIntlPlugin from "next-intl/plugin"

import type { NextConfig } from "next"

const withNextIntl = createNextIntlPlugin("./src/6_shared/i18n/index.ts")

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
}

export default withNextIntl(nextConfig)
