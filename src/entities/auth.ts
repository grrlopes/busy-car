class Auth {
  public login: string
  public password: string

  constructor(props: Required<Auth>) {
    this.login = props.login;
    this.password = props.password;
  };
}

export { Auth };
