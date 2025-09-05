import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Header() {
  return (
    <header className='py-6'>
      <nav className='container flex max-w-5xl items-center justify-between'>
        <ul className='flex gap-10 text-sm font-semibold'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/dashboard'>Dashboard</Link>
          </li>
        </ul>

        <div className='flex items-center justify-between gap-6'>
          <ThemeToggle />

          <SignedOut>
            <SignInButton>
              <Button size='sm'>Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}
