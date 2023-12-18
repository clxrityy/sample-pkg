import { z } from 'zod';

export type EventsConfigToDiscriminatedUnion<T extends Record<string, z.ZodRawShape>> = {
    [K in keyof T]: Prettify<{
        type: K;
    } & Omit<z.infer<z.ZodObject<T[K]>>, "type">>;
}[keyof T];

export type Prettify<T> = {
    [K in keyof T]: T[K]
} & {}