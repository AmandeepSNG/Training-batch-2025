const Users: User[] = [{
  id: 1,
  first_name: 'John',
  last_name: 'Doe',
  email: 'john.doe@example.com',
  address: {
    house_no: '123',
    street: 'Main St',
    zip_code: 12345,
    city: 'Mohali'
  },
  phone: '123-456-7890',
  role: 'CUSTOMER',
  company: {
    name: 'Company A',
    url: 'http://companya.com'
  }
}, {
  id: 2,
  first_name: 'Jane',
  last_name: 'Smith',
  email: 'jane.smith@example.com',
  address: {
    house_no: '456',
    street: 'Second St',
    zip_code: 67890,
    city: 'Mohali'
  },
  phone: '234-567-8901',
  role: 'ADMIN',
  company: {
    name: 'Company B',
    url: 'http://companyb.com'
  }
}, {
  id: 3,
  first_name: 'Alice',
  last_name: 'Johnson',
  email: 'alice.johnson@example.com',
  address: {
    house_no: '789',
    street: 'Third St',
    zip_code: 11223,
    city: 'Mohali'
  },
  phone: '345-678-9012',
  role: 'SUPER_ADMIN',
  company: {
    name: 'Company C',
    url: 'http://companyc.com'
  }
}, {
  id: 4,
  first_name: 'Bob',
  last_name: 'Brown',
  email: 'bob.brown@example.com',
  address: {
    house_no: '101',
    street: 'Fourth St',
    zip_code: 44556,
    city: 'Mohali'
  },
  phone: '456-789-0123',
  role: 'CUSTOMER',
  company: {
    name: 'Company D',
    url: 'http://companyd.com'
  }
}, {
  id: 5,
  first_name: 'Charlie',
  last_name: 'Davis',
  email: 'charlie.davis@example.com',
  address: {
    house_no: '202',
    street: 'Fifth St',
    zip_code: 77889,
    city: 'Mohali'
  },
  phone: '567-890-1234',
  role: 'ADMIN',
  company: {
    name: 'Company E',
    url: 'http://companye.com'
  }
}, {
  id: 6,
  first_name: 'David',
  last_name: 'Miller',
  email: 'david.miller@example.com',
  address: {
    house_no: '303',
    street: 'Sixth St',
    zip_code: 99000,
    city: 'Mohali'
  },
  phone: '678-901-2345',
  role: 'SUPER_ADMIN',
  company: {
    name: 'Company F',
    url: 'http://companyf.com'
  }
}, {
  id: 7,
  first_name: 'Eve',
  last_name: 'Wilson',
  email: 'eve.wilson@example.com',
  address: {
    house_no: '404',
    street: 'Seventh St',
    zip_code: 11122,
    city: 'Mohali'
  },
  phone: '789-012-3456',
  role: 'CUSTOMER',
  company: {
    name: 'Company G',
    url: 'http://companyg.com'
  }
}, {
  id: 8,
  first_name: 'Frank',
  last_name: 'Moore',
  email: 'frank.moore@example.com',
  address: {
    house_no: '505',
    street: 'Eighth St',
    zip_code: 33344,
    city: 'Mohali'
  },
  phone: '890-123-4567',
  role: 'ADMIN',
  company: {
    name: 'Company H',
    url: 'http://companyh.com'
  }
}, {
  id: 9,
  first_name: 'Grace',
  last_name: 'Taylor',
  email: 'grace.taylor@example.com',
  address: {
    house_no: '606',
    street: 'Ninth St',
    zip_code: 55566,
    city: 'Mohali'
  },
  phone: '901-234-5678',
  role: 'SUPER_ADMIN',
  company: {
    name: 'Company I',
    url: 'http://companyi.com'
  }
}, {
  id: 10,
  first_name: 'Hank',
  last_name: 'Anderson',
  email: 'hank.anderson@example.com',
  address: {
    house_no: '707',
    street: 'Tenth St',
    zip_code: 77788,
    city: 'Mohali'
  },
  phone: '012-345-6789',
  role: 'CUSTOMER',
  company: {
    name: 'Company J',
    url: 'http://companyj.com'
  }
}];

const TABLE_HEADINGS: string[] = ["ID", "Name", "Email", "Address", "Phone", "Role", "Company website", "Actions"]