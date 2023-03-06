import { FormWrapper } from "./FormWrapper";
export function AddressForm({
  education_level,
  university_college,
  updateFields,
}) {
  return (
    <FormWrapper title="Address">

      <label>Level Of Education</label>
      <input
        required
        type="text"
        value={education_level}
        onChange={e => updateFields({ education_level: e.target.value })}
      />
      <label>University College</label>
      <input
        required
        type="text"
        value={university_college}
        onChange={e => updateFields({ university_college: e.target.value })}
      />
    </FormWrapper>
  )
}
