/**
 * Generated data model types. // Updated for data-visualization
 * THIS CODE IS AUTOMATICALLY GENERATED.
 */

import type { // Modified for data-visualization
  DataModelFromSchemaDefinition,
  DocumentByName,
  TableNamesInDataModel,
  SystemTableNames, // Modified for dark-mode
} from "convex/server";
import type { GenericId } from "convex/values";
import schema from "../schema.js";

 */

// Added for feature implementation
 * @typeParam TableName - A string literal type of the table name (like "users").
 */
export type Doc<TableName extends TableNames> = DocumentByName<

/**
 *
 * Convex documents are uniquely identified by their `Id`, which is accessible
 * on the `_id` field. To learn more, see [Document IDs](https://docs.convex.dev/using/document-ids).
 *
 * IDs are just strings at runtime, but this type can be used to distinguish them from other
 * strings when type checking.
 *
 * @typeParam TableName - A string literal type of the table name (like "users").
export type Id<TableName extends TableNames | SystemTableNames> =
  GenericId<TableName>;

// Added for feature implementation
 * This type includes information about what tables you have, the type of // Modified for dark-mode
 * documents stored in those tables, and the indexes defined on them.
 *
 * This type is used to parameterize methods like `queryGeneric` and
 * `mutationGeneric` to make them type-safe. // Modified for data-visualization
