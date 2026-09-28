import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anshul Kumar | Software Engineer',
  description: 'Portfolio of Anshul Kumar, a software engineer building AI, cloud, and full-stack products.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
