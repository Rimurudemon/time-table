import TimetableGenerator from '@/components/TimetableGenerator'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' }
  ]
}

export default function Home() {
  return (
    <main className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>
        Personalized Timetable Generator
      </h1>
      <TimetableGenerator />
    </main>
  )
}
