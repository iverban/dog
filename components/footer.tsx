import Link from 'next/link'
import { Button } from './ui/button'

export default function Footer() {
  return (
    <footer className='py-4'>
      <div className='text-muted-foreground container flex max-w-5xl flex-col items-center justify-between gap-x-3 gap-y-1 text-center text-sm sm:flex-row'>
        <p>Next Clerk Shadcn &copy;{new Date().getFullYear()}</p>
        <p>
          Made by{' '}
          <Button variant='link' className='p-0' asChild>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.hamedbahram.io/'
            >
              Hamed
            </Link>
          </Button>
        </p>
      </div>
    </footer>
  )
}
