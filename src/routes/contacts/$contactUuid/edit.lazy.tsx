import { createLazyFileRoute } from '@tanstack/react-router'
import ContactAdditionForm from "../../../components/ContactAdditionForm.tsx";
import { useGetUserByIdQuery } from "../../../hooks/useGetUserByIdQuery.tsx";

export const Route = createLazyFileRoute('/contacts/$contactUuid/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  const { contactUuid } = Route.useParams()
  const { data } = useGetUserByIdQuery(contactUuid)

  return <ContactAdditionForm isEdit editData={data} contactUuid={contactUuid} />
}
