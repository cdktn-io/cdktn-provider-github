# `actionsOrganizationWorkflowPermissions` Submodule <a name="`actionsOrganizationWorkflowPermissions` Submodule" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsOrganizationWorkflowPermissions <a name="ActionsOrganizationWorkflowPermissions" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_organization_workflow_permissions github_actions_organization_workflow_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer"></a>

```typescript
import { actionsOrganizationWorkflowPermissions } from '@cdktn/provider-github'

new actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions(scope: Construct, id: string, config: ActionsOrganizationWorkflowPermissionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig">ActionsOrganizationWorkflowPermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig">ActionsOrganizationWorkflowPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetCanApprovePullRequestReviews">resetCanApprovePullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetDefaultWorkflowPermissions">resetDefaultWorkflowPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCanApprovePullRequestReviews` <a name="resetCanApprovePullRequestReviews" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetCanApprovePullRequestReviews"></a>

```typescript
public resetCanApprovePullRequestReviews(): void
```

##### `resetDefaultWorkflowPermissions` <a name="resetDefaultWorkflowPermissions" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetDefaultWorkflowPermissions"></a>

```typescript
public resetDefaultWorkflowPermissions(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ActionsOrganizationWorkflowPermissions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isConstruct"></a>

```typescript
import { actionsOrganizationWorkflowPermissions } from '@cdktn/provider-github'

actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformElement"></a>

```typescript
import { actionsOrganizationWorkflowPermissions } from '@cdktn/provider-github'

actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformResource"></a>

```typescript
import { actionsOrganizationWorkflowPermissions } from '@cdktn/provider-github'

actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport"></a>

```typescript
import { actionsOrganizationWorkflowPermissions } from '@cdktn/provider-github'

actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ActionsOrganizationWorkflowPermissions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActionsOrganizationWorkflowPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActionsOrganizationWorkflowPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_organization_workflow_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ActionsOrganizationWorkflowPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.canApprovePullRequestReviewsInput">canApprovePullRequestReviewsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.defaultWorkflowPermissionsInput">defaultWorkflowPermissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.organizationSlugInput">organizationSlugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.canApprovePullRequestReviews">canApprovePullRequestReviews</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.defaultWorkflowPermissions">defaultWorkflowPermissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.organizationSlug">organizationSlug</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `canApprovePullRequestReviewsInput`<sup>Optional</sup> <a name="canApprovePullRequestReviewsInput" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.canApprovePullRequestReviewsInput"></a>

```typescript
public readonly canApprovePullRequestReviewsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultWorkflowPermissionsInput`<sup>Optional</sup> <a name="defaultWorkflowPermissionsInput" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.defaultWorkflowPermissionsInput"></a>

```typescript
public readonly defaultWorkflowPermissionsInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `organizationSlugInput`<sup>Optional</sup> <a name="organizationSlugInput" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.organizationSlugInput"></a>

```typescript
public readonly organizationSlugInput: string;
```

- *Type:* string

---

##### `canApprovePullRequestReviews`<sup>Required</sup> <a name="canApprovePullRequestReviews" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.canApprovePullRequestReviews"></a>

```typescript
public readonly canApprovePullRequestReviews: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultWorkflowPermissions`<sup>Required</sup> <a name="defaultWorkflowPermissions" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.defaultWorkflowPermissions"></a>

```typescript
public readonly defaultWorkflowPermissions: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organizationSlug`<sup>Required</sup> <a name="organizationSlug" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.organizationSlug"></a>

```typescript
public readonly organizationSlug: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsOrganizationWorkflowPermissionsConfig <a name="ActionsOrganizationWorkflowPermissionsConfig" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.Initializer"></a>

```typescript
import { actionsOrganizationWorkflowPermissions } from '@cdktn/provider-github'

const actionsOrganizationWorkflowPermissionsConfig: actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.organizationSlug">organizationSlug</a></code> | <code>string</code> | The slug of the Organization. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.canApprovePullRequestReviews">canApprovePullRequestReviews</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether GitHub Actions can approve pull request reviews in any repository in the organization. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.defaultWorkflowPermissions">defaultWorkflowPermissions</a></code> | <code>string</code> | The default workflow permissions granted to the GITHUB_TOKEN when running workflows in any repository in the organization. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_organization_workflow_permissions#id ActionsOrganizationWorkflowPermissions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `organizationSlug`<sup>Required</sup> <a name="organizationSlug" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.organizationSlug"></a>

```typescript
public readonly organizationSlug: string;
```

- *Type:* string

The slug of the Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_organization_workflow_permissions#organization_slug ActionsOrganizationWorkflowPermissions#organization_slug}

---

##### `canApprovePullRequestReviews`<sup>Optional</sup> <a name="canApprovePullRequestReviews" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.canApprovePullRequestReviews"></a>

```typescript
public readonly canApprovePullRequestReviews: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether GitHub Actions can approve pull request reviews in any repository in the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_organization_workflow_permissions#can_approve_pull_request_reviews ActionsOrganizationWorkflowPermissions#can_approve_pull_request_reviews}

---

##### `defaultWorkflowPermissions`<sup>Optional</sup> <a name="defaultWorkflowPermissions" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.defaultWorkflowPermissions"></a>

```typescript
public readonly defaultWorkflowPermissions: string;
```

- *Type:* string

The default workflow permissions granted to the GITHUB_TOKEN when running workflows in any repository in the organization.

Can be 'read' or 'write'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_organization_workflow_permissions#default_workflow_permissions ActionsOrganizationWorkflowPermissions#default_workflow_permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_organization_workflow_permissions#id ActionsOrganizationWorkflowPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



