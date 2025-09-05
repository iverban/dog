import { UserDetails } from '@/components/user-details'

export default function Dashboard() {
  return (
    <section className='py-20'>
      <div className='container max-w-5xl'>
        <h1 className='text-2xl font-bold'>Dashboard</h1>
        <p className='text-muted-foreground mt-1'>Protected dashboard page.</p>

        <div className='mt-8'>
          <UserDetails />
        </div>
      </div>
    </section>
  )
}
