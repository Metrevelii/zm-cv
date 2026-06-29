import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

function IconWrapper(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  )
}

export function MailIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </IconWrapper>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </IconWrapper>
  )
}

export function MapPinIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </IconWrapper>
  )
}

export function GithubIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M15 22v-4.084a3.7 3.7 0 0 0-1.024-2.755 5.428 5.428 0 0 0 3.85-1.555 5.392 5.392 0 0 0 1.526-4.41 4.282 4.282 0 0 0-1.156-3.247 4.273 4.273 0 0 0-.121-3.243s-1.005-.288-3.156 1.2a10.957 10.957 0 0 0-5.838 0c-2.151-1.488-3.156-1.2-3.156-1.2a4.273 4.273 0 0 0-.121 3.243 4.282 4.282 0 0 0-1.156 3.247 5.392 5.392 0 0 0 1.526 4.41 5.428 5.428 0 0 0 3.85 1.555A3.7 3.7 0 0 0 9 17.916V22" />
      <path d="M9 20c-3 1-5-1-6-2" />
    </IconWrapper>
  )
}

export function LinkedinIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </IconWrapper>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <path d="M17.5 6.5h0" />
    </IconWrapper>
  )
}
