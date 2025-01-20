import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/contacts/$contactUuid')({
  component: Contact,
})

function Contact() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  )
}
