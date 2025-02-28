"use strict";
// const str: string = "Hello world"
// const num: number = 40;
// const bool: boolean = false;
// const arr: [string] =["hello"]
// const arr2: string[] = ["hello 2"]
// const arrOfNum: [number] = [1]
// const arrOfNum2: number[] =[3]
// const ArrOFNum: Function =() => {}
// const variable: any = ''
// interface Example {
//   getBrandName: Function;
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Roles_enum;
(function (Roles_enum) {
    Roles_enum["ADMIN"] = "ADMIN";
    Roles_enum["CUSTOMER"] = "CUSTOMER";
    Roles_enum["SUPER_ADMIN"] = "SUPER-ADMIN";
})(Roles_enum || (Roles_enum = {}));
const API_URL = {
    USER: 'http://localhost:3000/users'
};
const TABLE_HEADING_ELEMENT = document.getElementById('table-heading-row');
const TABLE_HEADINGS = ["ID", "Name", "Email", "Address", "Phone", "Role", "Company website", "Actions"];
const TABLE_BODY_ROWS_ELEMENT = document.getElementById('table-body-rows');
const loadTableHeadings = (headings) => {
    TABLE_HEADING_ELEMENT.innerHTML = '';
    headings.forEach(heading => {
        TABLE_HEADING_ELEMENT.innerHTML += createTableHeadingElement(heading);
    });
};
const createTableHeadingElement = (heading) => {
    return `
  <th>${heading}</th>
  `;
};
const loadTableRows = (rows) => {
    TABLE_BODY_ROWS_ELEMENT.innerHTML = '';
    rows.forEach(row => {
        TABLE_BODY_ROWS_ELEMENT.innerHTML += createTableRowElement(row);
    });
};
const onEditClick = (userId) => {
};
const onDeleteClick = (userId) => {
};
const createTableRowElement = (rowDetails) => {
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
            </tr>`;
};
window.addEventListener('load', () => __awaiter(void 0, void 0, void 0, function* () {
    loadTableHeadings(TABLE_HEADINGS);
    const userList = yield fetchUserList();
    loadTableRows(userList);
}));
const fetchUserList = () => __awaiter(void 0, void 0, void 0, function* () {
    const apiResponse = yield fetch(API_URL.USER);
    const response = yield apiResponse.json();
    return response;
});
