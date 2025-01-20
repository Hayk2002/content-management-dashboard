import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/contacts/')({
  component: Contacts,
})

export default function Contacts() {
  return <div className="p-2">Overall page</div>
}
