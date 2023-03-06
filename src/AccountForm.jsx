import { FormWrapper } from "./FormWrapper"


export function AccountForm({
  experience,
  companyName,
  presentlyWorking,
  ctc,
  willingToRelocate,
  noticePeriod,
  updateFields,
}) {
  return (
    <FormWrapper title="Account Creation">
      <label>Experience</label>
      <input
        autoFocus
        required
        type="experience"
        value={experience}
        onChange={e => updateFields({ experience: e.target.value })}
      />
      <label>Company Name</label>
      <input
        required
        type="companyName"
        value={companyName}
        onChange={e => updateFields({ companyName: e.target.value })}
      />
      <label>Presently Working</label>
      <input
        autoFocus
        required
        type="presentlyWorking"
        value={presentlyWorking}
        onChange={e => updateFields({ presentlyWorking: e.target.value })}
      />
      <label>CTC</label>
      <input
        required
        type="ctc"
        value={ctc}
        onChange={e => updateFields({ ctc: e.target.value })}
      />
      <label>Willing to relocate</label>
      <input
        autoFocus
        required
        type="willingToRelocate"
        value={willingToRelocate}
        onChange={e => updateFields({ willingToRelocate: e.target.value })}
      />
      <label>Company Name</label>
      <input
        required
        type="noticePeriod"
        value={noticePeriod}
        onChange={e => updateFields({ noticePeriod: e.target.value })}
      />
    </FormWrapper>
  )
}
