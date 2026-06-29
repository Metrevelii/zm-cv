import { ContactItem } from '../contact-item'
import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon } from '../icons'

type ContactBarProps = {
  email: string
  phone: string
  location: string
  linkedin?: string
  github?: string
  instagram?: string
}

export function ContactBar({ email, phone, location, linkedin, github, instagram }: ContactBarProps) {
  return (
    <div className="grid grid-cols-1 gap-3 border-y border-white/10 bg-page px-10 py-5 text-white md:grid-cols-2">
      <ContactItem icon={<MailIcon className="h-4 w-4" />}>{email}</ContactItem>
      <ContactItem icon={<PhoneIcon className="h-4 w-4" />}>{phone}</ContactItem>
      <ContactItem icon={<MapPinIcon className="h-4 w-4" />}>{location}</ContactItem>
      {linkedin && <ContactItem icon={<LinkedinIcon className="h-4 w-4" />}>{linkedin}</ContactItem>}
      {github && <ContactItem icon={<GithubIcon className="h-4 w-4" />}>{github}</ContactItem>}
      {instagram && <ContactItem icon={<InstagramIcon className="h-4 w-4" />}>{instagram}</ContactItem>}
    </div>
  )
}
