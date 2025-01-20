import { createLazyFileRoute } from '@tanstack/react-router'
import Contacts from "./contacts/index.lazy.tsx";

export const Route = createLazyFileRoute('/')({
  component: Contacts,
})
