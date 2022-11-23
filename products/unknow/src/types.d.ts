type Label = string | number;
interface MenuItem {
  id: string | number;
  url?: string;
  name: string;
  child?: MenuItem[];
  icon?: string;
};
type Email = string;
type Phone = string;
type LabName = string;
type Address = string;
type Direction = 'horizontal' | 'vertical';
type Size = "xsmall" | "small" | "medium" | "large" | "xlarge";
type Color = "success" | "warning" | "danger" | "primary" | "secondary";

interface iContacts {
  email: Email;
  phone: Phone;
}

interface iLab {
  name: LabName;
  address: Address;
  contacts: iContacts;
}