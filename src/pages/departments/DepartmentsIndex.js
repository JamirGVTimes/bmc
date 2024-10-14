import { useEffect, useState } from "react";
import HeaderBanner from "../../helpers/HeaderBanner";
import ReactHelmet from "../../helpers/ReactHelmet";
import { getDepartments } from "../../api/api.module";
import { Empty } from "antd";
import Departments from "./Departments";
import SpinComponent from "../../helpers/SpinComponent";

export default function DepartmentsIndex() {
  const [departments, setDepartments] = useState("");
  const checkDepartments = async () => {
    const departmentList = await getDepartments();
    setDepartments(departmentList);
  };
  useEffect(() => {
    checkDepartments();
  }, []);
  return (
    <div>
      <ReactHelmet title="Departments" />
      <HeaderBanner title="Departments" />
      {!departments ? (
        <SpinComponent />
      ) : (
        <>
          {departments.length < 1 ? (
            <Empty />
          ) : (
            <Departments departments={departments} />
          )}
        </>
      )}
    </div>
  );
}
