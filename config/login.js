const loginFields = [
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },
];

class signupFieldsNew {
  constructor(labelText, labelFor, id, name, autoComplete, placeholder) {
    this.labelText = labelText;
    this.labelFor = labelText;
    this.id = labelText;
    this.name = labelText;
    this.autoComplete = labelText;
    this.placeholder = labelText;
  }

  set isRequired(isRequired) {
    return (this.isRequired = isRequired);
  }
  set type(type) {
    return (this.type = type);
  }
}

const signupFields = [
  {
    labelText: "Username",
    labelFor: "username",
    id: "username",
    name: "username",
    type: "text",
    autoComplete: "username",
    isRequired: true,
    placeholder: "Username",
  },
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },
  {
    labelText: "Confirm Password",
    labelFor: "confirm-password",
    id: "confirm-password",
    name: "confirm-password",
    type: "password",
    autoComplete: "confirm-password",
    isRequired: true,
    placeholder: "Confirm Password",
  },
  {
    labelText: "gender",
    labelFor: "gender",
    id: "gender",
    name: "genderd",
    type: "checkbox",
    autoComplete: "confirm-password",
    isRequired: true,
    placeholder: "Confirm Password",
  },
];

export { loginFields, signupFields, signupFieldsNew };
