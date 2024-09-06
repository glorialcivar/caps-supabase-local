import { BaseUser as ArtisnBaseUser } from "@artisan-commerce/types";
import { User as ArtisnUser } from "@artisan-commerce/types";

export interface BaseUser extends ArtisnBaseUser {
  privacyAcceptDate?: string | null;
}

export interface User extends ArtisnUser {
  privacyAcceptDate?: string | null;
}
