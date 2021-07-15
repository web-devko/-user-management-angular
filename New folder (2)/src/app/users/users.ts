export interface User {
  id: number;
  login: string;
  password: string;
  role: UserRole;
}

enum UserRole {
  Admin = 'Admin',
  User = 'User',
  Moderator = 'Moderator',
}


