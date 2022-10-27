type Label = string | number;
type Content = string | number;
type Email = string;
type Phone = string;
type LabName = string;
type Address = string;
type Direction = 'horizontal' | 'vertical';
type Size = "xsmall" | "small" | "medium" | "large" | "xlarge";
type Color = "success" | "warning" | "danger" | "primary";

interface iContacts {
  email: Email;
  phone: Phone;
}

interface iLab {
  name: LabName;
  address: Address;
  contacts: iContacts;
}