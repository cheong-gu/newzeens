/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    // FIXME: MOCK_DATA 용. 프로덕션 빌드 시 삭제
    domains: ['velog.velcdn.com']
  }
}

module.exports = nextConfig
