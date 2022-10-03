import { Addresses } from "@prisma/client";

export type TCreateAddress = Omit <Addresses, "id">