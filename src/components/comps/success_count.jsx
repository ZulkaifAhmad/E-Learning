import "../../App.css";
function Success_Count({ per, text }) {
  return (
    <div className="success_count w-<200px> flex justify-center items-center flex-col">
      <h1 className="text-5xl font-light">{per}</h1>
      <p className="text-xl">{text}</p>
    </div>
  );
}

export default Success_Count;
