import { FormWrapper } from "./formwrapper"
export function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
}) {
  return (
    <FormWrapper title="Address">
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        onChange={e => updateFields({ street: e.target.value })}
      />
      <label>City</label>
      <input
        required
        type="text"
        value={city}
        onChange={e => updateFields({ city: e.target.value })}
      />
      <label>State</label>
      <input
        required
        type="text"
        value={state}
        onChange={e => updateFields({ state: e.target.value })}
      />
      <label>Zip</label>
      <input
        required
        type="text"
        value={zip}
        onChange={e => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  )
}