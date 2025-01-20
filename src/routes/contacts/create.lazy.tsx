import { createLazyFileRoute } from '@tanstack/react-router'
import ContactAdditionForm from "../../components/ContactAdditionForm.tsx";

export const Route = createLazyFileRoute('/contacts/create')({
    component: ContactCreationPage,
})

function ContactCreationPage() {
    return <ContactAdditionForm/>
}
