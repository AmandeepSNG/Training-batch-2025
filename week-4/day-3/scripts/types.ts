type User = {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  address: Address,
  phone: string,
  role: Role,
  company: Company
}
type Company = {
  name: string,
  url: string
}
type Role = 'CUSTOMER' | 'ADMIN' | 'SUPER_ADMIN'
type Address = {
  house_no: string,
  street: string,
  zip_code: number,
  city: string
}


type APIMethods = 'GET' | 'POST' | 'PUT' | 'DELETE'

type APIResponse = {
  status: number,
  message: string,
  data: unknown
}