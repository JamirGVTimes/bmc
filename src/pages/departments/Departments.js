import Department from "./Department";

export default function Departments({ departments }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "2rem 3rem",
      }}
    >
      {departments.map((department) => {
        return <Department key={department._id} department={department} />;
      })}
    </div>
  );
}
