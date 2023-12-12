import React, { useState } from "react";

const TodoApp = () => {
  const [form, setForm] = useState({
    fullName: "",
    age: "",
    position: "",
    phone: "",
  });

  // console.log(form)
  const [people, setPeople] = useState([]);
  // console.log(people);

  const disabledBtn =
    !form.fullName.trim() ||
    !form.age.trim() ||
    !form.position.trim() ||
    !form.phone.trim();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // setForm({ ...form, [name]: value });
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.fullName && form.age && form.position && form.phone) {
      const newPerson = {
        ...form,
        fullName: form.fullName,
        age: form.age,
        position: form.position,
        phone: form.phone,
      };
      setPeople([...people, newPerson]);
      setForm({ fullName: "", age: "", position: "", phone: "" });
    }
  };

  const handleDelete = (i) => {
    setPeople((prevPeople) =>
      prevPeople.filter((person, index) => index !== i)
    );
  };

  const handleEdit = (i) => {
    setForm({
      fullName: people[i].fullName,
      age: people[i].age,
      position: people[i].position,
      phone: people[i].phone,
    });
    setPeople((prevPeople) =>
      prevPeople.filter((person, index) => index !== i)
    );
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Todo App</h1>
      <div className="form-wrapper">
        <form className="d-flex gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="fullName"
            value={form.fullName}
            placeholder="FullName"
          />
          <input
            type="text"
            className="form-control"
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Age"
          />
          <input
            type="text"
            className="form-control"
            name="position"
            value={form.position}
            onChange={handleChange}
            placeholder="Position"
          />
          <input
            type="text"
            className="form-control"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          <button
            className={`btn ${disabledBtn ? "btn-secondary" : "btn-primary"}`}
            disabled={disabledBtn}
          >
            Add
          </button>
        </form>
      </div>
      <div className="List-wrapper w-full mt-5">
        <table className="w-100 border-1">
          <thead>
            <tr className="border-1 px-2">
              <th className="px-2">FullName</th>
              <th className="px-2">Age</th>
              <th className="px-2">Position</th>
              <th className="px-2">Phone</th>
              <th className="px-2">Edit</th>
              <th className="px-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => {
              return (
                <tr key={index} className="border-1">
                  <td className="px-2">{person.fullName}</td>
                  <td className="px-2">{person.age}</td>
                  <td className="px-2">{person.position}</td>
                  <td className="px-2">{person.phone}</td>
                  <td className="pb-2 pt-2">
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="pb-2 pt-2">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoApp;
