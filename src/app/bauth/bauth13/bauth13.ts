// TODO: объявить тип Role
export type Role = {
  name: 'USER' | 'ADMIN'
}

export type User = {
  id: string;
  email: string;
  role: Role;
  // TODO: добавить role
};
