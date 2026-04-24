# `repositoryPages` Submodule <a name="`repositoryPages` Submodule" id="@cdktn/provider-github.repositoryPages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryPagesA <a name="RepositoryPagesA" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages github_repository_pages}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer"></a>

```typescript
import { repositoryPages } from '@cdktn/provider-github'

new repositoryPages.RepositoryPagesA(scope: Construct, id: string, config: RepositoryPagesAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig">RepositoryPagesAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig">RepositoryPagesAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetBuildType">resetBuildType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetCname">resetCname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetHttpsEnforced">resetHttpsEnforced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetPublic">resetPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetSource">resetSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSource` <a name="putSource" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.putSource"></a>

```typescript
public putSource(value: RepositoryPagesSourceA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a>

---

##### `resetBuildType` <a name="resetBuildType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetBuildType"></a>

```typescript
public resetBuildType(): void
```

##### `resetCname` <a name="resetCname" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetCname"></a>

```typescript
public resetCname(): void
```

##### `resetHttpsEnforced` <a name="resetHttpsEnforced" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetHttpsEnforced"></a>

```typescript
public resetHttpsEnforced(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPublic` <a name="resetPublic" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetPublic"></a>

```typescript
public resetPublic(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetSource"></a>

```typescript
public resetSource(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RepositoryPagesA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isConstruct"></a>

```typescript
import { repositoryPages } from '@cdktn/provider-github'

repositoryPages.RepositoryPagesA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformElement"></a>

```typescript
import { repositoryPages } from '@cdktn/provider-github'

repositoryPages.RepositoryPagesA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformResource"></a>

```typescript
import { repositoryPages } from '@cdktn/provider-github'

repositoryPages.RepositoryPagesA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport"></a>

```typescript
import { repositoryPages } from '@cdktn/provider-github'

repositoryPages.RepositoryPagesA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RepositoryPagesA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RepositoryPagesA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RepositoryPagesA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RepositoryPagesA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.apiUrl">apiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildStatus">buildStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.custom404">custom404</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.htmlUrl">htmlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repositoryId">repositoryId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.source">source</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference">RepositoryPagesSourceAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildTypeInput">buildTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cnameInput">cnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.httpsEnforcedInput">httpsEnforcedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.publicInput">publicInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildType">buildType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cname">cname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.httpsEnforced">httpsEnforced</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.public">public</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repository">repository</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiUrl`<sup>Required</sup> <a name="apiUrl" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

---

##### `buildStatus`<sup>Required</sup> <a name="buildStatus" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildStatus"></a>

```typescript
public readonly buildStatus: string;
```

- *Type:* string

---

##### `custom404`<sup>Required</sup> <a name="custom404" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.custom404"></a>

```typescript
public readonly custom404: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `htmlUrl`<sup>Required</sup> <a name="htmlUrl" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.htmlUrl"></a>

```typescript
public readonly htmlUrl: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repositoryId"></a>

```typescript
public readonly repositoryId: number;
```

- *Type:* number

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.source"></a>

```typescript
public readonly source: RepositoryPagesSourceAOutputReference;
```

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference">RepositoryPagesSourceAOutputReference</a>

---

##### `buildTypeInput`<sup>Optional</sup> <a name="buildTypeInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildTypeInput"></a>

```typescript
public readonly buildTypeInput: string;
```

- *Type:* string

---

##### `cnameInput`<sup>Optional</sup> <a name="cnameInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cnameInput"></a>

```typescript
public readonly cnameInput: string;
```

- *Type:* string

---

##### `httpsEnforcedInput`<sup>Optional</sup> <a name="httpsEnforcedInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.httpsEnforcedInput"></a>

```typescript
public readonly httpsEnforcedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `publicInput`<sup>Optional</sup> <a name="publicInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.publicInput"></a>

```typescript
public readonly publicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.sourceInput"></a>

```typescript
public readonly sourceInput: RepositoryPagesSourceA;
```

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a>

---

##### `buildType`<sup>Required</sup> <a name="buildType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildType"></a>

```typescript
public readonly buildType: string;
```

- *Type:* string

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cname"></a>

```typescript
public readonly cname: string;
```

- *Type:* string

---

##### `httpsEnforced`<sup>Required</sup> <a name="httpsEnforced" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.httpsEnforced"></a>

```typescript
public readonly httpsEnforced: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.public"></a>

```typescript
public readonly public: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryPagesAConfig <a name="RepositoryPagesAConfig" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.Initializer"></a>

```typescript
import { repositoryPages } from '@cdktn/provider-github'

const repositoryPagesAConfig: repositoryPages.RepositoryPagesAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.repository">repository</a></code> | <code>string</code> | The repository name to configure GitHub Pages for. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.buildType">buildType</a></code> | <code>string</code> | The type of GitHub Pages site to build. Can be 'legacy' or 'workflow'. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.cname">cname</a></code> | <code>string</code> | The custom domain for the repository. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.httpsEnforced">httpsEnforced</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the rendered GitHub Pages site will only be served over HTTPS. Requires 'cname' to be set. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#id RepositoryPagesA#id}. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.public">public</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the GitHub Pages site is publicly visible. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a></code> | source block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository name to configure GitHub Pages for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#repository RepositoryPagesA#repository}

---

##### `buildType`<sup>Optional</sup> <a name="buildType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.buildType"></a>

```typescript
public readonly buildType: string;
```

- *Type:* string

The type of GitHub Pages site to build. Can be 'legacy' or 'workflow'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#build_type RepositoryPagesA#build_type}

---

##### `cname`<sup>Optional</sup> <a name="cname" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.cname"></a>

```typescript
public readonly cname: string;
```

- *Type:* string

The custom domain for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#cname RepositoryPagesA#cname}

---

##### `httpsEnforced`<sup>Optional</sup> <a name="httpsEnforced" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.httpsEnforced"></a>

```typescript
public readonly httpsEnforced: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the rendered GitHub Pages site will only be served over HTTPS. Requires 'cname' to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#https_enforced RepositoryPagesA#https_enforced}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#id RepositoryPagesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `public`<sup>Optional</sup> <a name="public" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.public"></a>

```typescript
public readonly public: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the GitHub Pages site is publicly visible.

If set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#public RepositoryPagesA#public}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.source"></a>

```typescript
public readonly source: RepositoryPagesSourceA;
```

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#source RepositoryPagesA#source}

---

### RepositoryPagesSourceA <a name="RepositoryPagesSourceA" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.Initializer"></a>

```typescript
import { repositoryPages } from '@cdktn/provider-github'

const repositoryPagesSourceA: repositoryPages.RepositoryPagesSourceA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.property.branch">branch</a></code> | <code>string</code> | The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages'). |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.property.path">path</a></code> | <code>string</code> | The repository directory from which the site publishes (Default: '/'). |

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#branch RepositoryPagesA#branch}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The repository directory from which the site publishes (Default: '/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pages#path RepositoryPagesA#path}

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryPagesSourceAOutputReference <a name="RepositoryPagesSourceAOutputReference" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer"></a>

```typescript
import { repositoryPages } from '@cdktn/provider-github'

new repositoryPages.RepositoryPagesSourceAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RepositoryPagesSourceA;
```

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a>

---



