import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import Waver from '../assets/wavesOpacity.svg'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full text-white mt-auto z-50 bg-gradient-to-b from-accent to-black border-t border-black"
    >
      <div className="w-full">
        <img src={Waver} alt="Wave Separator" className="w-full h-auto" />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-16 max-w-6xl mx-auto">
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-extrabold tracking-wide mb-8 drop-shadow-md">
            Contact Me
          </h2>
          <p className="text-2xl mb-6 leading-relaxed drop-shadow-sm">
            Let’s create something amazing together!
          </p>
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <MapPin size={40} strokeWidth={2.2} />
            <p className="text-2xl drop-shadow-sm">Sicilia, Italia</p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 mb-10">
            <a
              href="mailto:nebugedon@gmail.com"
              className="text-2xl flex gap-3 font-medium hover:text-accent transition-colors drop-shadow-sm"
            >
              <Mail size={40} strokeWidth={2.2} />
              nebugedo@gmail.com
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-8">
            {[
              {
                href: 'https://github.com/CaimanBrujo',
                label: 'GitHub',
                Icon: Github
              },
              {
                href: 'https://www.linkedin.com/in/nicobugedo/',
                label: 'LinkedIn',
                Icon: Linkedin
              }
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white hover:text-accent transition-transform duration-300 hover:scale-125"
              >
                <Icon size={40} strokeWidth={2.2} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
