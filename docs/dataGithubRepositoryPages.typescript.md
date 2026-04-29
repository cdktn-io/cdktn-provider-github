# `dataGithubRepositoryPages` Submodule <a name="`dataGithubRepositoryPages` Submodule" id="@cdktn/provider-github.dataGithubRepositoryPages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryPagesA <a name="DataGithubRepositoryPagesA" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pages github_repository_pages}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.Initializer"></a>

```typescript
import { dataGithubRepositoryPages } from '@cdktn/provider-github'

new dataGithubRepositoryPages.DataGithubRepositoryPagesA(scope: Construct, id: string, config: DataGithubRepositoryPagesAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig">DataGithubRepositoryPagesAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig">DataGithubRepositoryPagesAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGithubRepositoryPagesA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.isConstruct"></a>

```typescript
import { dataGithubRepositoryPages } from '@cdktn/provider-github'

dataGithubRepositoryPages.DataGithubRepositoryPagesA.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.isTerraformElement"></a>

```typescript
import { dataGithubRepositoryPages } from '@cdktn/provider-github'

dataGithubRepositoryPages.DataGithubRepositoryPagesA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.isTerraformDataSource"></a>

```typescript
import { dataGithubRepositoryPages } from '@cdktn/provider-github'

dataGithubRepositoryPages.DataGithubRepositoryPagesA.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.generateConfigForImport"></a>

```typescript
import { dataGithubRepositoryPages } from '@cdktn/provider-github'

dataGithubRepositoryPages.DataGithubRepositoryPagesA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGithubRepositoryPagesA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubRepositoryPagesA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubRepositoryPagesA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGithubRepositoryPagesA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.apiUrl">apiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.buildStatus">buildStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.buildType">buildType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.cname">cname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.custom404">custom404</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.htmlUrl">htmlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.httpsEnforced">httpsEnforced</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.public">public</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.source">source</a></code> | <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList">DataGithubRepositoryPagesSourceAList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.repository">repository</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `apiUrl`<sup>Required</sup> <a name="apiUrl" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

---

##### `buildStatus`<sup>Required</sup> <a name="buildStatus" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.buildStatus"></a>

```typescript
public readonly buildStatus: string;
```

- *Type:* string

---

##### `buildType`<sup>Required</sup> <a name="buildType" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.buildType"></a>

```typescript
public readonly buildType: string;
```

- *Type:* string

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.cname"></a>

```typescript
public readonly cname: string;
```

- *Type:* string

---

##### `custom404`<sup>Required</sup> <a name="custom404" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.custom404"></a>

```typescript
public readonly custom404: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `htmlUrl`<sup>Required</sup> <a name="htmlUrl" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.htmlUrl"></a>

```typescript
public readonly htmlUrl: string;
```

- *Type:* string

---

##### `httpsEnforced`<sup>Required</sup> <a name="httpsEnforced" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.httpsEnforced"></a>

```typescript
public readonly httpsEnforced: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.public"></a>

```typescript
public readonly public: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.source"></a>

```typescript
public readonly source: DataGithubRepositoryPagesSourceAList;
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList">DataGithubRepositoryPagesSourceAList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryPagesAConfig <a name="DataGithubRepositoryPagesAConfig" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig.Initializer"></a>

```typescript
import { dataGithubRepositoryPages } from '@cdktn/provider-github'

const dataGithubRepositoryPagesAConfig: dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig.property.repository">repository</a></code> | <code>string</code> | The repository name to get GitHub Pages information for. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pages#id DataGithubRepositoryPagesA#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository name to get GitHub Pages information for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pages#repository DataGithubRepositoryPagesA#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pages#id DataGithubRepositoryPagesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubRepositoryPagesSourceA <a name="DataGithubRepositoryPagesSourceA" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceA.Initializer"></a>

```typescript
import { dataGithubRepositoryPages } from '@cdktn/provider-github'

const dataGithubRepositoryPagesSourceA: dataGithubRepositoryPages.DataGithubRepositoryPagesSourceA = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryPagesSourceAList <a name="DataGithubRepositoryPagesSourceAList" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.Initializer"></a>

```typescript
import { dataGithubRepositoryPages } from '@cdktn/provider-github'

new dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.get"></a>

```typescript
public get(index: number): DataGithubRepositoryPagesSourceAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGithubRepositoryPagesSourceAOutputReference <a name="DataGithubRepositoryPagesSourceAOutputReference" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.Initializer"></a>

```typescript
import { dataGithubRepositoryPages } from '@cdktn/provider-github'

new dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceA">DataGithubRepositoryPagesSourceA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGithubRepositoryPagesSourceA;
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubRepositoryPages.DataGithubRepositoryPagesSourceA">DataGithubRepositoryPagesSourceA</a>

---



