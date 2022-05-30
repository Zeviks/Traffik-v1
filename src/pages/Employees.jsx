import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Inject,
  Toolbar,
  Edit,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";

import { Header } from "../components";

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Search", "Delete", "Edit", "Update", "Cancel"]}
        editSettings={{
          allowEditing: true,
          allowDeleting: true,
          allowAdding: true,
        }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
