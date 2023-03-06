import { FormWrapper } from "./FormWrapper"

export function UserForm({
  firstName,
  lastName,
  phone,
  email,
  updateFields,
}) {
  return (
    <FormWrapper title="Personal Information">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={e => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={e => updateFields({ lastName: e.target.value })}
      />
      <label>Phone</label>
      <input
        required
        min={10}
        type="text"
        value={phone}
        onChange={e => updateFields({ phone: e.target.value })}
      />
      <label>Email</label>
      <input
        required
        min={10}
        type="email"
        value={email}
        onChange={e => updateFields({ email: e.target.value })}
      />
    </FormWrapper>
  )
}
