import { z } from 'zod';

export type EventsConfigToDiscriminatedUnion<T extends Record<string, z.ZodRawShape>> = {
    [K in keyof T]: Prettify<{
        type: K;
    } & z.infer<z.ZodObject<T[K]>>>;
}[keyof T];

export type Prettify<T> = {
    [K in keyof T]: T[K]
} & {}