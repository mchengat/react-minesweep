type Permission = "admin" | "user" | "manager";
type TuplePermissions = [Permission, Permission];
type BasicUser<A = boolean, P = TuplePermissions> = {
  name: string;
  surname: string;
  age: number;
  isAdmin: A;
  permissions?: P;
};

type AdvancedUser = {
  account: number;
};

// type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AdvancedUser;

const perms: TuplePermissions = ["admin", "user"];
const user: FullUser<boolean> = {
  name: "Nick",
  surname: "Ovh",
  age: 30,
  isAdmin: true,
  account: 100,
  permissions: ["admin"],
};

interface DepartmentForPermissions {
  depName: string;
  level: number;
}

const DepsForPerms: Record<Permission, DepartmentForPermissions> = {
  admin: {
    depName: "security",
    level: 10,
  },
  user: {
    depName: "sales",
    level: 5,
  },
  manager: {
    depName: "sales",
    level: 10,
  },
};

type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AdvancedUser;
type BasicUserReadOnly = Readonly<BasicUser>;
type BasicUserRequired = Required<BasicUser>;
type BasicUserPartial = Partial<BasicUser>;

type BasicUserReadOnlyRequired = Readonly<Required<BasicUserPartial>>;
type BasicUserWithoutPermissions = Omit<BasicUser, "permissions">;
type PermissionsWithoutAdmin = Exclude<Permission, "admin">;

function getFirst<T>(arr: T[]): T {
  return arr[0];
}
type BasicFunction = () => string[];
type getFirstReturnType = ReturnType<BasicFunction>;
