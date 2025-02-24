
const API_URL = {
  USER: 'http://localhost:3000/users'
}
const TABLE_HEADING_ELEMENT = document.getElementById('table-heading-row')
const TABLE_HEADINGS = ["ID", "Name", "Email", "Address", "Phone", "Role", "Company website", "Actions"]

const TABLE_BODY_ROWS_ELEMENT = document.getElementById('table-body-rows')
const loadTableHeadings = (headings) => {
  TABLE_HEADING_ELEMENT.innerHTML = ''
  headings.forEach(heading => {
    TABLE_HEADING_ELEMENT.innerHTML += createTableHeadingElement(heading)
  })
}

const createTableHeadingElement = heading => {
  return `
  <th>${heading}</th>
  `
}
const loadTableRows = rows => {
  TABLE_BODY_ROWS_ELEMENT.innerHTML = ''
  rows.forEach(row => {
    TABLE_BODY_ROWS_ELEMENT.innerHTML += createTableRowElement(row)
  })
}
const onEditClick = userId => {
}

const onDeleteClick = userId => {
  
}
const createTableRowElement = rowDetails => {
  return `
              <tr>
              <td>${rowDetails.id}</td>

              <td>${rowDetails.first_name + " " + rowDetails.last_name}</td>
              <td>${rowDetails.email}</td>
              <td>${rowDetails.address.house_no + ", " + rowDetails.address.street + ", " + rowDetails.address.city}</td>
              <td>${rowDetails.phone}</td>
              <td>${rowDetails.role}</td>
              <td><a href=${rowDetails.company.url}>${rowDetails.company.name}</a></td>

              <td>
                <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons"
                    data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons"
                    data-toggle="tooltip" title="Delete">&#xE872;</i></a>
              </td>
            </tr>`
}
window.addEventListener('load', async () => {
  loadTableHeadings(TABLE_HEADINGS)
  const userList = await fetchUserList()
  loadTableRows(userList)

})

const fetchUserList = async () => {
    const apiResponse = await fetch(API_URL.USER)
    const response = await apiResponse.json()
    return response
}