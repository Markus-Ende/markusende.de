/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface BlogEntryMetadata {
  readonly id: string;
  readonly created: string;
  readonly lastModified: string;
  readonly shortTitle: string;
  readonly fullTitle: string;
  readonly state: string;
}

// use wildcard module name to be able to import typed json data
declare module "*blog-metadata.generated.json" {
  const content: Array<BlogEntryMetadata>;
  export default content;
}

