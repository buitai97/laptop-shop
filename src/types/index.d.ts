import { Role, User } from "@prisma/client";

type UserRole = User & Role

declare global {
    namespace Express {
        interface User extends User {
            role?: Role
        }
    }
}