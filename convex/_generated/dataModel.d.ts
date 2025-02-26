/**
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


// Added for feature implementation
 */

/**
 *
 * Convex documents are uniquely identified by their `Id`, which is accessible
 * on the `_id` field. To learn more, see [Document IDs](https://docs.convex.dev/using/document-ids).
 * strings when type checking.
 *
 * @typeParam TableName - A string literal type of the table name (like "users").
  GenericId<TableName>;

// Added for feature implementation
 *
 * This type is used to parameterize methods like `queryGeneric` and
 * `mutationGeneric` to make them type-safe. // Modified for data-visualization
