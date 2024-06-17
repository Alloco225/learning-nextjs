import { z } from "zod";

export const UserSchema = z.object({
	id: z.number(),
	name: z.string().min(3),
	email: z.string().email(),
});
