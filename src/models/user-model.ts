import db from "../database/users.json";
import { writeFileSync } from "jsonfile";

class UserModel {
  constructor() {}

  getData() {
    return db;
  }
  writeData(data: {}) {
    writeFileSync("./src/database/users.json", data);
  }
}

const userModel = new UserModel();

export default userModel;
