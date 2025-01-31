const {pgTable,serial,text,varchar}=require("drizzle-orm/pg-core");
export const JsonForms=pgTable('jsonforms',{
    id:serial('id').primaryKey(),
    jsonform:text('jsonform').notNull(),
    createdBy:varchar('createdBy').notNull,
    createdAt:varchar('createdAt').notNull,
})