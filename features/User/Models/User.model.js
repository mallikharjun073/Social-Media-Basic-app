export default class UserModel{
    constructor(id,name,email,password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static UserDB = [];
    static addUsers(name, email, password){
        const datatoInsert  = new UserModel(this.UserDB.length+1, name, email, password);
        this.UserDB.push(datatoInsert);
        return datatoInsert;
    }

    static getUsers(){
        return this.UserDB;
    }

    static checkLogin(email, password){
        const isValid = this.UserDB.find((user) => user.email == email && user.password == password);
        return isValid;
    }
}