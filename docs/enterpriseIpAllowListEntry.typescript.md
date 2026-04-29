# `enterpriseIpAllowListEntry` Submodule <a name="`enterpriseIpAllowListEntry` Submodule" id="@cdktn/provider-github.enterpriseIpAllowListEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseIpAllowListEntry <a name="EnterpriseIpAllowListEntry" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry github_enterprise_ip_allow_list_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer"></a>

```typescript
import { enterpriseIpAllowListEntry } from '@cdktn/provider-github'

new enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry(scope: Construct, id: string, config: EnterpriseIpAllowListEntryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig">EnterpriseIpAllowListEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig">EnterpriseIpAllowListEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetIsActive">resetIsActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsActive` <a name="resetIsActive" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetIsActive"></a>

```typescript
public resetIsActive(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EnterpriseIpAllowListEntry resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isConstruct"></a>

```typescript
import { enterpriseIpAllowListEntry } from '@cdktn/provider-github'

enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformElement"></a>

```typescript
import { enterpriseIpAllowListEntry } from '@cdktn/provider-github'

enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformResource"></a>

```typescript
import { enterpriseIpAllowListEntry } from '@cdktn/provider-github'

enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport"></a>

```typescript
import { enterpriseIpAllowListEntry } from '@cdktn/provider-github'

enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EnterpriseIpAllowListEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EnterpriseIpAllowListEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EnterpriseIpAllowListEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EnterpriseIpAllowListEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.enterpriseSlugInput">enterpriseSlugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.ipInput">ipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.isActiveInput">isActiveInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.enterpriseSlug">enterpriseSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.isActive">isActive</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `enterpriseSlugInput`<sup>Optional</sup> <a name="enterpriseSlugInput" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.enterpriseSlugInput"></a>

```typescript
public readonly enterpriseSlugInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.ipInput"></a>

```typescript
public readonly ipInput: string;
```

- *Type:* string

---

##### `isActiveInput`<sup>Optional</sup> <a name="isActiveInput" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.isActiveInput"></a>

```typescript
public readonly isActiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `enterpriseSlug`<sup>Required</sup> <a name="enterpriseSlug" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.enterpriseSlug"></a>

```typescript
public readonly enterpriseSlug: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.isActive"></a>

```typescript
public readonly isActive: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseIpAllowListEntryConfig <a name="EnterpriseIpAllowListEntryConfig" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.Initializer"></a>

```typescript
import { enterpriseIpAllowListEntry } from '@cdktn/provider-github'

const enterpriseIpAllowListEntryConfig: enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.enterpriseSlug">enterpriseSlug</a></code> | <code>string</code> | The slug of the enterprise to apply the IP allow list entry to. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.ip">ip</a></code> | <code>string</code> | An IP address or range of IP addresses in CIDR notation. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#id EnterpriseIpAllowListEntry#id}. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.isActive">isActive</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the entry is currently active. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.name">name</a></code> | <code>string</code> | An optional name for the IP allow list entry. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `enterpriseSlug`<sup>Required</sup> <a name="enterpriseSlug" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.enterpriseSlug"></a>

```typescript
public readonly enterpriseSlug: string;
```

- *Type:* string

The slug of the enterprise to apply the IP allow list entry to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#enterprise_slug EnterpriseIpAllowListEntry#enterprise_slug}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

An IP address or range of IP addresses in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#ip EnterpriseIpAllowListEntry#ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#id EnterpriseIpAllowListEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isActive`<sup>Optional</sup> <a name="isActive" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.isActive"></a>

```typescript
public readonly isActive: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the entry is currently active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#is_active EnterpriseIpAllowListEntry#is_active}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

An optional name for the IP allow list entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#name EnterpriseIpAllowListEntry#name}

---



