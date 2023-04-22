import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
const Adduser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <lable htmlFor="age">Age </lable>
        <input id="age" type="number"></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default Adduser;
