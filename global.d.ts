import { PrismaClient } from "@next/font";

declare global {
    namespace globalThis{
        var prismadb: PrismaClient
    }
}