// class DOM {
//   private TABLE_HEADING_ELEMENT: HTMLElement = this.getElementById('table-heading-row')
//   private TABLE_BODY_ELEMENT: HTMLElement = this.getElementById('table-body-row')
//   private HEADING_COLUMNS: string[] = []
//   private tableData: User[] = []
//   constructor(props: { headingColumns: string[], tableData: User[] }) {
//     this.HEADING_COLUMNS = props.headingColumns
//     this.tableData = props.tableData
//   }
//   public RenderTable () {
//     this.clearHTML([this.TABLE_BODY_ELEMENT, this.TABLE_HEADING_ELEMENT])
//     this.renderTableHeader(this.HEADING_COLUMNS)
//     this.renderTableRows(this.tableData)
//   }
//   private renderTableRows (rows: User[]) {
//     rows.forEach(r => {
//       const rowDetails = this.createRow(r)
//       this.insertRowToTableBody(this.TABLE_BODY_ELEMENT, rowDetails)
//     })
//   }
//   private createRow (rowDetails: User): string {
//     return `
//               <tr>
//               <td>${rowDetails.id}</td>

//               <td>${rowDetails.first_name + " " + rowDetails.last_name}</td>
//               <td>${rowDetails.email}</td>
//               <td>${rowDetails.address.house_no + ", " + rowDetails.address.street + ", " + rowDetails.address.city}</td>
//               <td>${rowDetails.phone}</td>
//               <td>${rowDetails.role == 'SUPER_ADMIN' ? 'SUPER ADMIN' : rowDetails.role}</td>
//               <td><a target="_blank" href=${rowDetails.company.url}>${rowDetails.company.name}</a></td>

//               <td>
//                 <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons"
//                     data-toggle="tooltip" title="Edit">&#xE254;</i></a>
//                 <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons"
//                     data-toggle="tooltip" title="Delete">&#xE872;</i></a>
//               </td>
//             </tr>`
//   }
//   private insertRowToTableBody (tableBodyElement: HTMLElement, row: string) {
//     tableBodyElement.innerHTML += row
//   }
//   private renderTableHeader (headings: string[]) {
//     headings.forEach(h => {
//       const headerHTML = this.createHeaderElement(h)
//       this.insertHeaderToTable(this.TABLE_HEADING_ELEMENT, headerHTML)
//     })
//   }
//   private createHeaderElement (header: string): string {
//     if (header === 'xyz') return `<th id="xyz" class="xyz">${header}</th>`
//     return `<th>${header}</th>`
//   }
//   private insertHeaderToTable (tableHeaderElement: HTMLElement, header: string) {
//     tableHeaderElement.innerHTML += header
//   }
//   private getElementById (elementId: string): HTMLElement {
//     return document.getElementById(elementId) as HTMLElement
//   }

//   private clearHTML (element: HTMLElement | HTMLElement[]) {
//     if (Array.isArray(element)) {
//       // element.forEach(e => e.innerHTML = '')
//       element.every(e => e.innerHTML = '')
//     } else {
//       element.innerHTML = ''
//     }
//   }

// }

class DOM {
  private TABLE_HEADING_ELEMENT: HTMLElement = this.getElementById('table-heading-row')
  private TABLE_BODY_ELEMENT: HTMLElement = this.getElementById('table-body-rows')
  private userList: User[] = []
  private tableHeadings: string[] = []
  constructor(props: { userList: User[], headings: string[], }) {
    this.userList = props.userList
    this.tableHeadings = props.headings
  }
  private getElementById (id: string): HTMLElement {
    return document.getElementById(id) as HTMLElement
  }
  public RenderTable () {
    this.clearHTML([this.TABLE_HEADING_ELEMENT, this.TABLE_BODY_ELEMENT])
    this.renderTableHeaders(this.tableHeadings)
    this.createTable(this.TABLE_BODY_ELEMENT as HTMLTableElement, this.userList)
  }
  private clearHTML (element: HTMLElement | HTMLElement[]): void {
    if (Array.isArray(element)) {
      element.forEach(e => e.innerHTML = '')
    } else {
      element.innerHTML = ''
    }
  }

  private renderTableHeaders (headersColumns: string[]) {
    headersColumns.forEach(header => {
      const heading = this.createHeaderCell(header)
      this.insertHeadingIntoTableHeader(this.TABLE_HEADING_ELEMENT, heading)
    })
  }
  private createHeaderCell (name: string): string {
    return `<th>${name}</th>`
  }
  private insertHeadingIntoTableHeader (TableHeader: HTMLElement, header: string) {
    TableHeader.innerHTML += header
  }
  private createTable (table: HTMLTableElement, rows: User[]) {
    rows.forEach(r => {
      const rowDetails = this.createRow(r)
      this.insertRowIntoTable(table, rowDetails)
    })
  }
  private insertRowIntoTable (table: HTMLTableElement, rowHTML: string) {
    table.innerHTML += rowHTML
  }
  private createRow (rowDetails: User) {
    return `
              <tr>
              <td>${rowDetails.id}</td>

              <td>${rowDetails.first_name + " " + rowDetails.last_name}</td>
              <td>${rowDetails.email}</td>
              <td>${rowDetails.address.house_no + ", " + rowDetails.address.street + ", " + rowDetails.address.city}</td>
              <td>${rowDetails.phone}</td>
              <td>${rowDetails.role == 'SUPER_ADMIN' ? 'SUPER ADMIN': rowDetails.role}</td>
              <td><a target="_blank" href=${rowDetails.company.url}>${rowDetails.company.name}</a></td>

              <td>
                <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons"
                    data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons"
                    data-toggle="tooltip" title="Delete">&#xE872;</i></a>
              </td>
            </tr>`
  }

}