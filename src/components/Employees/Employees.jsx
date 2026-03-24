import styles from "./Employees.module.css";
import MinorCaption from "../UI/MinorCaption/MinorCaption.jsx";

export default function Employees() {
  const employees = [
    {
      id: 1,
      imageUrl: "/data/images/656336264.jpg",
      imageAlt: "Фото Телегина Р.Е.",
      name: "Телегин Руслан Евгеньевич",
      post: "Адвокат, управляющий партнер",
    },
    {
      id: 2,
      imageUrl: "/data/images/28001200.png",
      imageAlt: "Фото Пятницкого К.С.",
      name: "Пятницкий Кирилл Сергеевич",
      post: "Адвокат, партнер",
    },
    {
      id: 3,
      imageUrl: "/data/images/38001200.png",
      imageAlt: "Фото Шелухина К.Ю.",
      name: "Шелухин Константин Юрьевич",
      post: "Адвокат, партнер",
    },
    {
      id: 4,
      imageUrl: "/data/images/48001200.png",
      imageAlt: "Фото Семенина К.Б.",
      name: "Семенин Константин Борисович",
      post: "Адвокат",
    },
  ];

  return (
    <div className={styles.employees}>
      {employees.map((employee) => (
        <figure key={employee.id} className={styles.employees__employeecard}>
          <img
            className={styles.employees__employeeimg}
            src={employee.imageUrl}
            alt={employee.imageAlt}
          />
          <MinorCaption style={{maxWidth: "90%", marginTop: "20px"}}>{employee.name}</MinorCaption>
          <span className={styles.employees__minorcaption}>
            {employee.post}
          </span>
        </figure>
      ))}
    </div>
  );
}
